var romTrans = function(userNum){

var theRomans=[];
var arrayNums=[];

var romanNums = [["M"],["C","D","M"],["X","L","C"],["I","V","X"]];


for(var i = 1000; i >= 1; i = i/10){
  arrayNums.push(Math.floor(userNum/i));
  userNum = userNum % i;
}

  for(var i = 0; i < 4; i++){
  		if(arrayNums[i] <= 3){
        for(var j = 0; j < arrayNums[i]; j++){
          theRomans.push(romanNums[i][0]);
         };
      } else if (arrayNums[i] === 4){
        theRomans.push(romanNums[i][0]);
        theRomans.push(romanNums[i][1]);
      } else if (arrayNums[i] === 5){
        theRomans.push(romanNums[i][1]);
      } else if (arrayNums[i] <= 8){
        theRomans.push(romanNums[i][1]);
        for(var j = 0; j < (arrayNums[i] % 5); j++){
          theRomans.push(romanNums[i][0]);
        };
      } else if (arrayNums[i] === 9){
        theRomans.push(romanNums[i][0]);
        theRomans.push(romanNums[i][2]);
      }


  };
    return theRomans;
};




$(document).ready(function(){
  $("form#romanNum").submit(function(event){
    event.preventDefault();
      var userNumber = parseInt($("#numInput").val());
      var result = romTrans(userNumber);
    $("#output").show().text(result.join(""));

  });
});
