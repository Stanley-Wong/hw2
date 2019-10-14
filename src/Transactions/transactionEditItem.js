
export class transactionsEditItem{
    constructor(changingList, index, app, editItem) {
        this.list = changingList;
        this.application = app;
        this.index = index;
        this.edit = editItem;
    }

    doTransaction(){
        let newList = JSON.parse(JSON.stringify(this.list));
        let tempItem = newList.items;
        tempItem[this.index] = this.edit;

        this.application.setTransactionList(newList);
    }

    undoTransaction(){
        this.application.setTransactionList(this.list);
    }
}
