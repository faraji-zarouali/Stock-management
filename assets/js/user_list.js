$(document).ready(function() {
                    
    var table = $('#user-datatable').DataTable({
        processing: true,
        serverSide: true,
        pageLength: 8,
        lengthMenu: [
            [8, 25, 50, -1],
            [8, 25, 50, 'All']
        ],
        ajax: {
            url: Routing.generate('app_user_getlist'),
            datasrc : function(d) {
                d.draw = d.draw || 0;
                d.start = d.start || 0;
                d.length = d.length || 15;
            },
        },
        order: [[0, 'asc']],
        columns: [
            {name: 'u.id', data: 'id', orderable: true , searchable: true},
            {name: 'u.email', data: 'email', orderable: true , searchable: true},
            { 
                name: 'u.roles',
                data: 'roles',
                render: function(data) {
                    return data == 'ROLE_USER' ? 'ROLE_USER' : 'ROLE_ADMIN';
                }
            },
            {   
                name: 'u.status',
                data: 'status',
                render: function(data) {
                    var iconClass = data ? 'fas fa-user' : 'fas fa-user-slash';
                    return '<i class="' + iconClass + '" ></i>';
                }
            }, 
            {
                data: 'id',
                render: function(data, type, row) {
                    var deactivateButton = `<button class="btn btn-${row.status ? 'danger' : 'secondary'} action-button" data-user-id="${data}">${row.status ? 'Deactivate' : 'Activate'}</button>`;
                    var editButton = `<button class="btn btn-primary edit-button" data-user-id="${data}">Update</button>`;
                    return `${deactivateButton} ${editButton}`;
                }
            }
        ],
        dom: 'Bfrtip',
    });

    
    $('body').on('click', '#add-user-button', function() {               
                        $('#add-user-modal').modal('show');     
            });



    $('#add-user-modal').on('click', '#add-user-btn', function() {

            var newUserEmail = $("#newUserEmail").val();
            var newUserRole = $('#newUserRole').find(":selected").val();
            var newUserPassword = $("#newUserPassword").val();
            var newUserData = {
                email: newUserEmail,
                role: newUserRole,
                password: newUserPassword,
            };

            $.ajax({
                url:  Routing.generate('app_new_user'),
                type: "POST",
                contentType: 'application/json',
                data: JSON.stringify(newUserData),
                success: function(response, textStatus, xhr) {

                    if (xhr.status === 200) {
                        // Get the current page before reload
                        var currentPage = table.page();
                        // Reload the DataTable with AJAX
                        table.ajax.reload(function(){
                            // Set the table back to the previously stored page
                            table.page(currentPage).draw('page');
                        });
                        $('#add-user-modal').modal('hide'); 
                        $('#newUserEmail').val("");
                        $('#newUserRole').val("ROLE_USER");
                        $('#newUserPassword').val("");
                        // Show success pop-up
                        toastr["success"]("New User Added successfully", "Success")
                    } else {
                        console.error('Unexpected success status code:', xhr.status);
                    }
                },
                error: function (xhr) {
                // Handle errors
                if (xhr.status === 409) {
                        toastr["error"]("Email is already in use");
                    }
                else if (xhr.responseJSON && xhr.responseJSON.errors) {
                    // Display validation errors to the user
                    toastr["error"](xhr.responseJSON.errors);
                } else {
                    // Handle other errors
                    toastr["error"]('An error occurred');
                }
            }
            });                   
        });



    $('body').on('click', '.action-button', function() {
        var userId = $(this).data('user-id');
            $.ajax({
                url: Routing.generate('app_update_user_status',{id:userId}),
                type: "GET",
            success: function(response, textStatus, xhr) {
                    console.log(response);
                    if (xhr.status === 200) {
                        // Get the current page before reload
                        var currentPage = table.page();
                        // Reload the DataTable with AJAX
                        table.ajax.reload(function(){
                            // Set the table back to the previously stored page
                            table.page(currentPage).draw('page');
                        });
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

    $('body').on('click', '.edit-button', function() {
        var userId = $(this).data('user-id');
            $.ajax({
                url: Routing.generate('app_get_user', {id:userId}),
                type: "GET",
            success: function(dataResult){                            
                        $('#uId').val(dataResult.user.id);
                        $('#email').val(dataResult.user.email);
                        $('#role').val(dataResult.user.roles);

                        $('#edit-modal').modal('show');
                    }
            });
        
    });

    $('.modal').on('click', '#btnUpdateSubmit', function() {
    
        var updatedUserId = $("#uId").val();
        var updatedUserEmail = $("#email").val();
        var updatedUserRole = $('#role').find(":selected").val();
        var updatedUserData = {
                            id: updatedUserId,
                            email: updatedUserEmail,
                            role: updatedUserRole
                        };
            $.ajax({
                url: Routing.generate('app_update_user'),
                type: "POST",
                contentType: 'application/json',
                data: JSON.stringify(updatedUserData),
                success: function(response, textStatus, xhr) {
                    console.log(response);
                    if (xhr.status === 200) {
                        // Get the current page before reload
                        var currentPage = table.page();
                        // Reload the DataTable with AJAX
                        table.ajax.reload(function(){
                            // Set the table back to the previously stored page
                            table.page(currentPage).draw('page');
                        });
                        $('#edit-modal').modal('hide');

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
                    // Display validation errors to the user
                    toastr["error"]('Validation errors:\n' + xhr.responseJSON.errors.join('\n'));
                } else {
                    // Handle other errors
                    toastr["error"]('An error occurred');
                }
            }
            });
        
    });

});