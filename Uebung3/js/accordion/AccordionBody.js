/**
 * class for creating the body inside of an AccordionItem
 */
class AccordionBody {
    /**
     * constructor:
     * @param parentId - id of the AccordionItem to which the body belongs
     */
    constructor(parentId) {
        this.parentId = parentId
    }

    /**
     * create an AccordionBody:
     * 1. create a div HTML-Element (collapse) with attributes, that is responsible for open and close the body
     * 2. create a div HTML-Element (accordionBody) with attributes and content to it
     * 3. append the accordionBody-div to the collapse-div
     * 4. append the collapse-div to the AccordionItem it belongs to
     * @param headerId - id of the accordionItems Header that the body belongs to
     */
    createBody(headerId){
        let lorem = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

        let $collapse = $("<div>", {"id": "collapse-" + this.parentId, "class": "accordion-collapse collapse", "aria-labelledby": headerId, "data-bs-parent": "#accordionExample"});
        let $accordionBody = $("<div>", {"class": "accordion-body"})
        $accordionBody.html("<b>Here will be some Cards Displayed</b></br>" + lorem)
        $collapse.append($accordionBody)
        $("#" + this.parentId).append($collapse);
        /*append(`
        <div id="collapse" class="accordion-collapse collapse" aria-labelledby="${headerId}" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                Here will be some Cards for the products later
            </div>
        </div>
        `)*/
    }
}