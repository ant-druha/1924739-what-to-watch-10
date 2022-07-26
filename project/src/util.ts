import {RATING_LEVEL_EXCELLENT, RATING_LEVEL_GOOD, RATING_LEVEL_VERY_GOOD} from './const';

export const getFilmRatingLevel = (rating: number): string => {
  if (rating < RATING_LEVEL_GOOD) {
    return 'Bad';
  }
  if (rating < RATING_LEVEL_VERY_GOOD) {
    return 'Good';
  }
  if (rating < RATING_LEVEL_EXCELLENT) {
    return 'Very good';
  }
  if (rating >= RATING_LEVEL_EXCELLENT) {
    return 'Excellent';
  }
  return '';
};
