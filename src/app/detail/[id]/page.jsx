"use client";
import React from "react";
import dayjs from "dayjs";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import useMovieModule from "@/app/service/service";
import DetailImage from "@/sections/detailPage/detailImage";

const DetailSection = ({ title, children }) => (
  <div className="mb-12 w-full">
    <section className="mb-4 flex w-full items-center gap-x-0 lg:gap-x-5">
      <h1 className="min-w-fit rounded-full bg-[#EB507F] px-6 py-1 text-[20px] font-semibold text-white">
        {title}
      </h1>
      <div className="h-[1px] w-full bg-[#EB507F]"></div>
    </section>

    <section className="w-full">{children}</section>
  </div>
);

const formatNumberWithDots = (number) => {
  const numberString = number?.toString();
  const formattedNumber = numberString?.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return formattedNumber;
};

const formatDate = (dateString) => {
  return dayjs(dateString).format("D MMMM YYYY");
};

const Detail = ({ params }) => {
  const {
    useGetDetailAnime,
    useGetDetailMovie,
    useAnimeCredit,
    useMovieCredit,
  } = useMovieModule();
  const {
    data: dataAnime,
    isError: isErrorAnime,
    isFetching: isFetchingAnime,
    isLoading: isLoadingAnime,
    refetch: refetchAnime,
  } = useGetDetailAnime(params.id);
  const {
    data: dataMovie,
    isError: isErrorMovie,
    isFetching: isFetchingMovie,
    isLoading: isLoadingMovie,
    refetch: refetchMovie,
  } = useGetDetailMovie(params.id);
  const {
    data: dataAnimeCredit,
    isError: isErrorAnimeCredit,
    isFetching: isFetchingAnimeCredit,
    isLoading: isLoadingAnimeCredit,
    refetch: refetchAnimeCredit,
  } = useAnimeCredit(params.id);
  const {
    data: dataMovieCredit,
    isError: isErrorMovieCredit,
    isFetching: isFetchingMovieCredit,
    isLoading: isLoadingMovieCredit,
    refetch: refetchMovieCredit,
  } = useMovieCredit(params.id);

  const tabNames = ["Overview", "Characters", "Review"];
  const tabStyle =
    "text-[#EB507F] w-fit transition-all ease-in-out duration-300 text-center py-2 px-4 cursor-pointer border border-[#eb507f] rounded-full hover:bg-[#EB507F] hover:text-white";
  const activeTabStyle = "bg-[#EB507F] text-white";

  const movieInfo = [
    {
      title: "Release date",
      value: dataAnime?.name
        ? formatDate(dataAnime?.first_air_date)
        : formatDate(dataMovie?.release_date),
    },
    {
      title: "Revenue",
      value: dataAnime?.name
        ? "-"
        : `${formatNumberWithDots(dataMovie?.revenue)} USD`,
    },
    {
      title: "Budget",
      value: dataAnime?.name
        ? "-"
        : `${formatNumberWithDots(dataMovie?.budget)} USD`,
    },
    {
      title: "Status",
      value: dataAnime?.name ? dataAnime?.status : dataMovie?.status,
    },
    {
      title: "Genre",
      value: dataAnime?.name
        ? dataAnime?.genres.map((genre) => genre.name).join(", ")
        : dataMovie?.genres.map((genre) => genre.name).join(", "),
    },
  ];
  return (
    <>
      <div className="relative mb-5 h-screen w-full overflow-hidden">
        <DetailImage
          dataAnime={dataAnime}
          dataMovie={dataMovie}
          refetch={refetchAnime || refetchMovie}
          isFetching={isFetchingAnime || isFetchingMovie}
          isLoading={isLoadingAnime || isLoadingMovie}
          loading={isLoadingAnime || isLoadingMovie}
        />
      </div>

      <div className="w-full bg-white px-[50px] pb-[50px]">
        <Tabs>
          <div className="mb-20 flex w-full items-center justify-center space-x-5 lg:justify-start">
            <TabList className={"flex items-center space-x-3"}>
              {tabNames.map((item, index) => (
                <Tab
                  key={index}
                  className={tabStyle}
                  selectedClassName={activeTabStyle}
                >
                  {item}
                </Tab>
              ))}
            </TabList>
            <div className="h-[1px] w-full bg-[#EB507F] hidden lg:block"></div>
          </div>

          <div className="w-full">
            <TabPanel>
              <DetailSection title={"Synopsis"}>
                <p className="">{dataAnime?.overview || dataMovie?.overview}</p>
              </DetailSection>

              <DetailSection title={"Movie Info"}>
                <div className="space-y-4">
                  {movieInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between lg:justify-start"
                    >
                      <div className="w-3/5 text-left font-bold lg:w-1/4">
                        {info.title} :
                      </div>
                      <div className="w-2/5 text-right lg:w-3/4 lg:text-left">
                        {info.value}
                      </div>
                    </div>
                  ))}
                </div>
              </DetailSection>
            </TabPanel>

            <TabPanel>
              <DetailSection title={"Characters"}>
                <div className="grid w-full grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2">
                  {dataAnimeCredit?.cast.map((_, i) => _.roles)
                    ? dataAnimeCredit?.cast.map((_, i) => {
                        return (
                          <div
                            key={i}
                            className="flex flex-col rounded-lg border border-[#EB507F] px-7 py-3"
                          >
                            <div className="flex items-center">
                              <div className="w-2/4 text-left font-bold text-black lg:w-1/4">
                                Name :
                              </div>
                              <div className="w-2/4 text-left text-black lg:w-3/4">
                                {_.name}
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="w-2/4 text-left font-bold text-black lg:w-1/4">
                                Character :
                              </div>
                              <div className="w-2/4 text-left lg:w-3/4">
                                {_.roles.map((roles, i) => {
                                  return (
                                    <p key={i} className="text-black">
                                      <span className="font-bold">-</span>{" "}
                                      {roles.character}
                                    </p>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : dataMovieCredit?.cast.map((_, i) => {
                        return (
                          <div
                            key={i}
                            className="flex flex-col rounded-lg border border-[#EB507F] px-7 py-3"
                          >
                            <div className="flex items-center">
                              <div className="w-2/4 text-left font-bold text-black lg:w-1/4">
                                Name :
                              </div>
                              <div className="w-2/4 text-left text-black lg:w-3/4">
                                {_.name}
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="w-2/4 text-left font-bold text-black lg:w-1/4">
                                Character :
                              </div>
                              <div className="w-2/4 text-left lg:w-3/4">
                                <p key={i} className="text-black">
                                  {_.character}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                </div>
              </DetailSection>
            </TabPanel>

            <TabPanel>content 3</TabPanel>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default Detail;
