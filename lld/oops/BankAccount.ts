// Task 1: Encapsulation & Domain Invariants (Bank Account System)
// Goal: Master access modifiers (private, protected, public), getters/setters, and state protection.

// Problem Statement: Implement a BankAccount class.

// Requirements:

// Maintain a private _balance (cannot be directly modified from outside) and a private _transactionHistory array.

// Provide a getter balance that returns the current amount.

// Implement deposit(amount: number) and withdraw(amount: number). Prevent negative deposits or withdrawals that exceed the balance by throwing custom domain errors.

// Store each successful action as a Transaction object (id, type, amount, timestamp).

// Implement a getTransactionHistory() method that returns a readonly copy of the transaction log so callers cannot mutate internal state.


interface ITransactionHistory{
    id:number;
    type:string;
    amount:number;
    newBalance:number;
    timestamp:string
}

interface IBankAccount{
    deposit(amount:number):void;
    withdraw(amount:number):void;
    getTransactionHistory():ITransactionHistory[]
}

class BankAccount implements IBankAccount {
   
   constructor(private  _balance ,protected  _transactionHistory:ITransactionHistory[]=[]){}


   private generateId(){
const random = Math.floor(Math.random() * 1000);
return random;
   }


    getter(){
        return this._balance ;
    }

    deposit(amount:number){
        if(amount<0) throw new Error("Amount cant be less than 0 ");
        this._balance += amount ;
        this._transactionHistory.push({
            id:this.generateId(),
            type:"deposit",
            amount:amount,
            newBalance:this._balance,
            timestamp:Date.now().toString()
            
        })
    }
     withdraw(amount:number){
        if(amount<0) throw new Error("Amount cant be less than 0 ");
        if(this._balance<amount) throw new Error("Insufficient balance ..")
        this._balance -= amount ;
            this._transactionHistory.push({
            id:this.generateId(),
            type:"withdraw",
            amount:amount,
            newBalance:this._balance,
            timestamp:Date.now().toString()
            
        })

        
    }
    getTransactionHistory(){
            return this._transactionHistory;
        }







}

const bank = new BankAccount(1000)
bank.withdraw(100)

console.log(bank.getter())