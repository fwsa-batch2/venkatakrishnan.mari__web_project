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

    const numberQuantity = parseInt(prompt("Enter the number of Quantities"));
    const price = z*numberQuantity;
    const numItems = details.length;
    console.log(numItems);
    const allDetails = {
        numberQuantity : numberQuantity,
        Totalprice : price,
        link : y,
        product : x,
        cost : z,
        lth : numItems 
        
    }
    details.push(allDetails);
    localStorage.setItem("Orders" , JSON.stringify(details));
    document.getElementById('demo').innerHTML = numItems+1;

}

   



