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
    let details = JSON.parse(localStorage.getItem('Orders'));
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
        lth: numItems,
     
    }
    console.log(allDetails);
    details.push(allDetails);
    localStorage.setItem("Orders", JSON.stringify(details));
    document.getElementById('demo').innerHTML = numItems + 1;
console.log("Hello world");
}
// let star = "";

// function addedFood(menuList) {


    // for (let i of menuList) {
        // star += "<div id=\'extra\'><img class=\"lay9\" id=\"product" + JSON.stringify(allDetails.indexOf(i) + 1) + "alt=\"cart\" src=" + i.Link + "><br><p id=\"extra1\">" + i.FoodName + "</p><br></div>"

        

    // }
    // return star;
// }
// let string = addedFood();
// document.getElementById("card-container").innerHTML = string;



function subMenuList(){
    let trending = [];
    let featured = [];
    let buckets = [];
    let burger = [];
    let ricebowls = [];
    let snacks = [];
    let beverage = [];
    let newyf = [];


    let allDetails = JSON.parse(localStorage.getItem("addDetails"));
    for(let i of allDetails){
        if(i.Catergory == "Featured"){
     featured.push(i);
        }
        else if(i.Catergory == "Trending"){
            trending.push(i);
        }
        else if(i.Catergory == "Buckets"){
            buckets.push(i);
        }
        else if(i.Catergory == "New year feast"){
            newyf.push(i);
        }
        else if(i.Catergory == "Burger"){
            burger.push(i);
        }
        else if(i.Catergory == "Snacks"){
            snacks.push(i);
        }
        else if(i.Catergory == "Rice Bowls"){
            ricebowls.push(i);
        }
        else if(i.Catergory == "Beverage"){
            beverage.push(i);
        }
 console.log(featured,trending,buckets,newyf,snacks,beverage,ricebowls,burger);
 createMenu(featured,"Featured");
 createMenu(trending,"Trending");
 createMenu(buckets,"Buckets");
 createMenu(burger,"Burger");
 createMenu(newyf,"New year feast");
 createMenu(snacks,"Snacks");
 createMenu(ricebowls,"Rice Bowls");
 createMenu(beverage,"Beverage");
    }
}


// function getMenuList() {


//     let allDetails = JSON.parse(localStorage.getItem("addDetails"));
//     let Catergory = "";
//     for(let i of allDetails){
//         if(i.Catergory == "Trending"){
//       Catergory = "Trending";
//       subMenu(Catergory);
//         }

//     }
        
//         }
    // const trendingList = allDetails.filter(function (menu) { return menu.Catergory == "Trending" });
    // console.log(trendingList);
    // const trendingListHTML = addedFood(trendingList);
    // document.getElementById("trending").innerHTML = trendingListHTML;
    //  break;
        
    //     else if(i.Catergory == "Featured"){
    //         Catergory = "Featured";
            
    //         // const featureList = allDetails.filter(function (menu) { return menu.Catergory == "Featured" });
    //         // console.log(featureList);
    //         // const featureListHTML = addedFood(featureList);
    //         // document.getElementById("Featured").innerHTML = featureListHTML;
    //         // break;
    //         createMenu(Catergory); 
    //     }
        
    // }
     function createMenu(x,y){
        // let allDetails = JSON.parse(localStorage.getItem("addDetails"));
        // const featureList = allDetails.filter(function (menu) { return menu.Catergory == x });
        // console.log(featureList);
        let str = "";
        for(let i of x){
            str += ` 
            <div class=\"card\">
                <img class=\"card-img" alt="fea1" src="${i.Link}"
                    onclick="add('${i.FoodName}' ,'${i.Link}' ,${i.FoodPrice})">
                <div class="card-body">
                    <p>
                        ${i.FoodName}
                    </p>
                </div>
            </div>
        `
        }
        // const featureListHTML = addedFood(x);
        document.getElementById(y).innerHTML = str;
     }
    //  function subMenu(x){
    //     let allDetails = JSON.parse(localStorage.getItem("addDetails"));

    //     const featureList = allDetails.filter(function (menu) { return menu.Catergory == x });
    //     console.log(featureList);
    //     const featureListHTML = addedFood(featureList);
    //     document.getElementById(x).innerHTML = featureListHTML;
    //  }
    // Array.prototype.filter()
    // const trendingList = allDetails.filter(function (menu) { return menu.Catergory == "Trending" });
    // console.log(trendingList);
    // const trendingListHTML = addedFood(trendingList);
    // document.getElementById("trending-container").innerHTML = trendingListHTML;


    // const featureList = allDetails.filter(function (menu) { return menu.Catergory == "Featured" });
    // console.log(featureList);
    // const featureListHTML = addedFood(featureList);
    // document.getElementById("featured-container").innerHTML = featureListHTML;


    // const featureList = allDetails.filter(function (menu) { return menu.Catergory == "Featured" });
    // console.log(featureList);
    // const featureListHTML = addedFood(featureList);
    // document.getElementById("featured-container").innerHTML = featureListHTML;
  

    // const snackList = allDetails.filter(function (menu) { return menu.Catergory == "Snacks" });
    // console.log(snackList);
    // const snackListHTML = addedFood(snackList);
    // document.getElementById("snacks-container").innerHTML = snackListHTML;


    // const bucketList = allDetails.filter(function (menu) { return menu.Catergory == "Buckets" });
    // console.log(bucketList);
    // const bucketListHTML = addedFood(bucketList);
    // document.getElementById("bucket-container").innerHTML = bucketListHTML;


    // const newyfList = allDetails.filter(function (menu) { return menu.Catergory == "New year feast" });
    // console.log(newyfList);
    // const newyfListHTML = addedFood(newyfList);
    // document.getElementById("newyf-container").innerHTML = newyfListHTML;


    // const burgerList = allDetails.filter(function (menu) { return menu.Catergory == "Burger" });
    // console.log(burgerList);
    // const burgerListHTML = addedFood(burgerList);
    // document.getElementById("burger-container").innerHTML = burgerListHTML;



    // const ricebowlList = allDetails.filter(function (menu) { return menu.Catergory == "Rice Bowls" });
    // console.log(ricebowlList);
    // const ricebowlListHTML = addedFood(ricebowlList);
    // document.getElementById("ricebowl-container").innerHTML = ricebowlListHTML;




    // const beverageList = allDetails.filter(function (menu) { return menu.Catergory == "Beverage" });
    // console.log(beverageList);
    // const beverageListHTML = addedFood(beverageList);
    // document.getElementById("beverage-container").innerHTML = beverageListHTML;



    
    // const trendingList = allDetails.filter(function (menu) { return menu.Catergory == "Trending" });
    // console.log(trendingList);



// getMenuList();
subMenuList();