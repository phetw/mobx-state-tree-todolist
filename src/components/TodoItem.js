import React from 'react'
import { observer } from 'mobx-react'

const styles = { margin: '1rem', cursor: 'pointer' }

const textStyles = {
  opacity: '0.5',
  textDecoration: 'line-through'
}

const TodoItem = ({ todo }) => {
  return (
    <article style={styles} onClick={todo.toggle}>
      {todo.complete ? '✅' : '❗️'} ⏤ <span style={todo.complete ? textStyles : {}}>{todo.name}</span>
    </article>
  )
}

export default observer(TodoItem)
