import React, { Component } from 'react'


const popUp = {
    display: 'grid',
    position: 'fixed',
    width: '50%',
    height: '300px',
    top: '0px',
    left: '0',
    right: '0',
    bottom: '0',
    margin: 'auto',
    backgroundColor: 'rgb(225,228,203)',
    textAlign: 'left'
}
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
            <div className='deleteList' style={popUp}>
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