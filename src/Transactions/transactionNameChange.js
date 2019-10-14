
export class transactionNameChange{
    constructor(nName, current,app) {
        this.currentList=current;
        this.oldName = this.currentList.name;
        this.newName=nName;
        this.application = app;
    }

    doTransaction() {
        this.currentList.name = this.newName;
        this.application.setTransactionList(this.currentList);
    }

    undoTransaction() {
        this.currentList.name = this.oldName;
        this.application.setTransactionList(this.currentList);
        this.application.refresh();
    }
}

export default transactionNameChange;