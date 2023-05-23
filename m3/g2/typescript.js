var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(balance) {
        this.balanceInit = 0;
        this.balanceInit = balance;
    }
    SonAccount.prototype.deposit = function (amountDeposited) {
        this.balanceInit += amountDeposited;
        var deposit = "".concat(amountDeposited, " have been transferred to your account. Here's your new balance ").concat(this.balanceInit);
        console.log(deposit);
    };
    SonAccount.prototype.withdraw = function (amountWithdrawn) {
        if (amountWithdrawn > this.balanceInit) {
            console.log("Not enough balance to withdraw");
        }
        {
            this.balanceInit -= amountWithdrawn;
            var withdraw = "".concat(amountWithdrawn, " have been withdrawn from your account. Here's your new balance ").concat(this.balanceInit);
            console.log(withdraw);
        }
    };
    return SonAccount;
}());
;
var sonAccount = new SonAccount(1500);
console.log("🚀 ~ file: typescript.ts:22 ~ sonAccount:", sonAccount);
sonAccount.deposit(100);
console.log("🚀 ~ file: typescript.ts:25 ~ sonAccount:", sonAccount);
sonAccount.withdraw(300);
console.log("🚀 ~ file: typescript.ts:27 ~ sonAccount:", sonAccount);
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit) {
        return _super.call(this, balanceInit) || this;
    }
    MotherAccount.prototype.addInterest = function (nYears) {
        var years = nYears;
        for (var i = 0; i < years; i++) {
            this.balanceInit += this.balanceInit * 0.1;
        }
    };
    return MotherAccount;
}(SonAccount));
;
var motherAccount = new MotherAccount(33500);
console.log("🚀 ~ file: typescript.ts:39 ~ motherAccount:", motherAccount);
motherAccount.deposit(10000);
console.log("🚀 ~ file: typescript.ts:43 ~ motherAccount:", motherAccount);
motherAccount.withdraw(3500);
console.log("🚀 ~ file: typescript.ts:45 ~ motherAccount:", motherAccount);
