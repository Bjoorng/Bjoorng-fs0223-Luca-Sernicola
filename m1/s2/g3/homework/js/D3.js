/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

{
let a = 25
let b = 68
console.log(Math.max(a,b))
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

{
  var a = 9;

  if(a == 5){
    console.log('equal')
  }else{
    console.log('not equal')
  }
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

{
  let a = 20
  if (a % 5 == 0){
    console.log('divisibile per 5')
  }else{
    console.log('non divisibile')
  }
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

{
  let a = 24
  let b = 16
  if(a == 8){
    console.log('a = 8')
  }else if(b == 8){
    console.log('b = 8')
  }else if(a + b == 8){
    console.log('a + b = 8')
  }else if(a - b == 8){
    console.log('a - b = 8')
  }
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

{
  let a = 5
  let b = 8
  let c = 20
  let d = 80
  let e = a + b + c + d
  if(e > 50){
    console.log(e)
  }else{
    console.log(e + 10)  
  }
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

{
  let a = 5;
  let b = 8;
  let c = 20;
  let d = 80;
  let e = a + b + c + d;
  let f = (e * 80)/100;
  if(e > 50){
    console.log(f)
  }else{
    console.log(f + 10)  
  }
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

{
  let a = 6;
  let b = 89;
  let c =55;
  if (a>b && a>c)
  {
    if (b>c)
    {
      console.log(a + ', ' + b + ', ' +c);
    }
    else
    {
      console.log(a + ', ' + c + ', ' + b);
    }
  }
  else if (b>a && b>c)
  {
    if (a>c)
    {
      console.log(b + ', ' +  a + ', ' + c)
    }
    else{
      console.log(b + ', ' + c + ', ' + a)
    }
  }
  else if (c>a && c>b)
  {
    if (a>b)
    {
      console.log(c + ', ' + a + ', ' + b)
    }
    else
    {
      console.log(c + ', ' + b + ', ' + a)
    }
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

{
  let a = 'capra'
  if(typeof(a) === 'number'){
    console.log('number')
  }else{
    console.log('not a number')
  }
  
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

{
  let a = 20
  if (a % 2 == 0){
    console.log('pari')
  }else{
    console.log('dispari')
  }
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */
 
{
  let val = 7
  if (val < 10 && val >= 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else{
      console.log("Uguale a 10 o maggiore");
    }
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

{
  const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
  me.city = 'Toronto'
  console.log(me)
}

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

{
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto'
delete me.lastName
console.log(me)
}

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
{
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  }
me.city = 'Toronto'
me.skills.pop('css')
console.log(me)
}
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
{
let array = []

array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(array)
}
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
