import React from 'react';

const ArtistHover = props => {
  const divStyle = {
    left: props.coordX + 'px',
    top: props.coordY + 'px'
  };
  return (
    <div id="artistHover" className="p1 fa fix z0 hot" style={divStyle}>
      <h1>{props.username}</h1>
    </div>
  );
};

export default ArtistHover;
