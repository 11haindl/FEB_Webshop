class AccordionHeader {
    constructor(parentId) {
        this.parentId = parentId
        this.id = "header-" + parentId
    }

    createHeader(caption){
        let $header = $("<h2>", {"id": this.id, "class": "accordion-header"})
        let $button = $("<button>", {"class": "accordion-button collapsed", "type": "button", "data-bs-toggle": "collapse",
            "data-bs-target": "#collapse-" + this.parentId, "aria-expanded": "false", "aria-controls": "collapse-" + this.parentId});
        $button.html(caption)
        $($header).append($button)
        console.log(this.parentId)
        $("#" + this.parentId).append($header)
    }
}