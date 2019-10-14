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
        if(this.props.index===0){
            return (
                <div style={disable} className="list_item_button_up" onClick={(e)=>{e.stopPropagation()}}>
                    ⇧
                </div>
            )
        }
        else{
            return (
                <div className="list_item_button_up" 
                    onClick={
                        (e)=>{
                            e.stopPropagation()
                            this.props.moveUp.call(this, this.props.listItem)}
                        }>
                        ⇧
                </div>
            )
        }
    }

    write = () => {
        console.log("write runs")
    }

    downButton = () => {
        if(this.props.index===this.props.last){
            return (
                <div style={disable} className="list_item_button_down" onClick={(e)=>{e.stopPropagation()}}>
                    ⇩
                </div>
            )
        }
        else{
            return (
                <div className="list_item_button_down" 
                    onClick={
                        (e)=>{
                            e.stopPropagation()
                            this.props.moveDown.call(this,this.props.listItem)
                        }
                        }>
                    ⇩   
                </div>
            )
        }
    }
    render() {
        const {description, assigned_to, due_date} = this.props.listItem;
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
                    onClick={
                        (e)=> {
                            e.stopPropagation();
                            this.props.delete.call(this,this.props.listItem)}
                        }
                            >              
                            ✕
                </div>
            </div>
        )
    }
}

export default ListItemCard
