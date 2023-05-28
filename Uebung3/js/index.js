$(document).ready(function(){
    $.ajax({
        url: "http://localhost/BEB_Webshop/HAINDL_STUPPACHER_BE_Uebung3/product_kataloger/katalogIndex.php?action=listTypes",
        method: "GET",
    }).done(function (response) {
        for (let item of response){
            let productTypeWithoutWhiteSpace = item.productType;
            productTypeWithoutWhiteSpace = productTypeWithoutWhiteSpace.replace(/\s+/g, '-').toLowerCase();
            console.log(productTypeWithoutWhiteSpace)
            let accordionItem = new AccordionItem(productTypeWithoutWhiteSpace, "#accordionExample");
            accordionItem.createAccordionItem();
        }
    }).fail(function (error) {
        console.log("error: " + error);
    }).always(function () {

    });
});


let card = new Card("test-card", "headingThree", "12")
card.createCard()
