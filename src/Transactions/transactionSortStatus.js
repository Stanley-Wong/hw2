
export class transactionSortStatus{
    constructor(changingList, app) {
        this.list = changingList;
        this.application = app;
    }

    doTransaction(){
        let newList = JSON.parse(JSON.stringify(this.list));
        let tempItem = newList.items;
        tempItem.sort(function(a,b){
            if(a.completed===true&&b.completed===false)
              return -1;   
            else if(a.completed===false&&b.completed===true)
              return 1;
            else
              return 0;
            }
          );
        if((JSON.stringify(tempItem)==JSON.stringify(this.list.items)))
            tempItem = tempItem.reverse();
        this.application.setTransactionList(newList);
    }

    undoTransaction(){
        this.application.setTransactionList(this.list);
    }
}