// Referencing html elements from DOM
const btn = document.getElementById('btn');
const hide = document.querySelector('.hide');
// setting button behaviour
btn.addEventListener('click', () => {
  if (btn.innerHTML == 'Show Pictures') {
    hide.style.display = 'grid';
    btn.innerHTML = 'Hide Pictures';
  } else if (btn.innerHTML == 'Hide Pictures') {
    hide.style.display = 'none';
    btn.innerHTML = 'Show Pictures';
  }
});
