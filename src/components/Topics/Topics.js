import React from 'react';
import Button from '../Button/Button';
import GifContainer from '../GifContainer/GifContainer';

export default function Topics(props){
  return(
    <div>
      <h2>Choose a topic</h2>
      <Button updateKeyword={() => props.getGif('cat')} keyword={'Cats'}/>
      <Button updateKeyword={() => props.getGif('dog')} keyword={'Dogs'}/><br className="break"/>
      <Button updateKeyword={() => props.getGif('rupaul')} keyword={'RuPaul'}/>
      <Button updateKeyword={() => props.getGif('beyonce')} keyword={'Beyoncé'}/>
      <GifContainer gifUrl={props.gifUrl} searchStatus={props.searchStatus} isLoading={props.isLoading} />
    </div>
  );
}
