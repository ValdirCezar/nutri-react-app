import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    const url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
    
    fetch(url)
      .then((resposta) => resposta.json())
      .then((json) => {
        let state = this.state;
        state.list = json
        this.setState(state)
      })
  }

  render() {
    return (
      <div className="container">
        
      </div>
    );
  }
}

export default App;
