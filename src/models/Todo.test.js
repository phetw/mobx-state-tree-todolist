import { getSnapshot, onPatch } from 'mobx-state-tree'
import { TodoItem, TodoList } from './Todo'

it('can create instance of Todo model', () => {
  const todoItem = TodoItem.create({
    name: 'Buy a banana',
    complete: false
  })

  expect(todoItem.name).toBe('Buy a banana')
  expect(todoItem.complete).toBe(false)
})

it('can update name', () => {
  const todoItem = TodoItem.create({
    name: 'Buy a banana',
    complete: false
  })
  todoItem.update('Buy an apple')

  expect(todoItem.name).toBe('Buy an apple')
})

it('can toggle todo state', () => {
  const todoItem = TodoItem.create({
    name: 'Buy a banana',
    complete: false
  })
  todoItem.toggle()

  expect(todoItem.complete).toBe(true)
})

it('can create a Todo list', () => {
  const list = TodoList.create()
  list.add(
    TodoItem.create({
      name: 'Buy an egg',
      complete: false
    })
  )

  expect(getSnapshot(list)).toMatchSnapshot()
})
