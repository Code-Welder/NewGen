/* eslint-disable node/no-unsupported-features/node-builtins */
import isNullish from './utils/isNullish';

type TPrice = number | null;
type TPriceRange = [TPrice, TPrice];
type TCourse = {
  name: string;
  prices: TPriceRange;
};

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

function filterCourses(
  requiredRange: TPriceRange,
  courses: TCourse[]
): TCourse[] | null {
  const requiredLowerPrice = requiredRange[0];
  const requiredHigherPrice = requiredRange[1];

  if (isNullish(requiredLowerPrice) && isNullish(requiredHigherPrice)) {
    return courses;
  }

  const filtered = courses.filter(course => {
    const minPrice = course.prices[0];
    const maxPrice = course.prices[1];

    if (isNullish(minPrice) && isNullish(maxPrice)) return false;

    if (!isNullish(requiredLowerPrice) && !isNullish(requiredHigherPrice)) {
      if (!isNullish(minPrice)) {
        return minPrice < requiredLowerPrice;
      }

      if (!isNullish(maxPrice)) {
        return maxPrice > requiredHigherPrice;
      }
    }

    let isLowerPriceSetisfies = false;
    let isHigherPriceSetisfies = false;

    if (requiredLowerPrice !== null) {
      if (
        (!isNullish(minPrice) && requiredLowerPrice < minPrice) ||
        (!isNullish(maxPrice) && requiredLowerPrice > maxPrice)
      ) {
        return false;
      } else {
        isLowerPriceSetisfies = true;
      }
    } else {
      isLowerPriceSetisfies = true;
    }

    if (!isNullish(requiredHigherPrice)) {
      if (
        (!isNullish(minPrice) && requiredHigherPrice < minPrice) ||
        (!isNullish(maxPrice) && requiredHigherPrice > maxPrice)
      ) {
        return false;
      } else {
        isHigherPriceSetisfies = true;
      }
    } else {
      isHigherPriceSetisfies = true;
    }

    return isLowerPriceSetisfies && isHigherPriceSetisfies;
  });

  return filtered.length > 0 ? filtered : null;
}

// EXAMPLES

const requiredRange1: TPriceRange = [null, 200];
const requiredRange2: TPriceRange = [100, 350];
const requiredRange3: TPriceRange = [200, null];

const testInputs = [requiredRange1, requiredRange2, requiredRange3];

console.log('Initial courses array');
console.table(courses);

testInputs.forEach((range, i) => {
  console.group('\x1b[36m%s\x1b[0m', '\n~~~\nTEST - ' + i + '\n~~~');
  console.log('required range: ' + range.map(el => (el === null ? ' - ' : el)));

  const filtered = filterCourses(range, courses);
  console.table(filtered);

  if (!isNullish(filtered)) {
    console.log('sorted');
    console.table(sortCourses(filtered));
  }
  console.groupEnd();
});

// sorting

function sortCourses(courses: TCourse[]): TCourse[] {
  return courses.sort((prevCourse, nextCourse) => {
    const prevLowerPrice = prevCourse.prices[0];
    const prevHigherPrice = prevCourse.prices[1];
    const isPrevPricesNullish =
      isNullish(prevLowerPrice) && isNullish(prevHigherPrice);

    const nextLowerPrice = nextCourse.prices[0];
    const nextHigherPrice = nextCourse.prices[1];
    const isNextPricesNullish =
      isNullish(nextLowerPrice) && isNullish(nextHigherPrice);

    if (isPrevPricesNullish && isNextPricesNullish) return 0;

    if (!isNullish(prevLowerPrice) && isNullish(nextLowerPrice)) {
      return -1;
    }

    if (!isNullish(prevLowerPrice) && !isNullish(nextLowerPrice)) {
      return prevLowerPrice - nextLowerPrice;
    }

    if (!isNullish(prevHigherPrice) && !isNullish(nextHigherPrice)) {
      return prevHigherPrice - nextHigherPrice;
    }

    return 0;
  });
}
