$(document).ready(function () {
    var users = [];

    // Show 'Loading...' while requesting
    $(document).ajaxStart(function () {
        $('#loading-modal').modal('show');
    });
    $(document).ajaxStop(function () {
        $('#loading-modal').modal('hide');
    });

    // Fetch data
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/restful/user/all",
        xhrFields: {
            withCredentials: true
        },
        beforeSend: function (request) {
            request.setRequestHeader("Authorization", "Basic " + btoa("admin:admin"));
        }
    }).done(function (data) {
        users = data;
        var table = $('#users-list').DataTable({
            data: data,
            columns: [
                {
                    title: 'Id',
                    data: 'id'
                },
                {
                    title: 'Name',
                    data: 'name'
                },
                {
                    title: 'Email',
                    data: 'email'
                },
                {
                    title: 'Actions',
                    render: function (data, type, user) {
                        return '<button class="btn btn-success btn-sm"><i class="fa fa-eye"></i> Details</button>';
                    }
                }
            ]
        });

        $('#users-list tbody').on('click', 'button', function () {
            var data = table.row($(this).parents('tr')).data();
            var user = users.find(function (u) {
                return u.id === data.id;
            });
            if (user) {
                $('#details-modal-label').html('<i class="fa fa-info-circle"></i> ' + user.username + '\'s details');
                $('#details-id').attr('value', user.id);
                $('#details-username').attr('value', user.username);
                $('#details-password').attr('value', user.password);
                $('#details-name').attr('value', user.name);
                $('#details-email').attr('value', user.email);
                $('#details-status').attr('value', user.status);

                $('#details-modal').modal('show');
            } else {
                alert('Wrong user id');
            }
        });
    });
});
