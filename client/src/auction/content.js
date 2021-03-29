import React from 'react';

function content(props) {
  return <div> {props.title} 
          <input title={props.title} onChange={props.onChange} value={props.value}/>
          </div>
}

export default content;