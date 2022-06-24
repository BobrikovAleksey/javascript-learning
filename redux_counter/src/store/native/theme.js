const state = {
  darkTheme: false,
};

const themeBtn = document.querySelector('#theme');

const render = () => {
  const { classList } = document.body;
  if (state.darkTheme) !classList.contains('dark') && classList.add('dark');
  else classList.contains('dark') && classList.remove('dark');
};

themeBtn.addEventListener('click', () => {
  state.darkTheme = !state.darkTheme;
  render();
});

render();
