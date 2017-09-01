import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import Search from '../Search/Search';
import Topics from '../Topics/Topics';
import About from '../About/About';
import './Navigation.css';

export default function Navigation(props){
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li><NavLink to="/search">Search</NavLink></li>
            <li><NavLink to="/topics">Topics</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </nav>
        <Route path="/search" render={() => <Search getGif={props.getGif} keyPress={props.keyPress} gifUrl={props.gifUrl} searchStatus={props.searchStatus} isLoading={props.isLoading} />}/>
        <Route path="/topics" render={() => <Topics getGif={props.getGif} gifUrl={props.gifUrl} searchStatus={props.searchStatus} isLoading={props.isLoading} />}/>
        <Route path="/about" component={About}/>
      </div>
    </Router>
  );
}
