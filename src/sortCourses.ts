import {TCourse} from './types';
import isNullish from './utils/isNullish';

export default function sortCourses(courses: TCourse[]): TCourse[] {
  return [...courses].sort((prevCourse, nextCourse) => {
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
