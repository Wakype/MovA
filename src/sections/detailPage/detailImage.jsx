import { imageUrl } from "@/libs/axios";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DetailImage = ({
  dataAnime,
  dataMovie,
  isLoading,
  isFetching,
  loading,
  refetch,
}) => {
  return (
    <>
      <div className="h-full">
        <Image
          src={
            dataAnime?.poster_path
              ? imageUrl + dataAnime?.poster_path
              : imageUrl + dataMovie?.poster_path
          }
          priority
          width="0"
          height="0"
          sizes="100vw"
          className="h-full w-full bg-cover"
          quality={100}
          loading="eager"
          style={{
            objectFit: "cover",
            overflow: "hidden",
            objectPosition: "center center",
          }}
          alt={dataAnime?.name ? dataAnime?.name : dataMovie?.title}
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div
        className={`absolute inset-0 flex h-full w-full flex-col justify-start space-y-8 overflow-y-scroll p-5 px-[25px] pt-20 lg:top-0 lg:justify-center lg:px-[70px] lg:pb-0 lg:pt-0`}
      >
        <section className="flex flex-col">
          <h1 className="text-[30px] font-bold text-white lg:text-[40px]">
            {dataAnime?.name || dataMovie?.title}{" "}
            {dataAnime?.original_name ? `(${dataAnime?.original_name})` : ""}
          </h1>
          <p className="flex items-center py-1 text-[13px] text-white">
            <AiTwotoneStar className="mr-2" color="#EBCD00" />{" "}
            {dataAnime?.popularity || dataMovie?.popularity} Reviews
          </p>
        </section>

        <section className="w-full">
          <p className="w-full text-[13px] text-white lg:w-[50%] lg:text-[16px]">
            {dataAnime?.overview || dataMovie?.overview}
          </p>
        </section>

        <section className="flex w-full items-center space-x-3">
          <Button
            backgroundColor="#FE024E"
            color={"white"}
            _hover={{ backgroundColor: "#EB507F" }}
          >
            Watch Trailer
          </Button>
          <Button
            variant={"outline"}
            colorScheme="gray"
            color={"white"}
            _hover={{ color: "black", backgroundColor: "white" }}
          >
            Add To Watchlist
          </Button>
        </section>

        <div className="flex w-full justify-center pt-20 lg:pt-0 lg:justify-start">
          <div
            className="scrolldown relative"
            style={{ "--color": "#eb507f" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default DetailImage;
