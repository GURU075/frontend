class BankAccount{
    #balance;
    constructor(initialBalance){
        this.#balance =initialBalance;
    }

     deposit(amount){
        if(amount>0){
            this.#balance +=amount;
            console.log('Deposited: Rs'+amount);
        }else{
            console.log("Deposit must be positive");
        }

    }

    withdraw(amount){
        if(amount>0 && amount <= this.#balance){
            this.#balance -= amount;
            console.log('Withdraw done : Rs'+amount);
        }else{
            console.log('Insufficient fund');
        }
    }

    getBalance(){
        return this.#balance;
    }
}

const account = new BankAccount(100);
account.deposit(50); 
account.withdraw(30); 
console.log(account.getBalance());