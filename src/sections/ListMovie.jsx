'use client';
import { useGetMovies } from '@/hooks/useMovies';
import React from 'react';
import Card from '../components/Card';

const ListMovie = () => {
  const data = useGetMovies();
  return (
    <>
      <div className="grid grid-cols-5">
        {data.results?.map((_, i) => {
          <Card image={_.poster_path} series={'anime'} title={_.title} key={_.id}/>
        })}
      </div>
    </>
  );
};

export default ListMovie;
