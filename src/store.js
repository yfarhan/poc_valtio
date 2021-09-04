import { subscribe, proxy, useSnapshot } from 'valtio';
import { proxy as rProxy, useSnapshot as rUseSnapshot } from 'axion';

export const rStore = rProxy({
  name: 'Axion',
});

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

    rStore.name = todo;
  },
};

export const useTodos = () => {
  const snapShot = useSnapshot(store);
  return snapShot.todos;
};

export const useRName = () => {
  const snapShot = rUseSnapshot(rStore);
  return snapShot.name;
};

export const subTodos = (cb) => {
  return subscribe(store, cb);
};
