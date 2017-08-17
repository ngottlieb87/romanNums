var theRomans=[];
var thous=["M"];
var hunds=["C","D","M"];
var tens=["X","L","C"];
var ones=["I","V","X"];

var arrayOfRNs = [thous, hunds, tens, ones];

var nputNum = prompt("Enter a number to convert to Roman Numerals");

var ms = Math.floor(inputNum/1000);
inputNum = inputNum % 1000;
var cs = Math.floor(inputNum/100);
inputNum = inputNum % 100;
var xs = Math.floor(inputNum/10);
inputNum = inputNum % 10;
var is = Math.floor(inputNum/1);

arrayNums = [ms, cs, xs, is];

for(var i = 0; i < 4; i++){
		if(arrayNums[i] <= 3){
      for(var j = 0; j < arrayNums[i]; j++){
        theRomans.push(arrayOfRNs[i][0]);
       };
    } else if (arrayNums[i] === 4){
      theRomans.push(arrayOfRNs[i][0]);
      theRomans.push(arrayOfRNs[i][1]);
    } else if (arrayNums[i] === 5){
      theRomans.push(arrayOfRNs[i][1]);
    } else if (arrayNums[i] <= 8){
      theRomans.push(arrayOfRNs[i][1]);
      for(var j = 0; j < (arrayNums[i] % 5); j++){
        theRomans.push(arrayOfRNs[i][0]);
      };
    } else if (arrayNums[i] === 9){
      theRomans.push(arrayOfRNs[i][0]);
      theRomans.push(arrayOfRNs[i][2]);
    }
  console.log(theRomans.join(""));
};





$(document).ready(function(){
  ("#romanNum").submit(function(event){
    event.preventDefault();


  });
});
