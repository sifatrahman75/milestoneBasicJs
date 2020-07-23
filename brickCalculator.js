function brickCalculator(input){
  if(input <= 10){
    var result = 15 * input;
  }
  
  else if(input > 10 && input <= 20){
    var result1 = 150;
    var result2 = 12 * (input - 10);
    var result = result1 + result2;
  }
  else{
    var result1 = 150;
    var result2 = 120;
    var result3 = 10 * (input - 20);
    var result = result1 + result2 + result3;
  }
  return result;
}


var floorNumber = brickCalculator(0);
console.log(floorNumber);
var floorNumber1 = brickCalculator(10);
console.log(floorNumber1);
var floorNumber2 = brickCalculator(11);
console.log(floorNumber2);
var floorNumber3 = brickCalculator(19);
console.log(floorNumber3);
var floorNumber4 = brickCalculator(20);
console.log(floorNumber4);
var floorNumber5 = brickCalculator(25);
console.log(floorNumber5);

