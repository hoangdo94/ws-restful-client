$(document).ready(function () {
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
        data.forEach(function (user, i) {
            $('#users-list').append('<div id="user-' + i + '"></div>');
            $('#user-' + i).append('<div class="panel panel-default"><div class="panel-body form-horizontal"><div class="form-group"><label class="control-label col-sm-1">Name</label><div class="col-sm-11"><input type="text" class="form-control required" disabled style="cursor:text!important;" value="' + user.name + '"></div></div>\n\
                    <div class="form-group"><label class="control-label col-sm-1">Email</label><div class="col-sm-11"><input type="text" class="form-control required" disabled style="cursor:text!important;" value="' + user.email + '"></div></div><div style="text-align: center;"><button data-toggle="modal" data-target="#myModal' + i + '" class="btn btn-info">Detail</button></div></div>');
            $('#user-' + i).append('<div id="myModal' + i + '" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header">\n\
                    <button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">' + user.name + '\'s Info</h4></div><div class="modal-body"><div class="form-horizontal">\n\
                    <div class="form-group"><label class="control-label col-sm-3">Id</label><div class="col-sm-9"><input type="text" class="form-control required" disabled style="cursor:text!important;" value="' + user.id + '"></div></div>\n\
                    <div class="form-group"><label class="control-label col-sm-3">Username</label><div class="col-sm-9"><input type="text" class="form-control required" disabled style="cursor:text!important;" value="' + user.username + '"></div></div>\n\
                    <div class="form-group"><label class="control-label col-sm-3">Password</label><div class="col-sm-9"><input type="text" class="form-control required" disabled style="cursor:text!important;" value="' + user.password + '"></div></div>\n\
                    <div class="form-group"><label class="control-label col-sm-3">Name</label><div class="col-sm-9"><input type="text" class="form-control required" disabled style="cursor:text!important;" value="' + user.name + '"></div></div>\n\
                    <div class="form-group"><label class="control-label col-sm-3">Email</label><div class="col-sm-9"><input type="text" class="form-control required" disabled style="cursor:text!important;" value="' + user.email + '"></div></div>\n\
                    <div class="form-group"><label class="control-label col-sm-3">Status</label><div class="col-sm-9"><input type="text" class="form-control required" disabled style="cursor:text!important;" value="' + user.status + '"></div></div>\n\
                    </div></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>');
        });
    });
});
