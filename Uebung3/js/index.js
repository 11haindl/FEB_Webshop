// Test Accordion:
let accordionItem = new AccordionItem("item1", "#accordionExample");
accordionItem.createAccordionItem();

let accordionItem2 = new AccordionItem("item2", "#accordionExample");
accordionItem2.createAccordionItem();

let accordionItem3 = new AccordionItem("item3", "#accordionExample");
accordionItem3.createAccordionItem();

/*
$(document).ready(function(){
    $.ajax({
        url: "http://localhost/BEB_Webshop/HAINDL_STUPPACHER_BE_Uebung3/product_kataloger/katalogIndex.php?action=listTypes",
        method: "GET",
    }).done(function (response) {
        console.log(response)
    }).fail(function (error) {
        console.log("error: " + error);
    }).always(function () {

    });
});
*/
