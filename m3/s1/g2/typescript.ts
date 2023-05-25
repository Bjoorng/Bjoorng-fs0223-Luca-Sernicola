class SonAccount {
  public balanceInit: number = 0;
  constructor(balance: number) {
    this.balanceInit = balance;
  }
  public deposit(amountDeposited: number) {
    this.balanceInit += amountDeposited;
    let deposit: string = `${amountDeposited} have been transferred to your account. Here's your new balance ${this.balanceInit}`;
    console.log(deposit);
  }
  public withdraw(amountWithdrawn: number) {
    if (amountWithdrawn > this.balanceInit) {
      console.log("Not enough balance to withdraw");
    }
    {
      this.balanceInit -= amountWithdrawn;
      let withdraw: string = `${amountWithdrawn} have been withdrawn from your account. Here's your new balance ${this.balanceInit}`;
      console.log(withdraw );
    }
  }
};

let sonAccount: SonAccount = new SonAccount(1500);
console.log("🚀 ~ file: typescript.ts:22 ~ sonAccount:", sonAccount);
sonAccount.deposit(100);
console.log("🚀 ~ file: typescript.ts:25 ~ sonAccount:", sonAccount);
sonAccount.withdraw(300);
console.log("🚀 ~ file: typescript.ts:27 ~ sonAccount:", sonAccount);

class MotherAccount extends SonAccount {
  constructor(balanceInit: number) {
    super(balanceInit);
  }
  public addInterest(nYears: number): void {
    let years: number = nYears;
    for (let i: number = 0; i < years; i++) {
      this.balanceInit += this.balanceInit * 0.1;
    }
  }
};

let motherAccount: MotherAccount = new MotherAccount(33500);
console.log("🚀 ~ file: typescript.ts:39 ~ motherAccount:", motherAccount);
motherAccount.deposit(10000);
console.log("🚀 ~ file: typescript.ts:43 ~ motherAccount:", motherAccount);
motherAccount.withdraw(3500);
console.log("🚀 ~ file: typescript.ts:45 ~ motherAccount:", motherAccount);
