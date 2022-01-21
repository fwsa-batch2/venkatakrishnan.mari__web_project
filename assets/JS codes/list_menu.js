let detail = [];
function onPageLoad() {
    const getFromLs = JSON.parse(localStorage.getItem('Orders'));

    if (getFromLs != null) {
        console.log('w');
        detail = getFromLs;
        return detail;
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
    detail.push(allDetails);
    localStorage.setItem("Orders", JSON.stringify(detail));
    document.getElementById('demo').innerHTML = numItems + 1;
}

function subMenuList() {
    let trending = [];
    let featured = [];
    let buckets = [];
    let burger = [];
    let ricebowls = [];
    let snacks = [];
    let beverage = [];
    let newyf = [];

    let allDetails = JSON.parse(localStorage.getItem("addDetails"));
    for (let i of allDetails) {
        if (i.Catergory == "Featured") {
            featured.push(i);
        }
        else if (i.Catergory == "Trending") {
            trending.push(i);
        }
        else if (i.Catergory == "Buckets") {
            buckets.push(i);
        }
        else if (i.Catergory == "New year feast") {
            newyf.push(i);
        }
        else if (i.Catergory == "Burger") {
            burger.push(i);
        }
        else if (i.Catergory == "Snacks") {
            snacks.push(i);
        }
        else if (i.Catergory == "Rice Bowls") {
            ricebowls.push(i);
        }
        else if (i.Catergory == "Beverage") {
            beverage.push(i);
        }
        console.log(featured, trending, buckets, newyf, snacks, beverage, ricebowls, burger);
        createMenu(featured, "Featured");
        createMenu(trending, "Trending");
        createMenu(buckets, "Buckets");
        createMenu(burger, "Burger");
        createMenu(newyf, "New year feast");
        createMenu(snacks, "Snacks");
        createMenu(ricebowls, "Rice Bowls");
        createMenu(beverage, "Beverage");
    }
}

function createMenu(x, y) {
    let str = "";
    for (let i of x) {
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
    document.getElementById(y).innerHTML = str;
}
subMenuList();