class DisplayProducts {
    constructor(name) {
        this.name = name;
    }
    createProductForm(){
        let $newForm = $("<div>", {"class": "row md-3 align-items-center"});
        let $label = $("<label>", {"class": "form-control"});
        $label.html(this.name);
        $newForm.append($label);
        let $quantity = $("<input>", {"class": "form-control", "type": "number", "min": "0"});
        $newForm.append($quantity);
        console.log($newForm);
        return $newForm;
    }
}