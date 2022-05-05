let id = 0;
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
        id++;
        window.localStorage.setItem(JSON.stringify(id), JSON.stringify(item));
    }
    sterge(id){
        window.localStorage.removeItem(JSON.stringify(id));
        var aux = this.items.pop();
        return aux;
    }
}

let listaCumparaturi = new ListaCumparaturi();
var save_button = document.getElementById('adauga');
save_button.onclick = saveData;

function saveData(){
    var input = document.getElementById('numeItem');
    listaCumparaturi.adauga(id, input.value)
    var storedValue = localStorage.getItem(id);
}