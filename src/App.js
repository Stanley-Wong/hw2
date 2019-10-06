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
    currentList: null
  }

  goHome = () => {
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
    this.setState({currentList: null});
  }

  loadList = (todoListToLoad) => {
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
    this.setState({currentList: todoListToLoad});
    console.log("currentList: " + this.state.currentList);
    console.log("currentScreen: " + this.state.currentScreen);
  }

  sortByDescription = () => {
    var tempList = this.state.currentList;
    var tempItem = tempList.items;
    tempItem.sort(function(a,b){return a.description.localeCompare(b.description)});
    this.setState({currentList:tempList});
  }

  sortByDueDate = () => {
    var tempList = this.state.currentList;
    var tempItem = tempList.items;
    tempItem.sort(function(a,b){return a.due_date.localeCompare(b.due_date)});
    this.setState({currentList:tempList});
  }
  
  sortByStatus = () => {
    var tempList = this.state.currentList;
    var tempItem = tempList.items;
    tempItem.sort(function(a,b){
      if(a.completed==true&&b.completed==false)
        return -1;   
      else if(a.completed==false&&b.completed==true)
        return 1;
      else
        return 0;
      }
    );
    this.setState({currentList:tempList});
  }


  moveUp = (item) => {
    var tempList = this.state.currentList;
    var tempItem = tempList.items;
    var index = tempItem.indexOf(item);
    var temp = tempItem[index-1];
    tempItem[index-1]=tempItem[index];
    tempItem[index]=temp;
    tempList.items = tempItem;
    this.setState({currentList:tempList});
  }

  moveDown = (item) => {
    var tempList = this.state.currentList;
    var tempItem = tempList.items;
    var index = tempItem.indexOf(item);
    var temp = tempItem[index+1];
    tempItem[index+1]=tempItem[index];
    tempItem[index]=temp;
    tempList.items = tempItem;
    this.setState({currentList:tempList});
  }

  delete = (item) => {
    var tempList = this.state.currentList;
    var tempItem = tempList.items;
    var index = tempItem.indexOf(item);
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

  

  render() {
    switch(this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
        loadList={this.loadList.bind(this)} 
        todoLists={this.state.todoLists} />;
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
          />;
      case AppScreen.ITEM_SCREEN:
        return <ItemScreen />;
      default:
        return <div>ERROR</div>;
    }
  }
}

export default App;