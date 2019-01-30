import React, { Component } from 'react';
import logo from './poudlard.jpg';
import logo2 from './Harrypotter.jpg';
import logo3 from './Hermione.jpg';
import './App.css';
import axios from 'axios'; 

class App extends Component {

  state = {
    image: '',
  };
  

  componentDidMount() {
    const url = 'https://www.potterapi.com/v1/sortingHat';
    const options = {
      method: 'GET',
    };
  
    return axios(url, options)
      .then(response => {
        console.log("response.data",response.data);
        this.setState({ image: response.data});
        return response.data;
      })
      .catch(error => error);
  }

  myFunction() {
    console.log("toto");
    const url = 'https://www.potterapi.com/v1/sortingHat';
    const options = {
      method: 'GET',
    };
    return axios(url, options)
      .then(response => {
        console.log("response.data",response.data);
        this.setState({ image: response.data});
        return response.data;
      })
      .catch(error => error);
  }


  render() {
    console.log(this.state.image);

    return (
      <div className="App">
      <div>
      <header className="App-header">
        <div className="App-link2">
          TOUS FANS de Harry Potter
          </div>
        <div class="row">
  <div class="column2">
    <img src={logo2} className="App-logo2" alt="Snow" />
  </div>
  <div class="column">
    <img src={logo} className="App-logo" alt="Forest" />
  </div>
  <div class="column2">
    <img src={logo3} className="App-logo2" alt="Mountains" />
  </div>
  </div>
          <p>
            Votre maison : {this.state.image}
          </p>
          <button class="button" onClick={this.myFunction} >Button</button>
          <p>
            Harry potter la légende 
          </p>
          <a
            className="App-link"
            href="https://www.fanfiction.net/s/2211674/1/Les-Secrets-d-Hermione"
            target="_blank"
            rel="noopener noreferrer"
          >
            En exclusivité :Les secrets d'Hermione chapitre 1
          </a>


        </header>
      </div>
    </div>
    );
  }
}

export default App;
