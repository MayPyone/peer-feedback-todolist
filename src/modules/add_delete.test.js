import 'jest-localstorage-mock';
import {add} from './input.js';

  describe('Add data', () => {
    beforeEach(() => {
      localStorage.clear();
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });  
    test('Add data in index one of local storage', () => {
     add("task1");
     const data=JSON.parse(localStorage.getItem('lists'));
     expect(data[0].description).toBe("task1");
    });

    test('Add many data to local storage', () => {
        add("task1");
        add("task2");
        add("task3");
        const data=JSON.parse(localStorage.getItem('lists'));
        expect(data[0].description).toBe("task1");
        expect(data[0].completed).toBe(false);
        expect(data[0].index).toBe(1);
        expect(data[1].description).toBe("task2");
        expect(data[1].completed).toBe(false);
        expect(data[1].index).toBe(2);
        expect(data[2].description).toBe("task3");
        expect(data[2].completed).toBe(false);
        expect(data[2].index).toBe(3);
       });
});
describe('Delete data', () => {
    beforeEach(() => {
      localStorage.clear();
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    test('delete data in index one of local storage', () => {
     add("task1");
     add("task2");
     remove(0);
     const data=JSON.parse(localStorage.getItem('lists'));
     expect(data[0].description).toBe("task2");
     expect(data[0].completed).toBe(false);
     expect(data[0].index).toBe(1);
    });
    test('Delete many data to local storage', () => {
        add("task1");
        add("task2");
        add("task3");
        add("task4");
        remove(0);
        const data=JSON.parse(localStorage.getItem('lists'));
        expect(data[0].description).toBe("task2");
        expect(data[0].completed).toBe(false);
        expect(data[0].index).toBe(1);
        remove(1);
        const data2=JSON.parse(localStorage.getItem('lists'));
        expect(data2[1].description).toBe("task4");
        expect(data2[1].completed).toBe(false);
        expect(data2[1].index).toBe(2);
       });
});
