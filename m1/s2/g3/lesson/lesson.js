function Pizza(_gusto, _prezzo){
    this.gusto = _gusto;
    this.prezzo = _prezzo;
    this.mostraPrezzo = function(){
        console.log(`Il prezzo della pizza ${this.gusto} è pari a ${this.prezzo}`);
    }
}

let margherita = new Pizza('Margheria', 5);
let diavola = new Pizza('Diavola', 6);