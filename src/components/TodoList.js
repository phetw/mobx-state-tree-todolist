import React, { Component } from 'react'
import { observer } from 'mobx-react'

import TodoItem from './TodoItem'

class TodoList extends Component {
  render() {
    const { completeTodo, items } = this.props.todo
    const totalTodos = items.length
    return (
      <>
        <p>
          {completeTodo === totalTodos ? (
            '🎉 Congrats!'
          ) : (
            <>
              Completed: {completeTodo}/{totalTodos}
            </>
          )}
        </p>
        <section style={{ margin: '2rem 1rem' }}>
          {items.map(todo => (
            <TodoItem key={todo.name} todo={todo} />
          ))}
        </section>
      </>
    )
  }
}

export default observer(TodoList)
