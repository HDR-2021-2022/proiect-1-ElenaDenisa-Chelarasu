class Item {
    constructor(nume, cantitate) {
        this.nume = nume;
        this.cantitate = cantitate;
    }
}

class ListaCumparaturi {
    constructor(){
        this.items = [];    
    }
    adauga(nume, cantitate){
        item = new Item(nume, cantitate);
        this.items.push(item);
    }
    sterge(){
        var aux = this.items.pop();
        return aux;
    }
}