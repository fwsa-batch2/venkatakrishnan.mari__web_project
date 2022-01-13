let str = "";


function cart() {

    let allDetails = JSON.parse(localStorage.getItem("Orders"));
    for ( let i of allDetails) {
        str += "<div id=\"cart\"><img class=\"htr\" id=\"product" + JSON.stringify(allDetails.indexOf(i) + 1) + "alt=\"cart\" src=" + i.link + "><br><p class=\"dtr1\">" + i.product + "</p><br><p class=\"dtr2\">" + i.Totalprice + "</p><br><p class=\"dtr3\">" + i.numberQuantity + "</p><br><p class=\"dtr4\">" + i.cost + "</p><br></div><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"
    }
    return str;
}
let string = cart();
document.getElementById("cart").innerHTML = string;

