class DataGrepper {
    getProductsByType(url){
        return $.ajax({
            url: url,
            //url: "http://localhost/BEB_Webshop/HAINDL_STUPPACHER_BE_Uebung3/product_kataloger/katalogIndex.php?action=listProductsByTypeId&typeId=4",
            method: "GET",
        })
            /*.done(function (response) {
            return response;
        }).fail(function (error) {
            console.log("error: " + error);
        }).always(function () {

        });*/
    }
}