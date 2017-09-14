$(document).ready(function(){

  $("#squid").click(function(){
    $("#squidPic").show();
    $("#eaglePic").hide();
    $("#lionPic").hide();
  });

  $("#eagle").click(function(){
    $("#eaglePic").show();
    $("#lionPic").hide();
    $("#squidPic").hide();
  });

  $("#lion").click(function(){
    var userInput = prompt("Do you like Lions? Type yes or no?");
    if (userInput === "yes") {
      $("#lionPic").show();
      $("#eaglePic").hide();
      $("#squidPic").hide();
    }
    else if (userInput === "no") {
      alert("GO TO CHURCH!");
    }
    else {
      $("#lionPic").show();
      $("#eaglePic").show();
      $("#squidPic").show();
    }
  });

});
