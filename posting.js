$(function () {
    $("#fetch").click(pressingButton);
});

function pressingButton() {
    let id = $("#id").val();

    $.get("http://jsonplaceholder.typicode.com/users/" + id, printUser);
    $.get("http://jsonplaceholder.typicode.com/posts/", printPosts);
}

function printUser(data) {
    let dataReceived = JSON.stringify(data);
    let user = JSON.parse(dataReceived);
    $("#contact").append(
        "<h3> Id </h3> <br>" + user.id + "<br>" +
        "<h3> Name </h3> <br>" + user.name + "<br>" +
        "<h3> Username </h3> <br>" + user.username + "<br>" +
        "<h3> email </h3> <br>" + user.email + "<br>" +
        "<h3> phone </h3> <br>" + user.phone + "<br>" +
        "<h3> website </h3> <br>" + user.website + "<br>"
    );
}

function printPosts(data) {
    let id = $("#id").val();
    $.each(data, function (index, value) {
        if (value.userId == id) {
            $("#posts").append(
                "<h3>" + value.title + "</h3> <br>" +
                value.body + "<br>"
            );
        }
    })

}