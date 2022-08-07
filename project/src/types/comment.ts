export type NewComment = {
  filmId: number
  comment: string,
  rating: number
};

export type FilmComment = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
    id: number
    name: string
  }}
