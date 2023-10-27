import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = 'd9412cedb0c4f57eb84d26c5d40ed00b';
export const imageUrl = 'https://image.tmdb.org/t/p/original'

export const axiosClient = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
  },
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTQxMmNlZGIwYzRmNTdlYjg0ZDI2YzVkNDBlZDAwYiIsInN1YiI6IjY1MmU4MzU0YTgwMjM2MDExYWM3N2FlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TK05lqqxrZ7ry5BQ7635nvXltGeNPKpZlD90cfVMeC8',
  },
});
