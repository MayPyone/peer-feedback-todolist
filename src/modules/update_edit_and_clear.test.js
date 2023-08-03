import 'jest-localstorage-mock';
import {edit,add} from './input.js';

import {editcomplete} from './check.js';

escribe('Editing data', () => {
    beforeEach(() => {
      localStorage.clear();
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    test('edit one data', () => {
        add("task1");
        add("task2");
        add("task3");
        edit(1,"clean the room");

     const data=JSON.parse(localStorage.getItem('lists'));
     expect(data[1].description).toBe("clean the room");
    });

    test('edit many data', () => {
        add("task1");
        add("task2");
        add("task3");
        edit(1,"clean the room");
        edit(0,"do homework");
        edit(2,"do exercise");

     const data=JSON.parse(localStorage.getItem('lists'));
     expect(data[1].description).toBe("clean the room");
     expect(data[0].description).toBe("do homework");
     expect(data[2].description).toBe("do exercise");
    });

});

