# test task

## install 
```
> git clone https://github.com/Code-Welder/NewGen.git
> cd NewGen
> npm i
> tsc
> node build/testLog.js
```

courses:
```js
┌─────────┬─────────────────────────┬────────────────┐
│ (index) │          name           │     prices     │
├─────────┼─────────────────────────┼────────────────┤
│    0    │  'Courses in England'   │   [ 0, 100 ]   │
│    1    │  'Courses in Germany'   │ [ 500, null ]  │
│    2    │   'Courses in Italy'    │  [ 100, 200 ]  │
│    3    │   'Courses in Russia'   │ [ null, 400 ]  │
│    4    │   'Courses in China'    │  [ 50, 250 ]   │
│    5    │    'Courses in USA'     │ [ 200, null ]  │
│    6    │ 'Courses in Kazakhstan' │  [ 56, 324 ]   │
│    7    │   'Courses in France'   │ [ null, null ] │
└─────────┴─────────────────────────┴────────────────┘
```

input range `[null, 200]`

output:
```js
  ┌─────────┬─────────────────────────┬───────────────┐
  │ (index) │          name           │    prices     │
  ├─────────┼─────────────────────────┼───────────────┤
  │    0    │   'Courses in Italy'    │ [ 100, 200 ]  │
  │    1    │   'Courses in Russia'   │ [ null, 400 ] │
  │    2    │   'Courses in China'    │  [ 50, 250 ]  │
  │    3    │    'Courses in USA'     │ [ 200, null ] │
  │    4    │ 'Courses in Kazakhstan' │  [ 56, 324 ]  │
  └─────────┴─────────────────────────┴───────────────┘
```
sorted: 
```js
  ┌─────────┬─────────────────────────┬───────────────┐
  │ (index) │          name           │    prices     │
  ├─────────┼─────────────────────────┼───────────────┤
  │    0    │   'Courses in China'    │  [ 50, 250 ]  │
  │    1    │ 'Courses in Kazakhstan' │  [ 56, 324 ]  │
  │    2    │   'Courses in Italy'    │ [ 100, 200 ]  │
  │    3    │    'Courses in USA'     │ [ 200, null ] │
  │    4    │   'Courses in Russia'   │ [ null, 400 ] │
  └─────────┴─────────────────────────┴───────────────┘
```