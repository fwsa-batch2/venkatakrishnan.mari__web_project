let details = [];

function add(x,y,z){
event.preventDefault();
    let numberQuantity = parseFloat(prompt("Enter the number of Quantities"));
    let price = z*numberQuantity;
    let allDetails = {
        numberQuantity : numberQuantity,
        price : price,
        link : y,
        product : x

    
    }
    details.push(allDetails);
    localStorage.setItem("Orders" , JSON.stringify(details));

}

