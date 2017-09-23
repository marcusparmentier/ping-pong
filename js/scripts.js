//********************Business Logic************************
var listNums = [];


var pingPongMaster = function(number) {
  var list = number;
  for(i = 0; i < number; i++){
    // debugger;
    if (list % 3 === 0) {
      listNums.push("ping");
      list = list -1;
    }
    else if (list > 0) {
      listNums.push(list);
      list = list - 1;
    }
  };
  return listNums.reverse();
};




//********************User Logic****************************
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var input = ($("input#input").val());
    var result = pingPongMaster(input);
    $("#result").text(listNums);
  });
});
