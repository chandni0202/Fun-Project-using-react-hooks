import React from 'react';


const Scroll = (props) => {
  return <div style={{overflow: 'scroll', border: '3px #000000 solid', height: '1000px'}}>{props.children}</div>
}

export default Scroll;