# parse-csv-as-array

Parse [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) string as an array

## Installation

```bash
$ npm install @infotorg/parse-csv-as-array
```

## Usage

```javascript
import { parseCSVAsArray } from '@infotorg/parse-csv-as-array';
// or for node.js
// const { parseCSVAsArray } = require('@infotorg/parse-csv-as-array');

// Parse CSV string as an array
parseCSVAsArray('x,y,z,1,2,3'); // ['x', 'y', 'z', '1', '2', '3']
parseCSVAsArray(' x , y , z , 1 , 2 , 3 '); // ['x', 'y', 'z', '1', '2', '3']
parseCSVAsArray(['x', 'y', 'z', '1', '2', '3']); // ['x', 'y', 'z', '1', '2', '3']

// Unparsable content
parseCSVAsArray(''); // []
parseCSVAsArray(null); // []
parseCSVAsArray(undefined); // []
parseCSVAsArray({}); // []
parseCSVAsArray(1); // []
parseCSVAsArray(true); // []
parseCSVAsArray(false); // []
parseCSVAsArray(NaN); // []
parseCSVAsArray(Infinity); // []
```

## Tests

Tests are written with `jest`. They can be run with `npm`:

```
npm run test
```

##### LICENSE: MIT

##### AUTHOR: [Volodymyr Chumak](https://github.com/coderua)
