const { store } = require('@root/store');

jest.mock('redux');

describe('Store index file tests', () => {
  it('should create store', () => {
    expect(store).toEqual({});
  });
});
