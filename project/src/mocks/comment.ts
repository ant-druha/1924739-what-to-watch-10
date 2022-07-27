import dayjs from 'dayjs';
import {Film, ReviewComment} from '../types/film';
import {createIdGenerator, getRandomInteger, getRandomValue} from './utils';

const generateCommentId = createIdGenerator();
const generateUserId = createIdGenerator();

const comments = [
  'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed films in years.',
  'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
  'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
  'Anderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
  'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
  'I didn\'t find it amusing, and while I can appreciate the creativity, it\'s an hour and 40 minutes I wish I could take back.',
];

const userNames = [
  'John Doe',
  'Alex Fishman',
  'John Goodman',
  'Jill Catcher',
  'Alice Finn'
];

export const generateComment = (): ReviewComment => ({
  comment: getRandomValue(comments),
  date: `${(dayjs().add(getRandomInteger(-180, -1)))}`,
  id: generateCommentId(),
  rating: getRandomInteger(3, 10),
  user : {
    id: generateUserId(),
    name: getRandomValue(userNames)
  }
});

export const generateComments = (films: Film[]): Map<number, ReviewComment[]> => {
  const result: Map<number, ReviewComment[]> = new Map<number, ReviewComment[]>();
  films.forEach((film) => {
    result.set(film.id, Array.from({length: getRandomInteger(2, 8)}, () => generateComment()));
  });
  return result;
};
