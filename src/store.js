import { subscribe, proxy, useSnapshot } from 'valtio';

export const store = proxy({
  todos: [],
  filter: 'all',
});

export const actions = {
  addTodo(todo) {
    store.todos.push({
      ...todo,
      id: +Date.now(),
    });
  },
};

export const useTodos = () => {
  const snapShot = useSnapshot(store);

  return snapShot.todos;
};

export const subTodos = (cb) => {
  return subscribe(store, cb);
};
