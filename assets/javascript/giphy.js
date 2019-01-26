$(document).ready(function() {

//array of strings related to traveling
var topics = ["airplane", "skydiving", "Australia", "passport", "luggage", "beach", "globe", "airport"];

//take the topics in this array and create buttons in HTML
//use a loop that appends a button for each string

function displayButtons(){
    $("#button-area").empty();
    for( var i = 0; i < topics.length; i++){
    var gButton = $("<button>");
    gButton.text(topics[i]);
    //give the button an attribute so it is clear which of the many buttons is clicked
    gButton.attr("data-search", topics[i]);
    
    $("#button-area").append(gButton);
    };
};
displayButtons();


//click event to grab and display 10 static gif images from GIPHY API
$("button").on("click", function(){
    var x = $(this).data("search");
    //API key
    var APIKey = "28ka8PRViH0rvxxad4Vir9qGNEvaTsAT";

    //URL to query the GIPHY database
    //x is the search word that is attached to the button clicked 
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=" + APIKey + "&limit=10";
    console.log(queryURL);
    alert(queryURL);

    // //AJAX call to the GIPHY API
    $.ajax({
        url: queryURL,
        method: "Get"
        }).then(function(response){
            console.log(response);
            //get and display gif images 
            for(var i=0; i<response.data.length; i++){ 
                //adding the newest clicked images in front 
                $("#gif-area").prepend("<img src = '" + response.data[i].images.downsized.url + "'>");
                //display gif rating 

                };
            });
});

//click event on each image that animates, then stops if clicked again




});