"use client";
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useMovieModule from "../app/service/service";
import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "@/libs/axios";

const HomeSlider = () => {
  const { useGetMovie, useGetAnime } = useMovieModule();
  const {
    data: dataMovie,
    isError: isErrorMovie,
    isFetching: isFetchingMovie,
    isLoading: isLoadingMovie,
    refetch: refetchMovie,
  } = useGetMovie();
  const {
    data: dataAnime,
    isError: isErrorAnime,
    isFetching: isFetchingAnime,
    isLoading: isLoadingAnime,
    refetch: refetchAnime,
  } = useGetAnime();

  const shuffleArray = (array) => {
    if (!Array.isArray(array)) {
      return array; // Return non-arrays as is
    }

    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray;
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={3}
      autoplay={{
        pauseOnMouseEnter: false,
        delay: 3500,
        disableOnInteraction: false,
      }}
      // navigation
      loop={true}
      // pagination={{ clickable: true }}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        1000: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
        },
      }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {shuffleArray(dataAnime?.results)
        ?.slice(0, 25)
        .map((_, i) => {
          return (
            <SwiperSlide key={_.id}>
              <Link href={`/detail/${_.id}`}>
                <div className="w-full">
                  <Image
                    src={imageUrl + _.poster_path}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-full w-full bg-cover"
                    quality={100}
                    loading="eager"
                    style={{ objectFit: "cover", overflow: "hidden" }}
                    alt={_.title || _.name}
                  />
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default HomeSlider;
