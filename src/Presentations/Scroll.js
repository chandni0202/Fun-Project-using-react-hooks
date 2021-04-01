import React from 'react';


const Scroll = (props) => {
  return <div style={{overflow: 'scroll', border: '3px #000000 solid'}}>{props.children}</div>
}

export default Scroll;