import React from 'react';

export default Text = (props) => {
    return (
     <span style={{color: props.color}}>
        {props.children}
      </span>
    );
  }