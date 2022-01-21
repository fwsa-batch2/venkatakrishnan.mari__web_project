function submitHandler(event){
event.preventDefault()
    const adminEmail = "admin@gmail.com"
    const adminPass = "admin"
    
    let adminMailInput = document.getElementById("email").value;
    let adminPassInput = document.getElementById("pass").value;

    if(adminEmail === adminMailInput && adminPass === adminPassInput){
        alert("Welcome Admin");
        window.location.href= "../pages/Adding_food.html";
    }
    else{
        alert("Invalid Admin Credentials")
        window.location.href="../index.html";
    }
}