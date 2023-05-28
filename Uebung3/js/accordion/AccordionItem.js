/**
* class for an item of the accordion
* */
class AccordionItem {
     /**
     * constructor:
      * @param {string} id - id of AccordionItem HTML-Element
      * @param {string} parentId - id of the Accordion to which the item belongs
     * */
     constructor(id, parentId) {
          this.id = id
          this.parentId = parentId
          this.header = new AccordionHeader(this.id)
          this.body = new AccordionBody(this.id)
     }

     /**
      * create an AccordionItem:
      * 1. create a div-Element with attributes
      * 2. append the div to the accordion
      * 3. create the header of the AccordionItem
      * 4. create the body of the AccordionItem
      */
     createAccordionItem(){
          let $accordionItem = $("<div>", {"id": this.id, "class": "accordion-item"});
          $(this.parentId).append($accordionItem);
          this.header.createHeader("Header for " + this.id)
          this.body.createBody(this.header.id)
     }
}