$(document).ready(function(){
    $.ajax({
        url: "http://localhost/BEB_Webshop/HAINDL_STUPPACHER_BE_Uebung3/product_kataloger/katalogIndex.php?action=listTypes",
        method: "GET",
    }).done(function (response) {
        for (let item of response){
            console.log(response);
            let accordionItem = new AccordionItem(item.productType, "#accordionExample", item.url);
            accordionItem.createAccordionItem();
        }
    }).fail(function (error) {
        console.log("error: " + error);
    }).always(function () {

    });
});

let dataGrepper = new DataGrepper();
dataGrepper.getProductsByType();
let card = new Card("test-card", "headingThree", "12")
card.createCard()
