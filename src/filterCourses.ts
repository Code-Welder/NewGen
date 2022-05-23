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
