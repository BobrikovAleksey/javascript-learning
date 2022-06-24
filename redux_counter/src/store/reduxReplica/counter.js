import actions from './reducers/actions';

export const counter = (store) => {
  const counter = document.querySelector('#counter');

  document.querySelector('#async').addEventListener('click', () => {
    actions.async(store);
  });

  document.querySelector('#dec').addEventListener('click', () => {
    actions.decrement(store);
  });

  document.querySelector('#inc').addEventListener('click', () => {
    actions.increment(store);
  });

  const render = () => {
    counter.textContent = store.getState().counter.value;
  };

  store.subscribe(render);

  return store;
};
