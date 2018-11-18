import React, { Component } from 'react'
import { decorate, observable, action } from 'mobx'
import { observer } from 'mobx-react'

import { TodoItem } from '../models/Todo'
import Button from './Button'

class TodoForm extends Component {
  name = ''

  handleInputChange = e => {
    this.name = e.target.value
  }

  onSubmit = () => {
    const newTodo = TodoItem.create({
      name: this.name,
      complete: false
    })

    this.addToTodoList(newTodo)
    this.redirect()
  }

  addToTodoList = todo => {
    this.props.list.add(todo)
  }

  redirect = () => {
    this.props.toggleForm()
  }

  render() {
    return (
      <section style={{ margin: '2rem 1rem' }}>
        Name: <input type="text" value={this.name} onChange={e => this.handleInputChange(e)} />
        <section style={{ margin: '1rem' }}>
          <Button onClick={this.onSubmit}>Submit</Button>
        </section>
      </section>
    )
  }
}

decorate(TodoForm, {
  name: observable,
  handleInputChange: action
})

export default observer(TodoForm)
