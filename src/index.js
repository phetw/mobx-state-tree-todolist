import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { TodoList } from './models/Todo'
import * as serviceWorker from './serviceWorker'

import './index.css'

const todoList = TodoList.create({
  items: [
    {
      name: 'Buy a banana',
      complete: false
    },
    {
      name: 'Buy an egg',
      complete: false
    },
    {
      name: 'Buy an apple',
      complete: true
    }
  ]
})

ReactDOM.render(<App todo={todoList} />, document.getElementById('root'))

serviceWorker.unregister()
