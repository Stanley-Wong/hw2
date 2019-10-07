import React, { Component } from 'react'
import ListItemCard from './ListItemCard'

const header = {
    backgroundColor: 'var(--swatch-accent)',
    position: 'relative',
    height: '50px',
    gridRowGap: '0px',
    gridColumnGap: '50px',
    marginTop: '0px',
    marginBottom: '5px',
    borderRadius: '5px',
    cursor: 'pointer'
}
export class ListItemsTable extends Component {
    lastIndex = () => {
        var length = this.props.todoList.items.length
        return length-1;
    }
    render() {
        return (
            <div>
                <div style={header} id="list_items_container">
                    <div onClick={this.props.sortDescription} className="list_item_task_header">Task</div>
                    <div onClick={this.props.sortDueDate} className="list_item_due_date_header">Due Date</div>
                    <div onClick={this.props.sortStatus} className="list_item_status_header">Status</div>
                </div>
                <div>
                {

                    this.props.todoList.items.map((todoItem)=>(
                        <ListItemCard
                            last={this.lastIndex()}
                            index = {this.props.todoList.items.indexOf(todoItem)}
                            key={todoItem.key}
                            listItem={todoItem} 
                            moveUp={this.props.moveUp}
                            moveDown={this.props.moveDown}
                            delete={this.props.delete}
                            editItem={this.props.editItem}
                            />
                    ))
                }
                </div>
                <div onClick={this.props.newItem} className="newItem">+</div>
            </div>
        )
    }
}

export default ListItemsTable
