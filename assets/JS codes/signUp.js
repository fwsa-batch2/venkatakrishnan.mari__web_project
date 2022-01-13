let userList = [];

function onPageLoad() {
    let store = localStorage.getItem('registersname');
    let users = JSON.parse(store);
    if (users == null) {
        userList = []
    } else {
        userList = users;
    }

}

function loginAlert(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value.toLowerCase();
    let password = document.getElementById("password").value;



    let customerDetail = {
        "username": username,
        "email": email,
        "password": password,

    }



    let isEmailAlreadyExist = emailValid(email);


    if (isEmailAlreadyExist) {
        alert("Email already exist or enter a valid email");
        return;
    }

    let isMatch = checkPassword();

    if (isMatch) {
        console.log()
        userList.push(customerDetail);
        localStorage.setItem("registersname", JSON.stringify(userList));
        window.location.href = "./../pages/signin.html";
    }
    else {
        alert("please check your password")
    }



}



function checkPassword() {
    // event.preventDefault();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("cpassword").value;
    if (password == confirmPassword) {
        console.log("password matched");
        return true;
    }
    else {
        return false;
    }
}




function emailValid(current_email) {

    let usernames = JSON.parse(localStorage.getItem("registersname"));

    let isUsed = false;

    if (usernames) {

        for (let i of userList) {
            let user = i;
            let email = user.email;

            if (current_email == email) {
                isUsed = true;
                break;
            }
        }

        return isUsed;
    }
}
function showPassword() {
    let checkBox = document.getElementById("checkbox");
    if (checkBox.checked) {
        document.getElementById("password").type = "text";
        document.getElementById("cpassword").type = "text";
    }
    else {
        document.getElementById("password").type = "password";
        document.getElementById("cpassword").type = "text";
    }


}
onPageLoad();

