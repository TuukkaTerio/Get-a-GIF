import React from 'react';
import about_gif_1 from './img/about_gif_1.gif';
import about_gif_2 from './img/about_gif_2.gif';
import about_gif_3 from './img/about_gif_3.gif';
import './About.css';

export default function About(){
  return(
    <div>
      <h2>About GIFs</h2>
      <p className='aboutText'>GIF stands for &quot;The Graphics Interchange Format&quot; which is a
      file format for images. CompuServe developed and introduced the format in 1987.
      The format supports up to 8 bits per pixel, or 256 colors. Each frame
      of an animation can have its own set of 256 colors.</p>
      <div className='aboutGifContainer'>
        <img src={about_gif_1} alt='GIF of a retro computer.' />
        <img src={about_gif_2} alt='GIF of a retro computer.' />
        <img src={about_gif_3} alt='GIF of a retro computer.' />
      </div>
    </div>
  );
}
