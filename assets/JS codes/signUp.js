let userLists = [];

function onPageLoad(){
    const users = JSON.parse(localStorage.getItem('users'));
    if(users) {
        userLists = users;
    }
}

function loginAlert(){
    event.preventDefault();
    const username = document.getElementById("username").Value;
    const email = document.getElementById("email").Value;
    const password = document.getElementById("password").Value;
    const confirmPassword = document.getElementById("cpassword").value;


    const customerDetails = {
        "username": username,
        "email": email,
        "password": password,
        "confirmPassword": confirmPassword
    }

    const isMatch = checkPassword();

    if(isMatch) {
        userLists.push(customerDetails);
        localStorage.setItem("username", JSON.stringify(userLists));
        window.location.href = "../pages/index.html"
    }else{
        alert("please check your password");
    }
    function checkPassword(){
        event.preventDefault();
        let pass = document.getElementById("password").value;
        let cpass = document.getElementById("cpassword").value;
        if(pass==cpass) {
            console.log("password matched");
            return true;
        }
        else{
            return false
        }

    }

}