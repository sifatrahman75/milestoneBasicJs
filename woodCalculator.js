function woodCalculator(chair,table,bed){
  var result1 = chair*1;
  var result2 = table*3;
  var result3 = bed*5;
  var result = result1 + result2 + result3;
  return result;

}
 var output = woodCalculator(14,13,12);
 console.log("You need",output,"cubic feet wood");