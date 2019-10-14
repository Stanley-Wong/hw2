
export class transactionNewItem{
    constructor(changingList, app, newItem) {
        this.list = changingList;
        this.application = app;
        this.nItem = newItem;
    }
    doTransaction() {
        let newList = JSON.parse(JSON.stringify(this.list));
        let tempItem = newList.items;
        tempItem.push(this.nItem);
        this.application.setTransactionList(newList);
    }
     undoTransaction() {
         this.application.setTransactionList(this.list);
     }
}