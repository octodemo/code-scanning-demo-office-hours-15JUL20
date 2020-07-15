import React, { Component }  from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        unsafeText:''
    };
}

 setText = () => {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let formText = params.get('text');

  this.setState({ 
    unsafeText: (formText) ? formText : "Username or Password can not be empty"
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div 
              dangerouslySetInnerHTML={{__html: this.state.unsafeText}}>
          </div>
          <button onClick={this.setText} >Get URL Parameter</button>
        </header>
      </div>
    );
  }
}


export default App;
