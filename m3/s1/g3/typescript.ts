abstract class LavoratoreTemplate {
    //codredd: number;
    //redditoAnnuoLordo: number;
    tasseInps: number;
    tasseIrpef: number;

    constructor(codredd: number, redditoAnnuoLordo: number, tasseInps: number, tasseIrpef: number) {
        //this.codredd = codredd;
        //this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    };

    abstract getUtileTasse():number

    abstract getTasseInps():number

    abstract getTasseIrpef():number

    abstract getRedditoAnnuoNetto():number

};

class NuovoLavoratore extends LavoratoreTemplate {
    codredd: number;
    redditoAnnuoLordo: number;
    getUtileTasse():number{
        throw new Error('not implemented');
    };
    getTasseInps():number{
        throw new Error('not implemented');
    };
    getTasseIrpef():number{
        throw new Error('not implemented');
    };
    getRedditoAnnuoNetto():number{
        throw new Error('not implemented');
    };
};