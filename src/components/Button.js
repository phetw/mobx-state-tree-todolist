import React from 'react'

const styles = {
  color: 'white',
  cursor: 'pointer',
  fontSize: '1rem',
  padding: '0.5rem 1rem',
  background: 'rgb(28, 184, 65)',
  borderRadius: '4px'
}

const AddTodoButton = props => {
  return (
    <button style={styles} {...props}>
      {props.children}
    </button>
  )
}

export default AddTodoButton
