import { types } from 'mobx-state-tree'

export const TodoItem = types
  .model({
    name: types.string,
    complete: types.boolean
  })
  .actions(self => ({
    update(name) {
      self.name = name
    },
    toggle() {
      self.complete = !self.complete
    }
  }))

export const TodoList = types
  .model({
    items: types.optional(types.array(TodoItem), [])
  })
  .actions(self => ({
    add(todo) {
      self.items.push(todo)
    }
  }))
  .views(self => ({
    get incompleteTodo() {
      return self.items.filter(item => item.complete === false).length
    },
    get completeTodo() {
      return self.items.filter(item => item.complete === true).length
    }
  }))
