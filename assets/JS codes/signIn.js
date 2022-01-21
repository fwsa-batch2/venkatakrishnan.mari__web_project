function submitHandler(event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let Password = document.getElementById("password").value;

  console.log(email);
  console.log(Password);

  let userDetails = JSON.parse(localStorage.getItem("registersname"));

  let usersExists = false;

  for (let i of userDetails) {
    let str = i.email;
    let pass = i.password;

    if (str == email && pass == Password) {
      usersExists = true;
      localStorage.setItem("UserID", email);
      alert("Successsfully login");
      window.location.href = "../index.html";
      break;
    }
  }
  if (!usersExists) {
    alert("Wrong Password");
    return null;
  }
}

function check() {
  let checkbox = document.getElementById("checking");

  if (checkbox.checked) {
    document.getElementById("password").type = "text";
  }
  else {
    document.getElementById("password").type = "password";
  }
}