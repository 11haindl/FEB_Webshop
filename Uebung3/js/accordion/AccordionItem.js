class AccordionItem {
     constructor(id, parentId) {
          this.id = id
          this.parentId = parentId
          this.header = new AccordionHeader(this.id)
          this.body = new AccordionBody(this.id)
     }

     createAccordionItem(){
          let $accordionItem = $("<div>", {"id": this.id, "class": "accordion-item"});
          $(this.parentId).append($accordionItem);
          this.header.createHeader("Header for " + this.id)
          this.body.createBody(this.header.id)
     }
}