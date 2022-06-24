import actions from './reducers/actions';

export const theme = (store) => {
  document.querySelector('#theme').addEventListener('click', () => {
    store.dispatch(actions.changeTheme());
  });

  const render = () => {
    const { classList } = document.body;
    if (store.getState().theme.dark) !classList.contains('dark') && classList.add('dark');
    else classList.contains('dark') && classList.remove('dark');
  };

  store.subscribe(render);

  return store;
};
