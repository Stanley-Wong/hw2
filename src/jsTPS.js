
export class jsTPS{

    constructor() {
        this.transactions = [];
        this.performingDo = false;
        this.performingUndo = false;
        this.mostRecentTransaction = -1;
    }

    isPerformingDo() {
        return this.performingDo;
    }

    isPerformingUndo() {
        return this.performingUndo;
    }

    addTransaction(transaction) {
        if((this.mostRecentTransaction<0)||(this.mostRecentTransaction <(this.transactions.length-1))) {
            for(let i = this.transactions.length-1; i>this.mostRecentTransaction; i--) {
                this.transactions.splice(i,1);
            }
        }
        this.transactions.push(transaction);
        this.doTransaction();
    }

    doTransaction() {
        if(this.hasTransactionToRedo()) {
            this.performingDo = true;
            let transaction = this.transactions[this.mostRecentTransaction+1];
            //this doTransaction is the transaction that belongs to the object, not this class
            transaction.doTransaction();
            this.mostRecentTransaction++;
            this.performingDo = false;
        }
    }

    peekUndo() {
        if(this.hasTransactionToUndo()) {
            return this.transactions[this.mostRecentTransaction];
        } else {
            return null;
        }
    }

    peekDo() {
        if(this.hasTransactionToRedo()) {
            return this.transactions[this.mostRecentTransaction+1];
        } else {
            return null;
        }
    }

    undoTransaction() {
        if(this.hasTransactionToUndo()) {
            this.performingUndo = true;
            let transaction = this.transactions[this.mostRecentTransaction]; 
            //this undoTransaction is the transaction that belongs to the object, not this class
            transaction.undoTransaction();
            this.mostRecentTransaction--;
            this.performingUndo = false;
        }
    }

    clearAllTransactions() {
        this.transactions = [];
        this.mostRecentTransaction = -1;
    }

    getSize() {
        return this.transactions.length;
    }

    getRedoSize() {
        return this.getSize()-this.mostRecentTransaction-1;
    }

    getUndoSize() {
        return this.mostRecentTransaction+1;
    }

    hasTransactionToUndo() {
        return this.mostRecentTransaction>=0;
    }

    hasTransactionToRedo() {
        return this.mostRecentTransaction < (this.transactions.length-1);
    }

    toString() {
        let text = "--Number of Transactions: " + this.transactions.length + "\n";
        text = text+"--Current Index on Stack: " + this.mostRecentTransaction + "\n";
        text = text+"--Current Transaction Stack:\n";
        for (let i = 0; i <= this.mostRecentTransaction; i++) {
            let jsT = this.transactions[i];
            text = text+"----" + jsT.toString() + "\n";
        }
        return text;
    }


}

export default jsTPS
