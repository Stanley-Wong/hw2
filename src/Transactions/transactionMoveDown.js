
export class transactionsMoveDown{
    constructor(changingList, index, app) {
        this.list = changingList;
        this.application = app;
        this.index = index;
    }

    doTransaction(){
        let newList = JSON.parse(JSON.stringify(this.list));

        let tempItem = newList.items;
        let temp = tempItem[this.index+1];
        tempItem[this.index+1]=tempItem[this.index];
        tempItem[this.index]=temp;
        newList.items = tempItem;

        this.application.setTransactionList(newList);
    }

    undoTransaction(){
        this.application.setTransactionList(this.list);
    }
}

