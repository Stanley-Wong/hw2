
export class transactionsDelete{
    constructor(changingList, item, app) {
        this.list = changingList;
        this.application = app;
        this.item = item;
    }

    doTransaction(){
        let newList = JSON.parse(JSON.stringify(this.list));
        let tempItem = newList.items;
        let index = tempItem.indexOf(this.item);
        tempItem.splice(index,1);
        this.application.setTransactionList(newList);
    }

    undoTransaction(){
        this.application.setTransactionList(this.list);
    }
}