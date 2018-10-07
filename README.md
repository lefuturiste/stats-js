# Js statistics bundle

## Installation

`npm install --save turf-stater`

## Usage

```
let set = new Set([6, 6, 2, 9, 1, 1, 0]);
//or: let set = Set.fromFrequencySet([[6,2],[2,1],[9,1],[1,2],[0,1]);
set.getAmount(); //25
set.getLength(); //7
set.getAverage(); //~3.5714
```

## Tests

Test with jest:

`npm run test`
