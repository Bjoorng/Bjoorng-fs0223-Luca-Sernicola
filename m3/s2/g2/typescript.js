"use strict";
class SonAccount {
    constructor(balance) {
        this.balanceInit = 0;
        this.balanceInit = balance;
    }
    deposit(amountDeposited) {
        this.balanceInit += amountDeposited;
        let deposit = `${amountDeposited} have been transferred to your account. Here's your new balance ${this.balanceInit}`;
        console.log(deposit);
    }
    withdraw(amountWithdrawn) {
        if (amountWithdrawn > this.balanceInit) {
            console.log("Not enough balance to withdraw");
        }
        {
            this.balanceInit -= amountWithdrawn;
            let withdraw = `${amountWithdrawn} have been withdrawn from your account. Here's your new balance ${this.balanceInit}`;
            console.log(withdraw);
        }
    }
}
;
let sonAccount = new SonAccount(1500);
console.log("🚀 ~ file: typescript.ts:22 ~ sonAccount:", sonAccount);
sonAccount.deposit(100);
console.log("🚀 ~ file: typescript.ts:25 ~ sonAccount:", sonAccount);
sonAccount.withdraw(300);
console.log("🚀 ~ file: typescript.ts:27 ~ sonAccount:", sonAccount);
class MotherAccount extends SonAccount {
    constructor(balanceInit) {
        super(balanceInit);
    }
    addInterest(nYears) {
        let years = nYears;
        for (let i = 0; i < years; i++) {
            this.balanceInit += this.balanceInit * 0.1;
        }
    }
}
;
let motherAccount = new MotherAccount(33500);
console.log("🚀 ~ file: typescript.ts:39 ~ motherAccount:", motherAccount);
motherAccount.deposit(10000);
console.log("🚀 ~ file: typescript.ts:43 ~ motherAccount:", motherAccount);
motherAccount.withdraw(3500);
console.log("🚀 ~ file: typescript.ts:45 ~ motherAccount:", motherAccount);
