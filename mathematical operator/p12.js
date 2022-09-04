
var year_of_birth = 2019;
var current_year = 2022;
var age = current_year - year_of_birth;

// if (age >= 13 && age <= 19){
//   console.log("Teenage");
// }
// else if(age >= 20 && age <= 29){
//   console.log("Twenties");
// }

age >= 13 && age <= 19 ? console.log("Teenage") 
  : age >= 20 && age <= 29 ? console.log("Twenties"):  console.log("NA");