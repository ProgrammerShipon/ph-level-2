{
  // access modifiers

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount: number) {
      this._balance += amount;
    }

    public getBalance() {
      return this._balance;
    }

    getHiddenMethod() {
      return this.getBalance();
    }
  }

  const goribManusherAccount = new BankAccount(123, "Mr. Gorib", 20);
  goribManusherAccount.addDeposit(30);

  console.log(goribManusherAccount.getBalance());

  class StudentAccount extends BankAccount {
    test() {
      this._balance = 0;
      //  this.getHiddenMethod
    }
  }
  //
}
