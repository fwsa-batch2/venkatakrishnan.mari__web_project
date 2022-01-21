let details = "";
function userDetails() {
    let allDetails = JSON.parse(localStorage.getItem("registersname"));
    for ( let i of allDetails) {
        details += "<div id=\"userDetails\"><br><p class=\"dtr1\">" + i.username + "</p><br><p class=\"dtr2\">" + i.email + "</p><br><br></div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"
    }
    return details;
}
let string = userDetails();
document.getElementById("userDetails").innerHTML = string;