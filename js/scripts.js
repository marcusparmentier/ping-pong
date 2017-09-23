//********************Business Logic************************
var listNums = [];


var pingPongMaster = function(number) {
  var list = number;
  for(i = 0; i < number; i++){
    if(number > 0) {
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
