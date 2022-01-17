function addingFood() {
    let foodName = document.getElementById("fname").value;
    let price = document.getElementById("fprice").value;
    let link = document.getElementById("flink").value;
    let selct = document.getElementById("selectCat").value;


    const foodAddingdetails = {
        FoodName: foodName,
        FoodPrice: price,
        Link: link,
        Catergory: selct,
    };

    let menuList = JSON.parse(localStorage.getItem("addDetails"));
    if (menuList == null) {
        menuList = []
    }
    menuList.push(foodAddingdetails);
    localStorage.setItem("addDetails", JSON.stringify(menuList));




    alert("Details Submitted succesfully");
}