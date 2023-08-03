import {
  create,
} from './input.js';

export function editcomplete(test, num) {
  const totaltasks = create();
  if (test) {
    totaltasks[num].completed = true;
    localStorage.setItem('lists', JSON.stringify(totaltasks));
  } else {
    totaltasks[num].completed = false;
    localStorage.setItem('lists', JSON.stringify(totaltasks));
  }
}

export function completecheck(che, num) {
  if (che.checked === true) {
    document.querySelector(`.me${num}`).style.textDecoration = 'line-through';
  }
  if (che.checked === false) {
    document.querySelector(`.me${num}`).style.textDecoration = 'none';
  }
}

export const check = () => {
  const totaltasks = create();
  document.querySelector('.show').addEventListener('change', (e) => {
    const button = e.target;
    const num = Number(button.id);
    const che = document.querySelector(`.checkbox${num}`);
    if (e.target.tagName === 'INPUT') {
      const test = che.checked;
      editcomplete(test, num);
      completecheck(che, num);
    }
  });
};

export const headColor = () => {
  document.querySelector('h1').style.color = 'black';
};