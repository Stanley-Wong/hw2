
export class transactionSortTask{
    constructor(changingList, app) {
        this.list = changingList;
        this.application = app;
    }

    doTransaction(){
        let newList = JSON.parse(JSON.stringify(this.list));
        let tempItem = newList.items;
        tempItem.sort(function(a,b){return a.description.localeCompare(b.description)});
        console.log((JSON.stringify(tempItem)==JSON.stringify(this.list.items)))
        if((JSON.stringify(tempItem)==JSON.stringify(this.list.items)))
            tempItem = tempItem.reverse();
        console.log(tempItem);
        this.application.setTransactionList(newList);
    }

    undoTransaction(){
        this.application.setTransactionList(this.list);
    }
}