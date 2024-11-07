{
  // getter and setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    //   setter
    set deposit(amount: number) {
      this._balance += amount;
    }

    public addDeposit(amount: number) {
      this._balance += amount;
    }

    // getter
    get balance() {
      return this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. Gorib", 30);
  goribManusherAccount.deposit = 55;
  console.log(goribManusherAccount.balance);

  //
}
