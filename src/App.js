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
        console.log(this.state.list)
      })
  }

  render() {
    return (
      <div>
        Teste
      </div>
    );
  }
}

export default App;
