import 'jest-localstorage-mock';
import {
  update, add, create, clearAll,
} from './input.js';

import { editcomplete } from './check.js';

describe('Editing data', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('edit one data', () => {
    add('task1');
    add('task2');
    add('task3');
    update(1, 'clean the room');
    editcomplete(true, 1);
    const data = JSON.parse(localStorage.getItem('lists'));
    expect(data[1].completed).toBe(true);
  });

  test('edit many data', () => {
    add('task1');
    add('task2');
    add('task3');
    editcomplete(true, 1);
    editcomplete(true, 0);
    editcomplete(true, 2);

    const data = JSON.parse(localStorage.getItem('lists'));
    expect(data[1].completed).toBe(true);
    expect(data[0].completed).toBe(true);
    expect(data[2].completed).toBe(true);
  });
});

describe('Updating data', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('update one data', () => {
    add('task1');
    add('task2');
    add('task3');
    update(1, 'clean the room');
    const data = JSON.parse(localStorage.getItem('lists'));
    expect(data[1].description).toBe('clean the room');
  });

  test('update many data', () => {
    add('task1');
    add('task2');
    add('task3');
    update(1, 'clean the room');
    update(0, 'do homework');
    update(2, 'do exercise');

    const data = JSON.parse(localStorage.getItem('lists'));
    expect(data[1].description).toBe('clean the room');
    expect(data[0].description).toBe('do homework');
    expect(data[2].description).toBe('do exercise');
  });
});

describe('Clear all data', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('update one data', () => {
    add('task1');
    add('task2');
    add('task3');
    update(1, 'clean the room');
    editcomplete(true, 0);
    editcomplete(true, 2);
    clearAll();
    const data = JSON.parse(localStorage.getItem('lists'));
    expect(data[0].description).toBe('clean the room');
  });
});
