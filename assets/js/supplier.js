$(document).ready(function() {
                    
    var table = $('#supplier-datatable').DataTable({
        pageLength: 8,
        lengthMenu: [
            [8, 25, 50, -1],
            [8, 25, 50, 'All']
        ],
        ajax: {
            url: Routing.generate('app_supplier_getlist'),
        },
        order: [[0, 'asc']],
        columns: [
            {name: 's.id', data: 'id', orderable: true , searchable: true},
            {name: 's.name', data: 'name', orderable: true , searchable: true},
            {name: 's.address', data: 'address', orderable: true , searchable: true},
            {name: 's.email', data: 'email', orderable: true , searchable: true},
            {name: 's.phone', data: 'phone', orderable: true , searchable: true},
            {
                name: 's.isActive',
                data: 'isActive',
                render: function(data) {
                    var iconClass = data ? 'fas fa-check text-success' : 'fas fa-times text-danger';
                    return '<i class="' + iconClass + '"></i>';
                },
                orderable: false,
            },
            {
                data: 'id',
                render: function(data, type, row) {
                    var deactivateButton = `<button class="btn btn-${row.status ? 'danger' : 'secondary'} action-button" data-supplier-id="${data}">Activate</button>`;
                    var editButton = `<button class="btn btn-primary edit-button" data-supplier-id="${data}">Update</button>`;
                    return `${deactivateButton}${editButton}`;
                }
            },
        ],
        dom: 'Bfrtip',
        autoWidth: false
    });

        $('body').on('click', '#add-supplier-button', function() { 
            $('#add-supplier-modal').modal('show'); 
    });

    $('#add-supplier-modal').on('click', '#add-supplier-btn', function() {
    var newSupplierName = $("#newSupplierName").val();
    var newSupplierAddress = $("#newSupplierAddress").val();
    var newSupplierEmail = $("#newSupplierEmail").val();
    var newSupplierPhone = $("#newSupplierPhone").val();

    var newSupplierData = {
        name: newSupplierName,
        address: newSupplierAddress,
        email: newSupplierEmail,
        phone: newSupplierPhone,
    };

    $.ajax({
    url:  Routing.generate('app_new_supplier'),
    type: "POST",
    contentType: 'application/json',
    data: JSON.stringify(newSupplierData),
    success: function(response, textStatus, xhr) {

        if (xhr.status === 200) {
            table.ajax.reload(null, false);
            $('#add-supplier-modal').modal('hide'); 
            $('#newSupplierName').val("");
            $('#newSupplierAddress').val("");
            $('#newSupplierEmail').val("");
            $('#newSupplierPhone').val("");
            // Show success pop-up
            toastr["success"]("New supplier Added successfully", "Success")
        } else {
            console.error('Unexpected success status code:', xhr.status);
        }
    },
    error: function (xhr) {
    // Handle errors
    if (xhr.responseJSON && xhr.responseJSON.errors) {
        // Display validation errors to the supplier
        toastr["error"](xhr.responseJSON.errors);
    } else {
        // Handle other errors
        toastr["error"]('An error occurred');
    }
    }
    });                   
    });

    $(document).on("click", ".close", function() {
        $("#add-supplier-modal").hide();
      });


    $('body').on('click', '.edit-button', function() {
        var supplierId = $(this).data('supplier-id');
            $.ajax({
                url: Routing.generate('app_get_supplier', {id:supplierId}),
                type: "GET",
            success: function(dataResult){                            
                        $('#sId').val(dataResult.supplier.id);
                        $('#editSupplierName').val(dataResult.supplier.name);
                        $('#editSupplierAddress').val(dataResult.supplier.address);
                        $('#editSupplierEmail').val(dataResult.supplier.email);
                        $('#editSupplierPhone').val(dataResult.supplier.phone);

                        $('#edit-supplier-modal').modal('show');
                    }
            });
    });

    $('.modal').on('click', '#edit-supplier-btn', function() {
    
        var updatedSupplierId = $("#sId").val();
        var updatedSupplierName = $("#editSupplierName").val();
        var updatedSupplierAddress = $('#editSupplierAddress').val();
        var updatedSupplierEmail = $("#editSupplierEmail").val();
        var updatedSupplierPhone = $('#editSupplierPhone').val();

        var updatedSupplierData = {
                            id: updatedSupplierId,
                            name: updatedSupplierName,
                            address: updatedSupplierAddress,
                            email: updatedSupplierEmail,
                            phone: updatedSupplierPhone
                        };
            $.ajax({
                url: Routing.generate('app_update_supplier'),
                type: "POST",
                contentType: 'application/json',
                data: JSON.stringify(updatedSupplierData),
                success: function(response, textStatus, xhr) {
                    console.log(response);
                    if (xhr.status === 200) {                      
                        table.ajax.reload(null, false);
                        $('#edit-supplier-modal').modal('hide');
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
                    // Display validation errors to the Supplier
                    toastr["error"]('Validation errors:\n' + xhr.responseJSON.errors.join('\n'));
                } else {
                    // Handle other errors
                    toastr["error"]('An error occurred');
                }
            }
            });
        
    });

    $('body').on('click', '.action-button', function() {
        var supplierId = $(this).data('supplier-id');
            $.ajax({
                url: Routing.generate('app_update_supplier_status',{id:supplierId}),
                type: "GET",
            success: function(response, textStatus, xhr) {
                    console.log(response);
                    if (xhr.status === 200) {                
                        table.ajax.reload(null, false);
                        // Show success pop-up
                        toastr["success"]("Status Update successfully", "Success");
                    } else {
                        console.error('Unexpected success status code:', xhr.status);
                    }
                },
                error: function(xhr, status, error) {
                console.error('Status Update failed:', error);
                    if (xhr.status >= 400 && xhr.status < 500) {
                         alert('Status Update failed: Client error');
                    } else if (xhr.status >= 500) {
                         alert('Status Update failed: Server error');
                    }
                }
            });
        
    });

});
