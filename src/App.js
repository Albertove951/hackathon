import React, { Component } from 'react'
import Users from './Users'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
      
           data: []
        }
    }


    addToData(event) {
        let data = this.state.data;
        data = data.push(event)
        this.setState(data)
        // console.log('event ' + event)
        
    }

  componentDidMount() {
    fetch('http://maplestory.io/api/ranking/' + this.state.data)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

    render() {
        console.log(this.state.data)
        return(
            <div>
                <h3>Character Info</h3>
                <hr/>
                <Users addToData={this.addToData}/>

            
            </div>
        )
    }
}

export default App
