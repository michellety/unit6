$(document).ready(function() {

//array of strings related to traveling
var topics = ["airplane", "skydiving", "Australia", "passport", "luggage", "beach", "globe", "airport"];

//take the topics in this array and create buttons in HTML
//use a loop that appends a button for each string

function displayButtons(){
    //clear the div for the buttons 
    $("#button-area").empty();
        //loop through the length of the array
        for( var i = 0; i < topics.length; i++){
        //create a new button with the class 'btn' 
        var gButton = $("<button class= 'btn'>");
        //label the button from the array
        gButton.text(topics[i]);
        //give the button an attribute so it is clear which button is clicked
        gButton.attr("data-search", topics[i]);
        //append the buttons to the html in the designated location
        $("#button-area").append(gButton);
    };
};
//call the function
displayButtons();



//click event to grab and display 10 static gif images from GIPHY API
//when button ajrea is clicked, look for identified button
//area doesnt' get replaced like the buttons 
//passing 2 parameters 
$("#button-area").on("click","button",function(){
    //variable to identify what button is clicked
    var x = $(this).data("search");

    //API key requested from the GIPHY website 
    var APIKey = "28ka8PRViH0rvxxad4Vir9qGNEvaTsAT";

    //URL to query the GIPHY database
    //x is the search word that is attached to the button clicked 
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=" + APIKey + "&limit=10";
    console.log(queryURL);
    
    //AJAX call to the GIPHY API
    $.ajax({
        url: queryURL,
        method: "Get"
        }).then(function(response){
            console.log(response);
            //loop to get and display gif images 
            for(var i=0; i<response.data.length; i++){ 
                //display gif rating in the designated div   
                //adding the newest clicked images in front, choosing the still version of the image
                $("#gif-area").prepend("<p> Rating: " + response.data[i].rating + "</p"); 
                //creating a new variable with jQuery that is an image
                var gifImage= $("<img>");
                //giving the image the attribute for the source url of a still image from GIPHY
                gifImage.attr("src", response.data[i].images.downsized_still.url);
                //add more attributes to recognize when the image is still or animated, and how to get the different versions
                gifImage.attr("data-still", response.data[i].images.downsized_still.url);
                gifImage.attr("data-animate", response.data[i].images.downsized.url);
                //in quotes to show string 
                gifImage.attr("data-state", "still");
                gifImage.attr("class", "gif");
                $("#gif-area").prepend(gifImage);
                };
            });
});

//create another click event on each image that animates, then stops if clicked again

//add to body so the function is ready, then activates when gif is clicked.  
//could also replace body with .gif and place in the response function 
$("body").on("click", ".gif", function() {
    //check the state of the image
    var state = $(this).attr("data-state");
    
    //if still, when clicked change to animate
    if (state === "still"){
        var dataAnimate = $(this).attr("data-animate");
        $(this).attr("src", dataAnimate);
        $(this).attr("data-state", "animate");
        }   //else if state is animated, change to still
            else if (state === "animate"){
            var dataStill = $(this).attr("data-still");
            $(this).attr("src", dataStill);
            $(this).attr("data-state", "still");
        };
});


//make an input space to create new search queries and buttons when submitted 
//onclick event when the user clicks the submit button


     $("#submit-button").on("click", function(event){
         event.preventDefault();
         var search = $("#submit-input").val();
         //prevent a button that already exists from being created again 
         if (!topics.includes(search)){
           //store their sting and push to the topics array
            topics.push(search); 
            
            displayButtons();  
         }
     
    
    });


 

});