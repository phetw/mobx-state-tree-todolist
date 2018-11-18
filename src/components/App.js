import React, { Component } from 'react'
import { decorate, observable, action } from 'mobx'
import { observer } from 'mobx-react'

import TodoList from './TodoList'
import TodoForm from './TodoForm'
import Button from './Button'

class App extends Component {
  isForm = false

  toggleForm = () => {
    this.isForm = !this.isForm
  }

  render() {
    return (
      <main>
        <h1>Todo 📝</h1>
        {this.isForm ? (
          <TodoForm toggleForm={this.toggleForm} list={this.props.todo} />
        ) : (
          <>
            <Button onClick={this.toggleForm}>New</Button>
            <TodoList todo={this.props.todo} />
          </>
        )}
      </main>
    )
  }
}

decorate(App, {
  isForm: observable,
  toggleForm: action
})

export default observer(App)
