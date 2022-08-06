export const getRandomInteger = (a = 0, b = 1): number => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomSlice = <T>(array: T[], n?: number): T[] =>
  [...array].sort(() => Math.random() - Math.random()).slice(0, n ? n : getRandomInteger(0, array.length - 1));
