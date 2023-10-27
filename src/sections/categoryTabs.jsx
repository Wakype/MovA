import Card from '@/components/Card';
import React from 'react';
import { TabPanel } from 'react-tabs';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Link from 'next/link';

const CategoryTabSection = ({ data, as, isError, isLoading, isFetcing }) => {
  return (
    <div className="w-full grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-x-[30px] lg:gap-y-7 gap-y-10">
      {isError ? (
        <p>Terjadi Kesalahan</p>
      ) : isFetcing || isLoading ? (
        Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="w-full overflow-hidden rounded-[10px]">
            <Skeleton
              height={400}
              count={3}
              baseColor="#EB507F"
              className="mb-5"
            />
          </div>
        ))
      ) : data?.total_results === 0 ? (
        <p>Tidak ada data</p>
      ) : (
        data?.results.map((_, i) => {
          return (
            <div key={_.id} className="w-full">
              <Link href={`detail/${_.id}`}>
                <Card
                  key={_.id}
                  title={_.title || _.name}
                  image={_.poster_path}
                  overview={_.overview}
                  popularity={_.popularity}
                />
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CategoryTabSection;
