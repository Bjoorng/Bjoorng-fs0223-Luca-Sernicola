"use strict";
class LavoratoreTemplate {
    constructor(codredd, redditoAnnuoLordo, tasseInps, tasseIrpef) {
        //this.codredd = codredd;
        //this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    ;
}
;
class NuovoLavoratore extends LavoratoreTemplate {
    getUtileTasse() {
        throw new Error('not implemented');
    }
    ;
    getTasseInps() {
        throw new Error('not implemented');
    }
    ;
    getTasseIrpef() {
        throw new Error('not implemented');
    }
    ;
    getRedditoAnnuoNetto() {
        throw new Error('not implemented');
    }
    ;
}
;
