let details = [];
function onPageLoad() {
    const getFromLs = JSON.parse(localStorage.getItem('Orders'));
    if(getFromLs != null){
        console.log('w');
        details = getFromLs;
        return details;
    }
}
onPageLoad();
function add(x,y,z){
    event.preventDefault();
    const numberQuantity = parseInt(prompt("Enter the number of Quantities"));
    const price = z*numberQuantity;

    const allDetails = {
        numberQuantity : numberQuantity,
        Totalprice : price,
        link : y,
        product : x,
        cost : z

    }
    details.push(allDetails);
    localStorage.setItem("Orders" , JSON.stringify(details));

}

