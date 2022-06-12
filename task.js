"use strict";
function solveEquation(a, b, c) {
  let arr = [];

   if (a === 0){
    return ('Ошибка. a — первый или старший коэффициент, не может быть равным нулю.');
  }
  
  let discriminant = b^2-4*a*c;
  let result1, result2;
    
 
 if (discriminant < 0){
   return arr;
   
 } else if (discriminant === 0){
    result1 = -b/(2*a);
   return arr[0];
   
 } else if(discriminant > 0){
   result1 = (-b + Math.sqrt(d) )/(2*a);
     result2 = (-b - Math.sqrt(d) )/(2*a);
   return (arr[0], arr[1]);
 }
  
  // код для задачи №1 писать здесь
  //return arr; // array
}

solveEquation(0,1,2);


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
