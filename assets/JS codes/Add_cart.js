let str = "";
function cart(){

    let allDetails = JSON.parse(localStorage.getItem("Orders"));
    for(i=0;i<allDetails.length;i++){
        str+="<div id=\"cart\"><img class=\"htr\" id=\"product"+JSON.stringify(i+1)+"alt=\"cart\" src="+allDetails[i].link+"><br><p class=\"dtr1\">"+allDetails[i].product+"</p><br><p class=\"dtr2\">"+allDetails[i].price+"</p></div><br><br><br><br><br><br><br><br><br><br>"
    }
    return str;
}
let string = cart();
document.getElementById("cart").innerHTML = string;
