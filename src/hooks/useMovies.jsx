'use client';
const { useEffect, useState } = require('react');
import axiosClient from '@/libs/axios';

const useGetMovies = () => {
  const [dataMovie, setDataMovie] = useState([]);

  useEffect(() => {
    axiosClient
      .get(`discover/movie`)
      .then((res) => setDataMovie(res.data.result));
  }, []);
};

export { useGetMovies };
