import React, { Component } from 'react'


const red = {color: 'red'};
const green = {color: 'green'};
const disable = {backgroundColor: '#dddddd'};
export class ListItemCard extends Component {
    completed = () => {
        if(this.props.listItem.completed){
            return (
                <div style={green}>Completed</div>
            )
        }
        else{
            return (
                <div style={red}>Pending</div>
            )
        }
    }

    upButton = () => {
        if(this.props.index==0){
            return (
                <div style={disable} className="list_item_button_up" >
                    ⇧
                </div>
            )
        }
        else{
            return (
                <div className="list_item_button_up" 
                    onClick={this.props.moveUp.bind(this, this.props.listItem)}>
                    ⇧
                </div>
            )
        }
    }

    downButton = () => {
        if(this.props.index==this.props.last){
            return (
                <div style={disable} className="list_item_button_down" >
                    ⇩
                </div>
            )
        }
        else{
            return (
                <div className="list_item_button_down" 
                    onClick={this.props.moveDown.bind(this, this.props.listItem)}>
                    ⇩   
                </div>
            )
        }
    }
    render() {
        const {description, assigned_to, due_date, key} = this.props.listItem;
        return (
            <div className='list_item_card' onClick={this.props.editItem.bind(this, this.props.listItem)}>
                <div className='list_item_card_description'>
                    {description}
                </div>
                <div className='list_item_card_assigned_to'>
                    Assigned To: <strong>{assigned_to}</strong>
                </div>
                <div className='list_item_card_due_date'>
                    {due_date}
                </div>
                <div className='list_item_card_completed'>
                    {this.completed()}  
                </div>
                {this.upButton()}
                {this.downButton()}
                <div className="list_item_button_delete"
                    onClick={this.props.delete.bind(this,this.props.listItem)}>
                    ✕
                </div>
            </div>
        )
    }
}

export default ListItemCard
