class AccordionBody {
    constructor(parentId) {
        this.parentId = parentId
    }
    createBody(headerId){
        let lorem = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

        let $colapse = $("<div>", {"id": "collapse-" + this.parentId, "class": "accordion-collapse collapse", "aria-labelledby": headerId, "data-bs-parent": "#accordionExample"});
        let $accordionBody = $("<div>", {"class": "accordion-body"})
        $accordionBody.html("<b>Here will be some Cards Displayed</b></br>" + lorem)
        $colapse.append($accordionBody)

        $("#" + this.parentId).append($colapse);
        /*append(`
        <div id="collapse" class="accordion-collapse collapse" aria-labelledby="${headerId}" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                Here will be some Cards for the products later
            </div>
        </div>
        `)*/
    }
}