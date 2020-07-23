const { store } = require('@root/store');

jest.mock('redux');

describe('Store index file', () => {
  it('should create store', () => {
    expect(store).toEqual({});
  });
});
