import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
import PropTypes from 'prop-types';
import ListDeletePopUp from './ListDeletePopUp';

export class ListScreen extends Component {
    state = {
        listName: this.getListName(),
        listOwner: this.getListOwner(),
        showDelete: false
    }
    getListName() {
        if (this.props.todoList) {
            let name = this.props.todoList.name;
            return this.props.todoList.name;
        }
        else
            return "";
    }
    getListOwner() {
        if (this.props.todoList) {
            let owner = this.props.todoList.owner;
            return this.props.todoList.owner;
        }
    }

    changeListName = (evt) =>{
        var newName = evt.target.value;
        if(evt.target.value === ''){
            newName='UNKNOWN';
        }
        this.setState({listName:newName});
        this.props.todoList.name = newName;
    }

    changeListOwner = (evt) =>{
        var newOwner = evt.target.value;
        if(evt.target.value === ''){
            newOwner='UNKNOWN';
        }
        this.setState({listOwner:newOwner});
        this.props.todoList.owner = newOwner;
    }

    toggleDelete = () => {
        this.setState({showDelete:true});
    }

    closePopUp = () => {
        this.setState({showDelete:false});
    }

    render() {
        return (
            <div id="todo_list">
                <ListHeading goHome={this.props.goHome} />
                <ListTrash deleteList={this.toggleDelete}/>
                <div id="list_details_container">
                    <div id="list_details_name_container" className="text_toolbar">
                        <span id="list_name_prompt">Name:</span>
                        <input 
                            value={this.state.listName} 
                            type="text" 
                            id="list_name_textfield" 
                            onChange={this.changeListName}/>
                    </div>
                    <div id="list_details_owner_container" className="text_toolbar">
                        <span id="list_owner_prompt">Owner:</span>
                        <input 
                            value={this.state.listOwner}
                            type="text" 
                            id="list_owner_textfield"
                            onChange={this.changeListOwner} />
                    </div>
                </div>
                <ListItemsTable 
                    todoList={this.props.todoList} 
                    moveUp={this.props.moveUp}
                    moveDown={this.props.moveDown}
                    delete={this.props.delete}
                    sortDescription={this.props.sortDescription}
                    sortDueDate={this.props.sortDueDate}
                    sortStatus={this.props.sortStatus}
                    newItem={this.props.newItem}
                    editItem={this.props.editItem}
                />
                {this.state.showDelete ? 
                    <ListDeletePopUp
                        confirmDelete={this.props.confirmDelete}
                        rejectDelete={this.closePopUp}
                    />
                    :null
                }
            </div>
        )
    }
}

export default ListScreen
