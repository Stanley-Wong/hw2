
export class transactionsDelete{
    constructor(changingList, index, app) {
        this.list = changingList;
        this.application = app;
        this.index = index;
    }

    doTransaction(){
        let newList = JSON.parse(JSON.stringify(this.list));
        let tempItem = newList.items;
        tempItem.splice(this.index,1);
        this.application.setTransactionList(newList);
    }

    undoTransaction(){
        this.application.setTransactionList(this.list);
    }
}