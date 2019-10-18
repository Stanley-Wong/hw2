
export class transactionSortDueDate{
    constructor(changingList, app) {
        this.list = changingList;
        this.application = app;
    }

    doTransaction(){
        let newList = JSON.parse(JSON.stringify(this.list));
        let tempItem = newList.items;
        tempItem.sort(function(a,b){return a.due_date.localeCompare(b.due_date)});
        if((JSON.stringify(tempItem)==JSON.stringify(this.list.items)))
            tempItem = tempItem.reverse();
        this.application.setTransactionList(newList);
    }

    undoTransaction(){
        this.application.setTransactionList(this.list);
    }
}