const { queryString } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Bernardo Kowalsky',
      profession: 'FullStack Developer',
    };

    expect(queryString(obj)).toBe(
      'name=Bernardo_Kowalsky&profession=FullStack_Developer',
    );
  });
});

// describe('Query string to object', () => {

// });
