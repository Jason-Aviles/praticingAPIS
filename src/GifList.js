import React from "react";
import Gifs from "./Gifs";

const GifList = props => {
  const results = props.data;
  let gifs = results.map(gifs => <Gifs url={gifs.images.fixed_height.url} />);
  return <ul>{gifs}</ul>;
};

export default GifList;
