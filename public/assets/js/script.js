import { DEFAULT_ENCODING } from "crypto";

$(document).ready(function(){

    $(".change-devoured").on("click", function(event) {

        // Prevent form resubmission
        event.preventDefault();

        // present GIPHY
        displayBurgerGIF();

        // declare the data id
        var id = $(this).data("id");

        // declare the new state of the burger
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        // Send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }.then(function(){
            console.log("Set the burger state to ", newDevouredState);

            // Reload the page to get the updated list
            location.reload();

        }))

    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        // Creates an object that holds the name of the new burger and its status as devoured or not
        var newBurger = {

            burger_name: $("#new-burger").val().trim(),
            devoured: $("[burger_name = devoured]:checked").val().trim()

        };

        // send the POST request

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("new burger created");
            // reload page to get updated list
            location.reload();
        });
    });

    // function to delete a burger
    $(".delete-burger").on("click", function(event){
        var id = $(this).data("id");

        // send the DELETE request
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function(){
            console.log("Deleted burger " + id);
            location.reload();
        })
    });

    // function to display a giphy request
   function displayBurgerGIF(){
    //    send giphy request
    $.ajax("https://api.giphy.com/v1/gifs/search?api_key=ED4tN7E9IwOCjDlwDrUO9h9GcL7hoZbA&q=burgers&limit=1&offset=0&rating=PG&lang=en",
    {
        type: "GET",
    }).then(function(){
        console.log("Succesful GIF posting")
    })
   }

})