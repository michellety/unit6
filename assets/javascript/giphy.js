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
    $("#button-area").append(gButton);
    };
};
displayButtons();


//API key
var APIKey = "28ka8PRViH0rvxxad4Vir9qGNEvaTsAT";

//URL to query the GIPHY database
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=" + APIKey + "&limit=10";
console.log(queryURL);

// //AJAX call
$.ajax({
    url: queryURL,
    method: "Get"
}).then(function(response){
    console.log(response);
    
});

//click event to grab and display 10 static gif images from GIPHY API


//click event on each image that animates, then stops if clicked again


//display gif rating 

});