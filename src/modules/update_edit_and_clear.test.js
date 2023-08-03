import 'jest-localstorage-mock';
import {edit} from './input.js';
describe('Editing data', () => {
    beforeEach(() => {
      localStorage.clear();
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    test('edit one data', () => {
     edit(true,1);
    });

});