

export class transactionsMoveUp{
    constructor(changingList, item, app) {
        this.list = changingList;
        this.application = app;
        this.item = item;
    }

    doTransaction(){
        let newList = JSON.parse(JSON.stringify(this.list));

        let tempItem = newList.items;
        let index = tempItem.indexOf(this.item);
        let temp = tempItem[index-1];
        console.log(tempItem)
        console.log(this.item)
        console.log(index)
        console.log(temp);
        tempItem[index-1]=tempItem[index];
        console.log(temp);
        tempItem[index]=temp;
        newList.items = tempItem;

        console.log(newList);

        this.application.setTransactionList(newList);
    }

    undoTransaction(){
        this.application.setTransactionList(this.list);
    }
}