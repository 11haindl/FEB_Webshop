class Card {
    constructor(parentId, itemId) {
        this.parentId = parentId
        this.itemId = itemId
        this.cardBody = new CardBody(this.itemId , this.parentId)
    }

    createCard(){
        let $card = $("<div>", {"class": "card", "id": this.itemId});
        $(this.parentId).append($card);
        this.cardBody.createCardBody();
    }
}