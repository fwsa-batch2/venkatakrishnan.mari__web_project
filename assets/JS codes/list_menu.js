let details = [];
function onPageLoad() {
    const getFromLs = JSON.parse(localStorage.getItem('Orders'));

    if (getFromLs != null) {
        console.log('w');
        details = getFromLs;
        return details;
    }
}
onPageLoad();
function add(x, y, z) {

    const numberQuantity = parseInt(prompt("Enter the number of Quantities"));
    const price = z * numberQuantity;
    const numItems = details.length;
    console.log(numItems);
    const allDetails = {
        numberQuantity: numberQuantity,
        Totalprice: price,
        link: y,
        product: x,
        cost: z,
        lth: numItems

    }
    details.push(allDetails);
    localStorage.setItem("Orders", JSON.stringify(details));
    document.getElementById('demo').innerHTML = numItems + 1;

}
let star = "";

function addedFood(menuList) {


    for (let i of menuList) {
        // star += "<div id=\'extra\'><img class=\"lay9\" id=\"product" + JSON.stringify(allDetails.indexOf(i) + 1) + "alt=\"cart\" src=" + i.Link + "><br><p id=\"extra1\">" + i.FoodName + "</p><br></div>"

        star += ` 
    <div class="card">
        <img class="card-img" alt="fea1" src="${i.Link}"
            onclick="add( ${i.FoodName} ,${i.Link} ,100 )">
        <div class="card-body">
            <p>
                ${i.FoodName}
            </p>
        </div>
    </div>
`

    }
    return star;
}
// let string = addedFood();
// document.getElementById("card-container").innerHTML = string;




function getMenuList() {

    let allDetails = JSON.parse(localStorage.getItem("addDetails"));

    // Array.prototype.filter()
    const trendingList = allDetails.filter(function (menu) { return menu.Catergory == "Trending" });
    console.log(trendingList);
    const trendingListHTML = addedFood(trendingList);
    document.getElementById("trending-container").innerHTML = trendingListHTML;

    const featureList = allDetails.filter(function (menu) { return menu.Catergory == "Featured" });
    console.log(featureList);
    const featureListHTML = addedFood(featureList);
    document.getElementById("featured-container").innerHTML = featureListHTML;
  

    const snackList = allDetails.filter(function (menu) { return menu.Catergory == "Snacks" });
    console.log(snackList);
    const snackListHTML = addedFood(snackList);
    document.getElementById("snacks-container").innerHTML = snackListHTML;

    const bucketList = allDetails.filter(function (menu) { return menu.Catergory == "Buckets" });
    console.log(bucketList);
    const bucketListHTML = addedFood(bucketList);
    document.getElementById("bucket-container").innerHTML = bucketListHTML;


    const newyfList = allDetails.filter(function (menu) { return menu.Catergory == "New year feast" });
    console.log(newyfList);
    const newyfListHTML = addedFood(newyfList);
    document.getElementById("newyf-container").innerHTML = newyfListHTML;


    const burgerList = allDetails.filter(function (menu) { return menu.Catergory == "Burger" });
    console.log(burgerList);
    const burgerListHTML = addedFood(burgerList);
    document.getElementById("burger-container").innerHTML = burgerListHTML;



    const ricebowlList = allDetails.filter(function (menu) { return menu.Catergory == "Rice Bowls" });
    console.log(ricebowlList);
    const ricebowlListHTML = addedFood(ricebowlList);
    document.getElementById("ricebowl-container").innerHTML = ricebowlListHTML;




    const beverageList = allDetails.filter(function (menu) { return menu.Catergory == "Beverage" });
    console.log(beverageList);
    const beverageListHTML = addedFood(beverageList);
    document.getElementById("beverage-container").innerHTML = beverageListHTML;
    
    // const trendingList = allDetails.filter(function (menu) { return menu.Catergory == "Trending" });
    // console.log(trendingList);


}
getMenuList();