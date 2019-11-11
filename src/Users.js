import React, { Component } from 'react'

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: ''
        }
        this.addUserName = this.addUserName.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    addUserName() {
    
        this.props.addToData(this.state.userName)
    }

    render() {
        return(
            <div>
                 <input name='userName' onChange={this.handleChange} placeholder='IGN' type='text'></input>
                <button onClick={this.addUserName}>Pull Character Sheet</button>
                <p></p>
            
            </div>
        )
    }
}

export default Users