import React from 'react';
import TextInput from '../TextInput/TextInput';
import GifContainer from '../GifContainer/GifContainer';

export default function Search(props){
  return(
    <div>
      <h2>Write a keyword &amp; press enter</h2>
      <TextInput keyPress={props.keyPress} />
      <GifContainer gifUrl={props.gifUrl} searchStatus={props.searchStatus} isLoading={props.isLoading} />
    </div>
  );
}
