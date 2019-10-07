import React, { Component } from 'react'


const inline = {
    display: 'inline-block'
}
const bold = {
    fontWeight: 'bold'
}
const button = {
    display: 'inline-block',
    height: '70px',
    width: '70px'
}
export class ListDeletePopUp extends Component {
    render() {
        return (
            <div className="deletePopUp">
                <p>Delete List?</p>
                <p style={bold}>Are you sure you want to delete this list?</p>
                <div style={inline}>
                    <button style={button} onClick={this.props.confirmDelete}>Yes</button>
                    <button style={button} onClick={this.props.rejectDelete}>No</button>
                </div>
                <p>This list will not be retreivable.</p>
            </div>
        )
    }
}

export default ListDeletePopUp