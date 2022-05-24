# test task

## install 
```
> git clone https://github.com/Code-Welder/NewGen.git
> cd NewGen
> npm i
> tsc
> node build/testLog.js
```

example:

```js
const courses = [
  {name: 'Courses in England', prices: [0, 100]},
  {name: 'Courses in Germany', prices: [500, null]},
  {name: 'Courses in Italy', prices: [100, 200]},
  {name: 'Courses in Russia', prices: [null, 400]},
  {name: 'Courses in China', prices: [50, 250]},
  {name: 'Courses in USA', prices: [200, null]},
  {name: 'Courses in Kazakhstan', prices: [56, 324]},
  {name: 'Courses in France', prices: [null, null]},
]

const requiredRange = [null, 200]

const filtered = filterCourses(requiredRange, courses)

// [
//   { name: 'Courses in England', prices: [ 0, 100 ] },
//   { name: 'Courses in Italy', prices: [ 100, 200 ] },
//   { name: 'Courses in Russia', prices: [ null, 400 ] },
//   { name: 'Courses in China', prices: [ 50, 250 ] },
//   { name: 'Courses in USA', prices: [ 200, null ] },
//   { name: 'Courses in Kazakhstan', prices: [ 56, 324 ] }
// ]

const sorted = sortCourses(filtered)

// [
//   { name: 'Courses in England', prices: [ 0, 100 ] },
//   { name: 'Courses in China', prices: [ 50, 250 ] },
//   { name: 'Courses in Kazakhstan', prices: [ 56, 324 ] },
//   { name: 'Courses in Italy', prices: [ 100, 200 ] },
//   { name: 'Courses in USA', prices: [ 200, null ] },
//   { name: 'Courses in Russia', prices: [ null, 400 ] }
// ]
```