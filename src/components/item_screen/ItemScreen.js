import React, { Component } from 'react'
import PropTypes from 'prop-types';

const inline = {display: 'inline-block'}
const grid = {
    backgroundColor: 'var(--swatch-primary)',
    display: 'grid',
    gridRowGap: '30px'
}
const textDescription = {
    display: 'inline-block',
    fontWeight: 'bold',
    width: '128.017px'
}
const textfield = {
    display: 'inline-block',
    width: '83%'
}
export class ItemScreen extends Component {
    state = {
        description: this.props.todoItem.description,
        assignedTo: this.props.todoItem.assigned_to,
        dueDate: this.props.todoItem.due_date,
        completed: this.props.todoItem.completed
    }

    changeDescription = (evt) =>{
        var newDescription = evt.target.value;
        this.setState({description:newDescription});
    }

    changeAssignedTo = (evt) =>{
        var newAssignedTo = evt.target.value;
        this.setState({assignedTo:newAssignedTo});
    }

    changeDueDate = (evt) =>{
        var newDueDate = evt.target.value;
        this.setState({dueDate:newDueDate});
    }

    changeCompleted = (evt) =>{
        var newCompleted = evt.target.checked;
        this.setState({completed:newCompleted});
    }

    cancel = () => {
        this.setState({description:""});
        this.setState({assignedTo:""});
        this.setState({dueDate:""});
        this.setState({completed:""});
    }

    createItem = (des, date, assign, status) => {
        return(
            {
                key: 0,
                description: des,
                due_date: date,
                assigned_to: assign,
                completed: status
            }
        )
    }

    render() {
        return (
            <div style={grid}>
                <span>Item</span>
                <div>
                    <div style={inline}></div>
                        <span style={textDescription}>Description:</span>
                        <input
                        value={this.state.description} 
                        type="text" 
                        onChange={this.changeDescription}
                        style={textfield}/>
                </div>
                <div>
                    <div style={inline}></div>
                        <span style={textDescription}>Assigned To:</span>
                        <input
                        value={this.state.assignedTo} 
                        type="text" 
                        onChange={this.changeAssignedTo}
                        style={textfield}/>
                </div>
                <div>
                    <div style={inline}></div>
                        <span style={textDescription}>Due Date:</span>
                        <input
                        value={this.state.dueDate} 
                        type="date" 
                        onChange={this.changeDueDate}
                        style={textfield}/>
                </div>
                <div>
                    <div style={inline}></div>
                        <span style={textDescription}>Completed:</span>
                        <input
                        defaultChecked={this.state.completed} 
                        type="checkbox" 
                        onChange={this.changeCompleted}
                        />
                </div>
                <div>
                    <button style={inline} onClick={this.props.createOrEditItem.bind(this, this.createItem(this.state.description, this.state.dueDate,this.state.assignedTo, this.state.completed))}>Submit</button>
                    <button 
                        style={inline} 
                        onClick={this.props.cancel} 
                    >Cancel</button>
                </div>
            </div>
        )

    }
}

ItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default ItemScreen
