import {TCourse, TPriceRange} from './types';
import isNullish from './utils/isNullish';

export default function filterCourses(
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

    if (!isNullish(requiredLowerPrice)) {
      if (!isNullish(maxPrice)) {
        return requiredLowerPrice <= maxPrice;
      }
    }

    if (!isNullish(requiredHigherPrice)) {
      if (!isNullish(minPrice)) {
        return requiredHigherPrice >= minPrice;
      }
    }

    return true;
  });

  return filtered.length > 0 ? filtered : null;
}
