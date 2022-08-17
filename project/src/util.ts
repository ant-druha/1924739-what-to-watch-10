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
  // const secondsInt = parseInt(seconds, 10);
  const secondsInt = seconds;
  const hour = Math.floor(secondsInt / 3600).toString().padStart(2, '0');
  const minute = Math.floor((secondsInt - (+hour * 3600)) / 60).toString().padStart(2, '0');
  const second = secondsInt - (+hour * 3600) - +(+minute * 60).toString().padStart(2, '0');
  return `${hour}:${minute}:${second}`;
};
