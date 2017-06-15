import React from 'react';
import GiphyItem from './GiphyItem';

let GiphyList = ({ giphys }) => {
  let giphyItems = giphys.map((image) => {
    return <GiphyItem key={image.id} image={image} />
  });

  return (
    <ul>{giphyItems}</ul>
  );
};

export default GiphyList;
