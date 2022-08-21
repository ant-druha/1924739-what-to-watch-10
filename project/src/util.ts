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

export const formatToHHMMSS = (seconds: number) : string => {
  const SECONDS_IN_HOUR = 3600;
  const hour = Math.floor(seconds / SECONDS_IN_HOUR).toString().padStart(2, '0');
  const SECONDS_IN_MINUTE = 60;
  const minute = Math.floor((seconds - (+hour * SECONDS_IN_HOUR)) / SECONDS_IN_MINUTE).toString().padStart(2, '0');
  const second = seconds - (+hour * SECONDS_IN_HOUR) - +(+minute * SECONDS_IN_MINUTE).toString().padStart(2, '0');
  return `${hour}:${minute}:${second}`;
};
