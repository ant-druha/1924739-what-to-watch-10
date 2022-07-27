import {createIdGenerator, getRandomFloat, getRandomInteger, getRandomSlice, getRandomValue} from './utils';
import {Film} from '../types/film';
import {generateComments} from './comment';

const generateFilmId = createIdGenerator();

const filmNames = [
  'Fantastic Beasts: The Crimes of Grindelwald',
  'Bohemian Rhapsody',
  'Macbeth',
  'Aviator',
  'We need to talk about Kevin',
  'What We Do in the Shadows',
  'Revenant',
  'Johnny English',
  'Shutter Island'
];

const posterImages = [
  'img/avatar.jpg',
  'img/aviator.jpg',
  'img/bohemian-rhapsody.jpg',
  'img/dardjeeling-limited.jpg',
  'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  'img/johnny-english.jpg',
  'img/macbeth.jpg',
  'img/midnight-special.jpg',
];

const bgImages = [
  'img/bg-the-grand-budapest-hotel.jpg',
  'img/war-of-the-worlds.jpg'
];

const bgColors = [
  '#fd612ead',
  'rgba(207,234,149,0.68)',
  'rgba(174,253,237,0.68)',
  'rgba(174,199,253,0.68)',
  'rgba(231,174,253,0.68)',
  'rgba(253,174,183,0.68)',
  'rgba(253,174,231,0.68)',
];

const videoLinks = [
  'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm'
];

const descriptions = [
  'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n' +
  '\n' +
  'Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus nisi, dapibus ultricies erat non, blandit consequat metus. Maecenas ut nunc a diam porta convallis. Ut magna orci, pharetra sed placerat ut, sodales non augue. Nunc at ex nec enim luctus lobortis. Sed suscipit libero ut orci mollis scelerisque. Nunc et maximus enim. Nam id porta libero. Fusce ut egestas nisi. Maecenas luctus a dolor ac tincidunt. Quisque at enim id nunc lobortis ullamcorper vel at orci. Duis tincidunt mollis turpis quis venenatis. Praesent tempor hendrerit sem, non porta quam auctor convallis. Phasellus porttitor malesuada vehicula. In dapibus dui et augue lobortis ultricies. Donec volutpat pretium nisl, tristique congue magna tincidunt sed. Nam imperdiet neque ac nunc semper fermentum.',
  'Sed convallis lectus consectetur, pellentesque sem a, venenatis leo. Nam mattis vestibulum felis quis sodales. Fusce dictum ornare tellus ut efficitur. Quisque tristique vestibulum dapibus. Phasellus ultrices ex vel nibh tempus, quis consequat sapien fringilla. Fusce mauris justo, pellentesque vel ipsum eu, sagittis volutpat leo. Praesent volutpat ex ac nisl tincidunt, vel viverra odio gravida.',
  'Sed convallis lectus consectetur, pellentesque sem a, venenatis leo. Nam mattis vestibulum felis quis sodales. Fusce dictum ornare tellus ut efficitur. Quisque tristique vestibulum dapibus. Phasellus ultrices ex vel nibh tempus, quis consequat sapien fringilla. Fusce mauris justo, pellentesque vel ipsum eu, sagittis volutpat leo. Praesent volutpat ex ac nisl tincidunt, vel viverra odio gravida.\n' +
  '\n' +
  'Suspendisse auctor eu lectus at lobortis. Integer rhoncus ultricies erat, ut bibendum est iaculis quis. Phasellus eget pretium ipsum, quis imperdiet mauris. Mauris tempor est eu pellentesque rutrum. '
];

const directors = [
  'Wes Anderson',
  'Tim Cook',
  'Jude Law',
  'Stiven Spilberg'
];

const actors = [
  'Bill Murray',
  'Edward Norton',
  'Jude Law',
  'Willem Dafoe',
  'Nicolas Cage',
  'Leonardo DiCaprio',
  'Kirsten Danst'
];

const genres = [
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers'
];

const generateFilm = (): Film => ({
  id: generateFilmId(),
  name: getRandomValue(filmNames),
  posterImage: getRandomValue(posterImages),
  previewImage: getRandomValue(posterImages),
  backgroundImage: getRandomValue(bgImages),
  backgroundColor: getRandomValue(bgColors),
  videoLink: getRandomValue(videoLinks),
  previewVideoLink: getRandomValue(videoLinks),
  description: getRandomValue(descriptions),
  rating: getRandomFloat(3, 10),
  scoresCount: getRandomInteger(1, 300),
  director: getRandomValue(directors),
  starring: getRandomSlice(actors),
  runTime: getRandomInteger(40, 150),
  genre: getRandomValue(genres),
  released: getRandomInteger(1935, 2022),
  isFavorite: Math.random() > 0.5
});

const generateFilms = (n: number): Film[] => Array.from({length: n}, () => generateFilm());

export const FILMS = generateFilms(8);
