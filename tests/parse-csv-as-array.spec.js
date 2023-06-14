import { parseCSVAsArray } from '../src/parse-csv-as-array';

describe('Tests parseCSVAsArray function', () => {
  test.each([
    { input: 'x,y,z,1,2,3', expected: ['x', 'y', 'z', '1', '2', '3'] },
    { input: ' x , y , z , 1 , 2 , 3 ', expected: ['x', 'y', 'z', '1', '2', '3'] },
    { input: ['x', 'y', 'z', '1', '2', '3'], expected: ['x', 'y', 'z', '1', '2', '3'] },
  ])('it should return an array for the input: $input', ({ input, expected }) => {
    expect(parseCSVAsArray(input)).toStrictEqual(expected);
  });

  test.each(['', '   ', [], undefined, null, '', NaN, Infinity, 0, 0.5, 1, false, true, [], {}, () => {}])(
    'it should return an empty array for non CSV value: %p',
    (value) => {
      expect(parseCSVAsArray(value)).toStrictEqual([]);
    }
  );
});
