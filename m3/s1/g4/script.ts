
const vestitiArray:CapoAbbigliamento[] = [];

fetch('./starter/Abbigliamento.json')
.then((response:Response) => {
    if (response.ok) {
        return response.json();
    }else{
        throw new Error('Error while fetching');
    };
})
.then((data:CapoAbbigliamento[]) => {
  data.forEach(element => {
    let vestito = new CapoAbbigliamento(element.id, element.codprod, element.collezione, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
    vestitiArray.push(vestito);
    console.log(vestito);
  });
})
.catch((err:Error) => {
    console.log(err);
});


class CapoAbbigliamento {

    id:number;
    codprod:number;
    collezione:string;
    modello:number;
    quantita:number;
    colore:string;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibile:string;
    saldo:number;
    prezzoScontato:string;

    constructor(id:number, codprod:number, collezione:string, modello:number, quantita:number, colore:string, prezzoivaesclusa:number, prezzoivainclusa:number, disponibile:string, saldo:number) {
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

    get mostraPrezzo():string {
      let scontoPrezzo: number = (this.prezzoivainclusa / 100) * this.saldo;
        return 'lo sconto applicato porterà il capo a: ' + `${(this.prezzoivainclusa - scontoPrezzo).toFixed(2)}` + '€'
  }
  }
  console.log(vestitiArray);