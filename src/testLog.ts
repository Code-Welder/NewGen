/* eslint-disable node/no-unsupported-features/node-builtins */
import {TCourse, TPriceRange} from './types';
import isNullish from './utils/isNullish';

import filterCourses from './filterCourses';
import sortCourses from './sortCourses';

const courses: TCourse[] = [
  {name: 'Courses in England', prices: [0, 100]},
  {name: 'Courses in Germany', prices: [500, null]},
  {name: 'Courses in Italy', prices: [100, 200]},
  {name: 'Courses in Russia', prices: [null, 400]},
  {name: 'Courses in China', prices: [50, 250]},
  {name: 'Courses in USA', prices: [200, null]},
  {name: 'Courses in Kazakhstan', prices: [56, 324]},
  {name: 'Courses in France', prices: [null, null]},
];

const requiredRange1: TPriceRange = [null, 200];
const requiredRange2: TPriceRange = [100, 350];
const requiredRange3: TPriceRange = [200, null];

console.log('Initial courses array');
console.table(courses);

const testInputs = [requiredRange1, requiredRange2, requiredRange3];

testInputs.forEach((range, i) => {
  console.group('\x1b[36m%s\x1b[0m', '\n~~~\nTEST - ' + (i + 1) + '\n~~~');
  console.log('required range: ' + range.map(el => (el === null ? ' - ' : el)));

  const filtered = filterCourses(range, courses);
  console.table(filtered);

  if (!isNullish(filtered)) {
    console.log('sorted');
    console.table(sortCourses(filtered));
  }
  console.groupEnd();
});
