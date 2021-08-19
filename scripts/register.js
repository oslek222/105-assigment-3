console.log("users register");

function User(email,pass,first,last,age,
address,phone,payment,color){
    this.email = email;
    this.password = pass;
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.address = address;
    this.phone =phone;
    this.payment = payment;
    this.color=color;


}


function registerUser(){
   let email = $("#txtEmail").val();
   let password = $("#txtpassword").val();
   let first=$("#txtFirst").val();
   let last=$("#txtlast").val();
   let age=$("#txtage").val();
   let address=$("#txtaddress").val();
   let phone=$("#txtphone").val();
   let payment=$("#selpaymnet").val();
   let color=$("#txtcolor").val();
   console.log
    let user = new User(email,password,first,last,
        age,address,phone,payment)
        console.log(user);
        saveUser(user);// function found on store manager.js
}

function init(){
    console.log("init function");
  $("#btnSave").click(registerUser);
}

window.onload=init;