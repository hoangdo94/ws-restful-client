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
        console.log(data);
        data.forEach(function (user, i) {
            $('#users-list').append('<div id="user-' + i + '"></div>');
            $('#user-' + i).append('<div clas="panel panel-default"><div class="panel-body">' + user.name + '</div></div>');
        });
    });
});
