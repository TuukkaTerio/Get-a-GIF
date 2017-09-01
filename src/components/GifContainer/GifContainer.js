import React from 'react';
import Loader from '../Loader/Loader';
import './GifContainer.css';

export default function GifContainer(props){
  if (props.isLoading === true) {
    return (
      <Loader />
    );
  }
  if (props.searchStatus === 'noResults') {
    return (
      <p className='infoText'>No GIFs found</p>
    );
  } else if (props.searchStatus === 'resultsFound') {
    return (
      <div>
        <img src={props.gifUrl} alt="Gif" className='gif'/><br />
        <a href={props.gifUrl} className='gifUrl'>GIF URL</a>
      </div>
    );
  } else {
    return (
      <p className='infoText'>Start exploring!</p>
    );
  }
}
