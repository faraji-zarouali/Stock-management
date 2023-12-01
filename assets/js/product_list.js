$(document).ready(function() {
    var changeStatusBtn = $('#change-status-btn');
    changeStatusBtn.hide();
    
    var productDataTable = $('#product-datatable').DataTable({
        processing: true,
        serverSide: true,
        pageLength: 8,
        lengthMenu: [
            [8, 25, 50, -1],
            [8, 25, 50, 'All']
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
                    return data ? '<input type="checkbox" class="product-checkbox" disabled>' :'<input type="checkbox" class="product-checkbox" data-product-id="' + row.id + '">';
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
                    var iconClass = data ? 'fas fa-check text-success' : 'fas fa-times text-danger';
                    return '<i class="' + iconClass + '"></i>';
                },
                orderable: false,
            },
            {
                data: 'id',
                render: function(data, type, row) {
                    return `<div class="dropdown-table">
                      <button class="buttonDropDownRow" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-ellipsis-h"></i>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item edit-button" data-product-id="${data}">Update</a>
                        <a class="dropdown-item extract-pdf-button" data-product-id="${data}">Extract PDF</a>
                    </div>
                </div>`;
                }
            },
        ],
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
                    $("#newProductName").val();
                    $("#newProductPrice").val("");
                    $("#newProductQuantity").val("");
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


            // Handle "Check All" functionality
    $('#select_all').on('change', function() {
        var isChecked = $(this).prop('checked');
        
        // Check or uncheck all (excluding disabled checkboxes)
        $('.product-checkbox:enabled', productDataTable.rows().nodes()).prop('checked', isChecked);

        // Show the button if at least one checkbox is checked
        changeStatusBtn.toggle($('.product-checkbox:checked', productDataTable.rows().nodes()).length > 0);
    });

    // Handle individual checkbox changes
    $('#product-datatable tbody').on('change', '.product-checkbox', function() {
        // Check if all selectable checkboxes are checked and update the "Check All" checkbox
        $('#select_all').prop('checked', $('.product-checkbox:enabled:checked').length === $('.product-checkbox:enabled').length);

        // Show the button if at least one checkbox is checked
        changeStatusBtn.toggle($('.product-checkbox:checked', productDataTable.rows().nodes()).length > 0);
    });

    // Show the button if at least one checkbox is checked
    changeStatusBtn.toggle($('.product-checkbox:checked', productDataTable.rows().nodes()).length > 0);

    
    changeStatusBtn.on('click', function() {
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
                console.log(response);
            },
            error: function(error) {
                // Handle errors
                console.error(error);
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
                        $('#editProductSupplier').val(dataResult.product.supplier);
                        $('#editProductCategory').val(dataResult.product.category);

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