$(document).ready(function(){
    $.ajax({
        url: "http://localhost/MusterloesungComposerUebung3/index.php?action=listTypes",
        method: "GET",
    }).done(function (response) {
        for (let item of response){
            let accordionItem = new AccordionItem(item.productType, "#productsAccordion", item.url);
            accordionItem.createAccordionItem();
        }
    }).fail(function (error) {
        console.log("error: " + error);
    }).always(function () {

    });
});

