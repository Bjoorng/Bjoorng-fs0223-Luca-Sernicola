"use strict";
const vestitiArray = [];
fetch('./starter/Abbigliamento.json')
    .then((response) => {
    if (response.ok) {
        return response.json();
    }
    else {
        throw new Error('Error while fetching');
    }
    ;
})
    .then((data) => {
    data.forEach(element => {
        let vestito = new CapoAbbigliamento(element.id, element.codprod, element.collezione, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
        vestitiArray.push(vestito);
        console.log(vestito);
    });
})
    .catch((err) => {
    console.log(err);
});
class CapoAbbigliamento {
    constructor(id, codprod, collezione, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
        this.prezzoScontato = this.mostraPrezzo;
    }
    get mostraPrezzo() {
        let scontoPrezzo = (this.prezzoivainclusa / 100) * this.saldo;
        return 'lo sconto applicato porterà il capo a: ' + `${(this.prezzoivainclusa - scontoPrezzo).toFixed(2)}` + '€';
    }
}
console.log(vestitiArray);
