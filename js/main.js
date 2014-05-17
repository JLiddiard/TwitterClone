$( document ).ready(function() {
  // Handler for .ready() called.


//this changes visiblilty of the char count and tweet button when clicking in the text field. 
$(".tweet-compose").on( "click", function() {
  $(".tweet-compose").css( "height", "5em");
  $("#tweet-controls").css( "display", "block");
});

//this listens for keyup and affects the total character length number
$( ".tweet-compose" ).on( "keyup", function() {
  console.log( "Handler for .keydown() called." );
  var getLength = $( ".tweet-compose" ).val();

var totalLength = 140 - getLength.length ;

$("#char-count").html(totalLength);

//This changes the color of the character count to red when charCount is > 130
  if (getLength.length >= 130){
  	$("#char-count").css( "color", "red");
  } else {
  	$("#char-count").css( "color", "#999");
  }
  
//This disables the submit button when the charCount is >= 140
  if (getLength.length <= 140 && getLength.length > 0){
  	$("#tweet-submit").prop( "disabled", false);
  } else {
  	$("#tweet-submit").prop( "disabled", true);
  }

//Console counter for charCount
  console.log("field length = " + getLength.length);
});

//This prepends the content of the tweet to the stream
$(".button").on( "click", function() {
  var getContent = $( ".tweet-compose" ).val();
  var getProfile = $("#profile-summary").html();
  var tweetContent = $("#tweet-content").html();
  $( "#stream" ).prepend( getProfile );
  $( "#topTweet" ).prepend( getContent );


});





});




