/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

{

    function area (b, h){
        return b * h
    }

let a = area(8, 5);
console.log(a);
}

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

{

    function crazySum(a, b){

        if(a === b){
            return (a + b) * 3
        }else{
            return a + b
        }

    }

let c = crazySum(9, 12)
let d = crazySum(8, 8)

console.log(c);
console.log(d);

}

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

{

    function crazyDiff(a){

        if(a <= 19){
            return Math.abs(a - 19)
        }else{
            return Math.abs(a - 19) * 3
        }
    }

let b = crazyDiff(14);
let c = crazyDiff(38);

console.log(b);
console.log(c);

}

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

{

    function boundary(n){

        if( n > 20 && n <= 100 || n == 400){
            return true
        }else{
            return false
        }
    }

let a = boundary(50);
let b = boundary (289);

console.log(a);
console.log(b);

}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

{

let a = ': samba'
let b = 'Epicode: corso per front end developer'

    function epify (){
        if(a === b){
            return b
        }else{
            return 'Epicode' + a
        }
    }

let c = epify(a)

console.log(c)

}

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

{

    let a = 4

    function check3and7 (a){
        if(a % 3 === 0 || a % 7 === 0){
            return true
        }else{
            return false
        }
    }
    
    let b = check3and7(a)

    console.log(b)
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

{

let a = 'conertone del primo maggio'

    function reverseString(a){
        return a.split('').reverse().join('')
    }

    let b = reverseString(a)
    
    console.log(b)
}

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

{

    let a = 'vuole ballare la samba'

    function upperFirst(a){
        let b = a.split(" ")
        for(let i = 0; i < b.length; i++){
            b[i] = b[i].charAt(0).toUpperCase() + b[i].slice(1)
        }
        return b.join(" ")

    }

    console.log(upperFirst(a))


}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

{

    let a = 'la chitarra acustica scordata calante'

    function cutString(a){
        return a.slice(1,a.length-1)
    }
    console.log(cutString(a))
    
}

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

{

    function giveMeRandom(a){
        const arr = []
        for(let i = 0; i < a; i++){
            arr.push(Math.floor(Math.random()*10))
        }
        return arr
    } 

    console.log(giveMeRandom(12))

}