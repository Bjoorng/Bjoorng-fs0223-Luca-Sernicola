{
let cart = Number(prompt('dimmi quanto hai speso e ti dirò se è gratis'))
/*let discount = cart*0.8*/
let free = 50
let ship = 10

{
    if(cart >= free){
        document.write(`il tuo carrello è ${cart}£. la tua spedizione è gratuita<br>`)
    }else{
        document.write(`il tuo carrello è inferiore a ${free}£. Con la spedizione il totale sarà ${cart + ship}£<br>`)
    }
}
}

{
let cart = Number(prompt('dimmi quanto hai speso e ti dirò se è gratis con sconto'))
let discount = cart*0.8
let free = 50
let ship = 10

{
    if(discount >= free){
        document.write(`il tuo carrello è ${cart}£. la tua spedizione è gratuita<br>`)
    }else{
        document.write(`il tuo carrello è inferiore a ${free}£. Con la spedizione il totale sarà ${discount + ship}£<br>`)
    }
}
}