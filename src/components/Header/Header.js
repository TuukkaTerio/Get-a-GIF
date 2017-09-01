import React from 'react';
import backgroundVideo from './img/backgroundVideo.mp4';
import './Header.css';

export default function Header(){
  return(
    <div>
      <h1 className='headline'>Get a GIF</h1>
      <video playsInline autoPlay muted loop className='backgroundVideo'>
        <source src={backgroundVideo} type='video/mp4' />
      </video>
    </div>
  );
}
