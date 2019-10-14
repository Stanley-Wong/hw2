
export class transactionOwnerChange{
    constructor(nOwner, current,app) {
        this.currentList=current;
        this.oldOwner = this.currentList.owner;
        this.newOwner=nOwner;
        this.application = app;
    }

    doTransaction() {
        this.currentList.owner = this.newOwner;
        this.application.setTransactionList(this.currentList);
    }

    undoTransaction() {
        this.currentList.owner = this.oldOwner;
        this.application.setTransactionList(this.currentList);
        this.application.refresh();
    }
}

export default transactionOwnerChange;