
let reg_email = "admin@gmail.com";
let reg_password = 123456;

let enter_email = "admin@gmail.com";
let enter_password = 123456;

if (reg_email == enter_email){
  
  if (reg_password == enter_password){
    console.log("User can Login");
  }
    
  else{
    console.log("Invalid Password");
  }
}
  
else{
  console.log("Invalid Email");
}