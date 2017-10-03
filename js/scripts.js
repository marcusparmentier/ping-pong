//********************Business Logic************************
var listNums = [];


var pingPongMaster = function(number) {
  var list = number;
  for(i = 0; i < number; i++){
    // debugger;
    if (list % 15 === 0 && list !== 0) {
      listNums.push("ping-pong");
      list = list -1;
    }
    else if (list % 5 === 0 && list !== 0) {
      listNums.push("pong");
      list = list -1;
    }
    else if (list % 3 === 0 && list !== 0) {
      listNums.push("ping");
      list = list -1;
    }
    else if (list > 0) {
      listNums.push(list);
      list = list - 1;
    }
    else {
      alert("Please enter a valid number.");
    }
  };
  return listNums.reverse();
};




//********************User Logic****************************
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    var input = ($("input#input").val());
    var result = pingPongMaster(input);


    listNums.forEach(function(number) {
      $("#result").append("<li class='clear'>" + number + "</li>");
    });

    $("button#clearList").click(function() {
      $(".clear").remove();
    });

    event.preventDefault();
  });
});
