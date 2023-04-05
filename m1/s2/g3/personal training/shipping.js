let cart = Number(prompt('dimmi quanto hai speso e ti dirò se è gratis'))
let discount = cart*0.8
let free = 50
let ship = 10

{
    if(discount >= 50){
        document.write(`il tuo carrello è ${cart}£. la tua spedizione è gratuita`)
    }else{
        document.write(`il tuo carrello è inferiore a ${free}£. il totale sarà ${discount + ship}`)
    }
}