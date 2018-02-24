$("#add-burger").on("submit", function (event) {
    // Prevent default
    event.preventDefault();

    var newBurger = {
        name: $("#burger-name").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            location.reload();
        }
    );
});

$(".devour-btn").on("click", function (event) {

    var id = $(this).data("id");
    var isDevoured = {
        devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isDevoured
    }).then(function () {
            location.reload();
        }
    );
});