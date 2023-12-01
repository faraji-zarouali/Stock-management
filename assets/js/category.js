$(document).ready(function() {
                    
    var table = $('#category-datatable').DataTable({
        pageLength: 8,
        lengthMenu: [
            [8, 25, 50, -1],
            [8, 25, 50, 'All']
        ],
        ajax: {
            url: Routing.generate('app_category_getlist'),
        },
        order: [[0, 'asc']],
        columns: [
            {name: 'c.id', data: 'id', orderable: true , searchable: true},
            {name: 'c.name', data: 'name', orderable: true , searchable: true},
            {name: 'c.description', data: 'description', orderable: true , searchable: true},
            {name: 'c.code', data: 'code', orderable: true , searchable: true},
            {
                name: 'c.isActive',
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
                    var deactivateButton = `<button class="btn btn-${row.status ? 'danger' : 'secondary'} action-button" data-category-id="${data}">Activate</button>`;
                    var editButton = `<button class="btn btn-primary edit-button" data-category-id="${data}">Update</button>`;
                    return `${deactivateButton} ${editButton}`;
                }
            }
        ],
        dom: 'Bfrtip',
    });

        $('body').on('click', '#add-category-button', function() {               
            $('#add-category-modal').modal('show');
    });

    $('#add-category-modal').on('click', '#add-category-btn', function() {
    var newCategoryName = $("#newCategoryName").val();
    var newCategoryDescription = $("#newCategoryDescription").val();
    var newCategoryCode = $("#newCategoryCode").val();

    var newCategoryData = {
        name: newCategoryName,
        description: newCategoryDescription,
        code: newCategoryCode,
    };

    $.ajax({
    url:  Routing.generate('app_new_category'),
    type: "POST",
    contentType: 'application/json',
    data: JSON.stringify(newCategoryData),
    success: function(response, textStatus, xhr) {

        if (xhr.status === 200) {
            table.ajax.reload(null, false);
            $('#add-category-modal').modal('hide'); 
            $('#newCategoryName').val("");
            $('#newCategoryDescription').val("");
            $('#newCategoryCode').val("");
            // Show success pop-up
            toastr["success"]("New category Added successfully", "Success")
        } else {
            console.error('Unexpected success status code:', xhr.status);
        }
    },
    error: function (xhr) {
    // Handle errors
    if (xhr.responseJSON && xhr.responseJSON.errors) {
        // Display validation errors to the Category
        toastr["error"](xhr.responseJSON.errors);
    } else {
        // Handle other errors
        toastr["error"]('An error occurred');
    }
    }
    });                   
    });

    $('body').on('click', '.edit-button', function() {
        var categoryId = $(this).data('category-id');
            $.ajax({
                url: Routing.generate('app_get_category', {id:categoryId}),
                type: "GET",
            success: function(dataResult){   
                        $('#cId').val(dataResult.category.id);
                        $('#editCategoryName').val(dataResult.category.name);
                        $('#editCategorydescription').val(dataResult.category.description);
                        $('#editCategoryCode').val(dataResult.category.code);

                        $('#edit-category-modal').modal('show');
                    }
            });
    });

    $('.modal').on('click', '#edit-category-btn', function() {
    
        var updatedCategoryId = $("#cId").val();
        var updatedCategoryName = $("#editCategoryName").val();
        var updatedCategorydescription = $('#editCategorydescription').val();
        var updatedCategoryCode = $("#editCategoryCode").val();

        var updatedCategoryData = {
                            id: updatedCategoryId,
                            name: updatedCategoryName,
                            description: updatedCategorydescription,
                            code: updatedCategoryCode,
                        };
            $.ajax({
                url: Routing.generate('app_update_category'),
                type: "POST",
                contentType: 'application/json',
                data: JSON.stringify(updatedCategoryData),
                success: function(response, textStatus, xhr) {
                    console.log(response);
                    if (xhr.status === 200) {                      
                        table.ajax.reload(null, false);
                        $('#edit-category-modal').modal('hide');
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
                    // Display validation errors to the category
                    toastr["error"]('Validation errors:\n' + xhr.responseJSON.errors.join('\n'));
                } else {
                    // Handle other errors
                    toastr["error"]('An error occurred');
                }
            }
            });
        
    });


    $('body').on('click', '.action-button', function() {
        var categoryId = $(this).data('category-id');
            $.ajax({
                url: Routing.generate('app_update_category_status',{id:categoryId}),
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
