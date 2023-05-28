class CardBody{
    constructor(itemId, parentId) {
        this.itemId = itemId;
        this.parentId = parentId;
    }

    createCardBody(){
        let $cardBody = $("<div>", {"id": this.itemId, "class": "card-body"})
        let $cardTitle = $("<h5>", {"id": this.parentId, "class": "card-title"});
        let $cardButton = $("<input>", {"type": "number", "class": "form-control"});
        $cardBody.append($cardTitle);
        $cardTitle.append($cardButton);
        $("#" + this.parentId).append($cardBody);
    }
}