import { GenreResponse } from '../types/GenreResponse';
import { PopularMoviesResponse } from '../types/PopularMoviesResponse';

export const getAllPopularMovies = async (
  page: number = 1,
): Promise<PopularMoviesResponse> => {
  const resp = await fetch(
    `${process.env.API_BASEURL}/movie/popular?language=en-US&page=${page}`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    },
  );
  const data: PopularMoviesResponse = await resp.json();
  return data;
};

export const getAllGenres = async (): Promise<GenreResponse> => {
  const resp = await fetch(
    `${process.env.API_BASEURL}/genre/movie/list?language=en`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    },
  );
  const data: GenreResponse = await resp.json();
  return data;
};
