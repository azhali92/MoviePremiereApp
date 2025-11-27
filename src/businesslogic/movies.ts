import { Genre } from '../types/Genre';
import { Movie } from '../types/Movie';

export const getAllMoviesAsPerFilter = (
  movieData: Movie[],
  searchTxt: string,
): Movie[] => {
  if (searchTxt == '') return movieData;
  return movieData.filter(item =>
    item.title.toLocaleLowerCase().includes(searchTxt.toLocaleLowerCase()),
  );
};

export const getGenreNamesOfMovie = (
  genres: Genre[],
  movieGenreIds: number[],
): string => {
  return movieGenreIds
    .map(id => genres.find(g => g.id === id)?.name)
    .filter((name): name is string => Boolean(name))
    .join(', ');
};

export const isMoviePartOfWatchList = (
  watchList: Movie[],
  movieId: number,
): boolean => {
  return watchList.some(movie => movie.id === movieId);
};
