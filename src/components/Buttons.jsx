import React from 'react'

const Buttons = (props) => {
  return (
    <div>
       {props.children}      
      <button onClick={props.handleClick}>
        {props.text}
 
      </button>
      <p>Test</p>
    </div>
  )
}

export default Buttons
