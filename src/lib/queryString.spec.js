const { queryString, parse } = require('./queryString');

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

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Bernardo Kowalsky',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Bernardo_Kowalsky&abilities=JS,TDD');
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Bernardo Kowalsky',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Bernardo_Kowalsky&profession=FullStack_Developer';

    expect(parse(qs)).toEqual({
      name: 'Bernardo Kowalsky',
      profession: 'FullStack Developer',
    });
  });

  it('should convert a query string of a single key-value pair to object', () => {
    const qs = 'name=Bernardo_Kowalsky';

    expect(parse(qs)).toEqual({
      name: 'Bernardo Kowalsky',
    });
  });

  it('should convert a query string to an object taking care of comma separated values', () => {
    const qs = 'name=Bernardo_Kowalsky&abilities=JS,TDD';

    expect(parse(qs)).toEqual({
      name: 'Bernardo Kowalsky',
      abilities: ['JS', 'TDD'],
    });
  });
});
