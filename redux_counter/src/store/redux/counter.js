import actions from './reducers/actions';

export const counter = (store) => {
  const counter = document.querySelector('#counter');
  const decBtn = document.querySelector('#dec');
  const incBtn = document.querySelector('#inc');
  const asyncBtn = document.querySelector('#async');

  asyncBtn.addEventListener('click', () => {
    store.dispatch(actions.async());
  });

  decBtn.addEventListener('click', () => {
    store.dispatch(actions.decrement());
  });

  incBtn.addEventListener('click', () => {
    store.dispatch(actions.increment());
  });

  const renderButtons = () => {
    if (store.getState().counter.isLoading) {
      [asyncBtn, decBtn, incBtn].forEach((btn) => btn.setAttribute('disabled', ''));
    } else {
      [asyncBtn, decBtn, incBtn].forEach((btn) => btn.removeAttribute('disabled'));
    }
  };

  const renderCounter = () => {
    counter.textContent = store.getState().counter.value;
  };

  store.subscribe(renderButtons);
  store.subscribe(renderCounter);

  return store;
};
