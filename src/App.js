import React, { Component } from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import './css/normalize.css';
import './App.css';

export default class App extends Component {

  // Constructor to create an initial state
  constructor() {
    super();
    this.state = {
      gifUrl : '',
      keyword : '',
      searchStatus : '',
      isLoading: false
    };
  }

  // Gets an array from url and saves it in state
  getGif = (event) => {
    this.setState({ isLoading: true });
    let fetchUrl = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + event;
    fetch(fetchUrl)
    .then(response => response.json())
    .then(gifProperties => {
      this.setState({ gifUrl: gifProperties.data.image_url });
      if(gifProperties.data.length === 0) {
        this.setState({
          searchStatus: 'noResults',
          isLoading: false
        })
      } else {
        this.setState({
          searchStatus: 'resultsFound',
          isLoading: false
        })
      }
    });
  }

  // Searches for a gif if Enter is pressed
  keyPress = (event) => {
    if(event.keyCode === 13){
      this.getGif(event.target.value);
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Navigation getGif={this.getGif} keyPress={this.keyPress} gifUrl={this.state.gifUrl} searchStatus={this.state.searchStatus} isLoading={this.state.isLoading}/>
      </div>
    );
  }
}
