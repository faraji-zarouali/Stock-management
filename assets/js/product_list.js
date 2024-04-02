$(document).ready(function() {
    var changeStatusBtn = $('#change-status-btn');
    changeStatusBtn.hide();
    
    var productDataTable = $('#product-datatable').DataTable({
        processing: true,
        serverSide: true,
        pagingTag: 'button',
        lengthMenu: [
            [15, 25, 50, 100],
            [15, 25, 50, 100],
          ],
        autoWidth: false,
        ajax: {
            url: Routing.generate('app_product_get_list'),
            datasrc : function(d) {
                d.draw = d.draw || 0;
                d.start = d.start || 0;
                d.length = d.length || 15;
            },
        },
        order: [[1, 'asc']],
        columns: [
            {
                data: 'status',
                render: function (data, type, row) {
                    let checkboxItem =  data ? '<input type="checkbox" class="product-checkbox" data-product-id="' + row.id + '">':'<input type="checkbox" class="product-checkbox" disabled checked>' ;
                    // Return final HTML string
                    return checkboxItem;
                },
                orderable: false,
            },
            {name: 'p.id', data: 'id', orderable: true , searchable: true},
            {name: 'p.name', data: 'product_name', orderable: true , searchable: true},
            {name: 'p.price', data: 'product_price',
                    render: function(data) {
                        return `${data} DH`;
                    }
            },
            {name: 'p.quantity', data: 'product_quantity', orderable: true},
            {name: 's.name', data: 'supplier_name', searchable: true},
            {name: 'c.name', data: 'category_name', searchable: true},
            {
                data: 'status',
                render: function(data) {
                    var iconClass = data ? 'far fa-check-circle text-success' : 'far fa-times-circle text-danger';
                    return '<i class="' + iconClass + '" style="font-size: 16px;"></i>';
                },
                orderable: false,
            },
            {
                data: 'id',
                render: function(data, type, row) {
                    // Create dropdown button
                    let dropdownButton = `<button class="buttonDropDownRow" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="cursor: default;">
                    <i class="fa fa-ellipsis-h"></i>
                        </button>`;

                    // Create dropdown menu items
                    let updateItem = `<a class="dropdown-item edit-button" data-product-id="${data}" ><i class="fas fa-edit"></i> Update</a>`; // Adjust width here
                    let extractPDFItem = `<a class="dropdown-item extract-pdf-button" data-product-id="${data}" ><i class="fas fa-file-pdf"></i> Extract PDF</a>`; // Adjust width here
                    
                    // Combine all elements
                    let dropdownMenu = `<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            ${updateItem}
                            ${extractPDFItem}
                        </div>`;

                    // Return final HTML string
                    return `<div class="dropdown-table">
                    ${dropdownButton}
                    ${dropdownMenu}
                    </div>`;
                },
                orderable: false,
            }
            
        ],
        pagingType: 'simple_numbers',
        language: {
            // url: "//cdn.datatables.net/plug-ins/1.10.24/i18n/French.json",
            loadingRecords: '&nbsp;',
            processing: "<span><i class='fa fa-spinner fa-spin fa-lg' style='font-size: 28px;'></i><br>Processing...</span>",
            searchPlaceholder: "Search",
            search: "",
        },
        // dom: 'lrtip',
        autoWidth: false
    });
    $('body').on('click', '#add-product-button', function() {   
        $('#add-product-modal').modal('show'); 
             
    });

    $('#add-product-modal').on('click', '#add-product-btn', function() {

        var newProductName = $("#newProductName").val();
        var newProductPrice = $("#newProductPrice").val();
        var newProductQuantity = $("#newProductQuantity").val();
        var newProductSupplier = $('#newProductSupplier').find(":selected").val();
        var newProductCategory = $('#newProductCategory').find(":selected").val();
        var newProductData = {
            name: newProductName,
            price: newProductPrice,
            quantity: newProductQuantity,
            supplier: newProductSupplier,
            category: newProductCategory,
        };

        $.ajax({
            url:  Routing.generate('app_new_product'),
            type: "POST",
            contentType: 'application/json',
            data: JSON.stringify(newProductData),
            success: function(response, textStatus, xhr) {
                if (xhr.status === 200) {
                    productDataTable.ajax.reload(null, false);
                    $('#add-product-modal').modal('hide'); 
                    $("#newProductName").val("");
                    $("#newProductPrice").val("");
                    $("#newProductQuantity").val("");
                    $("#newProductSupplier").val("");
                    $("#newProductCategory").val("");
                    // Show success pop-up
                    toastr["success"]("New Product Added successfully", "Success")
                } else {
                    console.error('Unexpected success status code:', xhr.status);
                }
            },
            error: function (xhr) {
            
            if (xhr.responseJSON && xhr.responseJSON.errors) {
                // Display validation errors to the Product
                toastr["error"](xhr.responseJSON.errors);
            } else {
                // Handle other errors
                toastr["error"]('An error occurred');
            }
        }
        });                   
    });


    // Handle click on table rows
    $('#product-datatable tbody').on('click', 'tr', function(event) {
        // Find the last td element
        var lastTd = $(this).find('td:last');

        // Get the index of the clicked td element
        var clickedIndex = $(event.target).closest('td').index();

        // Get the total number of td elements in the row
        var totalTds = $(this).find('td').length;

        // Check if the clicked element is the last td
        if (clickedIndex === totalTds - 1) {
            // Do nothing if clicked on the last td
            return;
        }

        // Find the checkbox within the row
        var checkbox = $(this).find('.product-checkbox');

        // Check if the click event originated from the checkbox
        if ($(event.target).is(':checkbox')) {
            // Change background color based on checkbox state
            if (checkbox.prop('checked')) {
                $(this).addClass('selected-row');
            } else {
                $(this).removeClass('selected-row');
            }
        } else {
            // Check if the checkbox is disabled
            if (!checkbox.prop('disabled')) {
                // Toggle checkbox state
                checkbox.prop('checked', !checkbox.prop('checked'));

                // Change background color based on checkbox state
                if (checkbox.prop('checked')) {
                    $(this).addClass('selected-row');
                } else {
                    $(this).removeClass('selected-row');
                }
            }
        }

        // Show the button if at least one checkbox is checked
        if ($('.product-checkbox:checked', productDataTable.rows().nodes()).length > 0) {
            changeStatusBtn.show();
        } else {
            changeStatusBtn.hide();
        }

        // Update "indeterminate" class on select_all checkbox
        updateSelectAllCheckbox();
    });


    // Function to update "select all" checkbox state based on selected checkboxes
    function updateSelectAllCheckbox() {
        var checkedCheckboxes = $('.product-checkbox:enabled:checked').length;
        var totalCheckboxes = $('.product-checkbox:enabled').length;
        
        // Check if all checkboxes are checked and update the "Select All" checkbox
        $('#select_all').prop('checked', checkedCheckboxes === totalCheckboxes);
        
        // Update "indeterminate" class on select_all checkbox
        $('#select_all').toggleClass('indeterminate', checkedCheckboxes > 0 && checkedCheckboxes < totalCheckboxes);

        // Show the button if at least one checkbox is checked
        changeStatusBtn.toggle(checkedCheckboxes > 0);
    }


    // Handle "Check All" functionality and row background color change
    $('#select_all').on('change', function() {
        var isChecked = $(this).prop('checked');
        
        // Toggle checkbox state for all checkboxes
        $('.product-checkbox:enabled', productDataTable.rows().nodes()).prop('checked', isChecked);
        
        // Change background color of enabled rows based on checkbox state
        if (isChecked) {
            $('#product-datatable tbody tr:has(:checkbox:enabled)').addClass('selected-row');
        } else {
            $('#product-datatable tbody tr:has(:checkbox:enabled)').removeClass('selected-row');
        }

        // Show or hide button based on checked checkboxes
        changeStatusBtn.toggle($('.product-checkbox:checked', productDataTable.rows().nodes()).length > 0);

        // Show changeStatusBtn when Select All checkbox is clicked
        if (isChecked) {
            changeStatusBtn.show();
        } else {
            // Hide changeStatusBtn if no checkboxes are checked
            changeStatusBtn.hide();
        }

        // Remove the class 'indeterminate' from the desired element
        $('#select_all').removeClass('indeterminate');
    });


    // Handle individual checkbox changes
    $('#product-datatable tbody').on('change', '.product-checkbox', function() {
        var checkedCheckboxes = $('.product-checkbox:enabled:checked').length;
        var totalCheckboxes = $('.product-checkbox:enabled').length;

        // Check if all selectable checkboxes are checked and update the "Check All" checkbox
        $('#select_all').prop('checked', checkedCheckboxes === totalCheckboxes);

        // If some but not all checkboxes are checked, add the "indeterminate" class to the "Select All" checkbox
        if (checkedCheckboxes > 0 && checkedCheckboxes < totalCheckboxes) {
            $('#select_all').addClass('indeterminate');
        } else {
            $('#select_all').removeClass('indeterminate');
        }

        // Show the button if at least one checkbox is checked
        changeStatusBtn.toggle(checkedCheckboxes > 0);
    });

    // Show the button if at least one checkbox is checked
    changeStatusBtn.toggle($('.product-checkbox:checked', productDataTable.rows().nodes()).length > 0);

    changeStatusBtn.on('click', function() {
        swalWithBootstrapButtons
        .fire({
          showClass: {
            popup: "animatedSwal flipInX faster",
          },
          position: "top",
          title: "Confirmation ?",
          text: "do u really want to desactivate this product?",
          type: "warning",
          showCancelButton: true,
          showCloseButton: true,
          confirmButtonClass: "btn btn-success",
          confirmButtonText: "<i class='fa fa-check'></i> Yes !",
          cancelButtonText: "<i class='fa fa-times'></i> No !",
        })
        .then((isConfirmed) => {
          if (isConfirmed.value) {
            var selectedProductIds = [];

            // Get the IDs of selected products
            $('.product-checkbox:checked', productDataTable.rows().nodes()).each(function() {
                selectedProductIds.push($(this).data('product-id'));
            });
            $.ajax({
                url:  Routing.generate('app_update_product_status'),
                type: 'POST',
                contentType: 'application/json;charset=utf-8',
                data: JSON.stringify({ productIds: selectedProductIds }),
                success: function(response) {
                    productDataTable.ajax.reload(null, false);
                    $('#select_all').prop('checked', false);
                    changeStatusBtn.hide();
                        // Show success pop-up
                    toastr["success"]("Status changed successfully", "Success")
                    $('#select_all').removeClass('indeterminate');

                },
                error: function(error) {
                    // Handle errors
                    console.error(error);
                }
            });
        
          } else {
            toastr.info("Demande annulée !");
          }
        });      
        
    });

    $('body').on('click', '.edit-button', function() {
        var productId = $(this).data('product-id');
            $.ajax({
                url: Routing.generate('app_get_product', {id:productId}),
                type: "GET",
            success: function(dataResult){                            
                        $('#pId').val(dataResult.product.id);
                        $('#editProductName').val(dataResult.product.name);
                        $('#editProductPrice').val(dataResult.product.price);
                        $('#editProductQuantity').val(dataResult.product.quantity);
                        $('#editProductSupplier').val(dataResult.product.supplier).trigger("change");;
                        $('#editProductCategory').val(dataResult.product.category).trigger("change");;

                        $('#edit-product-modal').modal('show');
                    }
            });
        
    });


    $('.modal').on('click', '#btnUpdateSubmit', function() {
    
        var updatedProductId = $("#pId").val();
        var updatedProductName = $("#editProductName").val();
        var updatedProductPrice = $("#editProductPrice").val();
        var updatedProductQuantity = $("#editProductQuantity").val();
        var updatedProductSupplier = $('#editProductSupplier').find(":selected").val();
        var updatedProductCategory = $('#editProductCategory').find(":selected").val();
        var updatedProductData = {
                            id: updatedProductId,
                            name: updatedProductName,
                            price: updatedProductPrice,
                            quantity: updatedProductQuantity,
                            supplier: updatedProductSupplier,
                            category: updatedProductCategory,
                        };
            $.ajax({
                url: Routing.generate('app_update_product'),
                type: "POST",
                contentType: 'application/json',
                data: JSON.stringify(updatedProductData),
                success: function(response, textStatus, xhr) {
                    console.log(response);
                    if (xhr.status === 200) {
                        
                        productDataTable.ajax.reload(null, false);
                        $('#edit-product-modal').modal('hide');

                        // Show success pop-up
                        toastr["success"]("Update successfully", "Success")
                    } else {
                        console.error('Unexpected success status code:', xhr.status);
                    }
                },
                error: function (xhr) {
                // Handle errors
                if (xhr.responseJSON && xhr.responseJSON.errors) {                       
                    toastr["error"](xhr.responseJSON.errors);
                } else {
                    // Handle other errors
                    toastr["error"]('An error occurred');
                }
            }
            });
        
    });

    $('body').on('click', '.extract-pdf-button', function() {
        var productId = $(this).data('product-id');
            
        var url = Routing.generate('export_to_pdf', { id: productId });

        // Open the PDF in a new window or tab
        window.open(url, '_blank');
        
    });
});