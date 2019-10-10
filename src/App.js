import React, { Component } from 'react';
import testTodoListData from './TestTodoListData.json'
import HomeScreen from './components/home_screen/HomeScreen'
import ItemScreen from './components/item_screen/ItemScreen'
import ListScreen from './components/list_screen/ListScreen'

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  LIST_SCREEN: "LIST_SCREEN",
  ITEM_SCREEN: "ITEM_SCREEN"
}

class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    todoLists: testTodoListData.todoLists,
    currentList: null,
    currentItem:null,
    editing:false
  }

  deleteList = () => {
    let tempTodoLists = this.state.todoLists;
    let index = tempTodoLists.indexOf(this.state.currentList);
    tempTodoLists.splice(index,1);
    this.setState({todoLists:tempTodoLists});
    this.setState({currentList:null});
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
  }

  createNewList = () => {
    let emptyList = {
      key:this.state.todoLists.length,
      name:"Unknown",
      owner:"Unknown",
      items: []
    }
    let tempTodoLists = this.state.todoLists;
    tempTodoLists.push(emptyList);
    this.setState({todoLists:tempTodoLists});
    this.setState({currentList:this.state.todoLists[this.state.todoLists.length-1]});
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
  }

  goHome = () => {
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
    this.setState({currentList: null});
  }

  newItem = () => {
    let newItem = {
      key: 0,
      description:'',
      due_date:'',
      assigned_to:'',
      completed: false
    }
    this.setState({editing:false});
    this.setState({currentItem:newItem});
    this.setState({currentScreen: AppScreen.ITEM_SCREEN});
  }

  editItem = (item) => {
    this.setState({editing:true});
    this.setState({currentItem:item});
    this.setState({currentScreen: AppScreen.ITEM_SCREEN});
  }

  createNewItem = (newItem) => {
    let tempNewList = this.state.currentList;
    let tempNewItem = tempNewList.items;
    tempNewItem.push(newItem);
    this.setState({currentList:tempNewList});
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
  }

  createEditItem = (editItem) => {
    let tempEditList = this.state.currentList;
    let tempEditItem = tempEditList.items;
    tempEditItem[tempEditItem.indexOf(this.state.currentItem)] = editItem;
    this.setState({currentList:tempEditList});
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
  }

  cancel = () => {
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
  }

  loadList = (todoListToLoad) => {
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
    this.setState({currentList: todoListToLoad});
    console.log("currentList: " + this.state.currentList);
    console.log("currentScreen: " + this.state.currentScreen);
    let tempTodoLists = this.state.todoLists;
    let tempList = todoListToLoad;
    let index = tempTodoLists.indexOf(todoListToLoad);
    tempTodoLists.splice(index,1);
    tempTodoLists.unshift(tempList);
    this.setState({todoLists:tempTodoLists})
  }

  sortByDescription = () => {
    let tempList = this.state.currentList;
    let tempItem = tempList.items;
    tempItem.sort(function(a,b){return a.description.localeCompare(b.description)});
    this.setState({currentList:tempList});
  }

  sortByDueDate = () => {
    let tempList = this.state.currentList;
    let tempItem = tempList.items;
    tempItem.sort(function(a,b){return a.due_date.localeCompare(b.due_date)});
    this.setState({currentList:tempList});
  }
  
  sortByStatus = () => {
    let tempList = this.state.currentList;
    let tempItem = tempList.items;
    tempItem.sort(function(a,b){
      if(a.completed===true&&b.completed===false)
        return -1;   
      else if(a.completed===false&&b.completed===true)
        return 1;
      else
        return 0;
      }
    );
    this.setState({currentList:tempList});
  }


  moveUp = (item) => {
    let tempList = this.state.currentList;
    let tempItem = tempList.items;
    console.log(item);
    console.log(item.description);
    console.log(item.assigned_to);
    console.log(item.due_date);
    console.log(item.completed);
    var index = tempItem.indexOf(item);
    var temp = tempItem[index-1];
    tempItem[index-1]=tempItem[index];
    tempItem[index]=temp;
    tempList.items = tempItem;
    this.setState({currentList:tempList});
  }

  moveDown = (item) => {
    let tempList = this.state.currentList;
    let tempItem = tempList.items;
    let index = tempItem.indexOf(item);
    let temp = tempItem[index+1];
    tempItem[index+1]=tempItem[index];
    tempItem[index]=temp;
    tempList.items = tempItem;
    this.setState({currentList:tempList});
  }

  delete = (item) => {
    let tempList = this.state.currentList;
    let tempItem = tempList.items;
    let index = tempItem.indexOf(item);
    tempItem.splice(index,1);
    this.setState({currentList:tempList});
  }
  
  print = () => {
    console.log("It ran");
  }

  changeListName = (evt) => {
    var tempList = this.state.currentList;
    tempList.name = evt.target.value;
    this.setState({currentList:tempList});
    this.print();
  }

  createOrEditItem = (item) => {
    if(this.state.editing===true)
      this.createEditItem(item);
    else
      this.createNewItem(item);
  }


  render() {
    switch(this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
        loadList={this.loadList.bind(this)} 
        todoLists={this.state.todoLists} 
        createNewList={this.createNewList}/>;
      case AppScreen.LIST_SCREEN:            
        return <ListScreen
          changeListName={this.changeListName}
          goHome={this.goHome.bind(this)}
          todoList={this.state.currentList} 
          moveUp={this.moveUp}
          moveDown={this.moveDown}
          delete={this.delete}
          sortDescription={this.sortByDescription}
          sortDueDate={this.sortByDueDate}
          sortStatus={this.sortByStatus}
          newItem={this.newItem}
          editItem={this.editItem}
          confirmDelete={this.deleteList}
          />;
      case AppScreen.ITEM_SCREEN:
        return <ItemScreen 
          goHome={this.goHome.bind(this)}
          todoItem={this.state.currentItem}
          todoList={this.state.currentList}
          createOrEditItem={this.createOrEditItem}
          cancel={this.cancel}
        />;
      default:
        return <div>ERROR</div>;
    }
  }
}

export default App;