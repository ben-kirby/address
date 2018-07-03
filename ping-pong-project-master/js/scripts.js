// BizLogic
var emptyArray = []

var enteredNumber = function(number) {
  //debugger;
  //console.log(emptyArray);
  for (index = 1; index <= number; index += 1) {
    if (index % 15 === 0){
      emptyArray.push("pingpong");
      $(".result").text(emptyArray);
    } else if (index % 5 === 0){
      emptyArray.push("pong");
      $(".result").text(emptyArray);
    } else if (index % 3 === 0){
      emptyArray.push("ping");
      $(".result").text(emptyArray);
    } else {
      emptyArray.push(index);
      $(".result").text(emptyArray);
    }

  }
};


// UI Logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#pingorpong").val());
    enteredNumber(number);

    // if (!result) {
    //   $("#numberList").text("li");
    // } else {
    //   $("#numberList").text("");
    // }

    //number.forEach (function)
    $(".result").show();
  });
});
