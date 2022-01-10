let proDetails = [];
function promoCode(){
   
    let x = document.getElementById("coupon").value;
     console.log(x);
    let couponDetails = {
          details: x,
    }
    proDetails.push(couponDetails);
    localStorage.setItem("DETAILS", JSON.stringify(proDetails));
}