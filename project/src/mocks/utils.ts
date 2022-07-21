export const getRandomInteger = (a = 0, b = 1): number => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomFloat = (min: number, max: number, fractionalDigits = 1): number => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));

  return parseFloat((Math.random() * (upper - lower) + lower).toFixed(fractionalDigits));
};

export const createIdGenerator = (): () => number => {
  let id = 0;
  return function () {
    const currentId = id;
    id++;
    return currentId;
  };
};

export const getRandomValue = <T>(array: T[]): T => array[getRandomInteger(0, array.length - 1)];

export const getRandomSlice = <T>(array: T[], n?: number): T[] =>
  array.sort(() => Math.random() - Math.random()).slice(0, n ? n : getRandomInteger(0, array.length - 1));
