function local(){
    var signup_name = document.getElementById("name").value;
    var signup_email = document.getElementById("email").value;
    var signup_age = document.getElementById("age").value;
    var signup_pin = document.getElementById("pin").value;
    if(signup_name == "" || signup_email == "" || signup_age == "" || signup_pin == "")
    {
        alert("please fill inputs")
    }
    else{
        localStorage.setItem("Username",signup_name)
        localStorage.setItem("Useremail",signup_email)
        localStorage.setItem("Userage",signup_age)
        localStorage.setItem("Userpin",signup_pin)
        window.location="login.html"
    
    }

}
// login work 
function login(){
    var login_email = localStorage.getItem("Useremail")
    var login_pin = localStorage.getItem("Userpin")
    var my_email = document.getElementById("emailcode").value
    var my_pin = document.getElementById("pincode").value
    if(my_email == login_email && my_pin == login_pin){
       window.location="bank.html"
    }else{
        alert("Incoorect input")
    }

}
    // dashbaord work 
    // var dashboard_name = localStorage.getItem('Username');
    // document.getElementById("name").innerHTML = dashboard_name;
var dasboard_name = localStorage.getItem('Username');

document.getElementById("name").innerHTML = dasboard_name;

         