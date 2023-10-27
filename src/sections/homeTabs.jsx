"use client";

import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import useMovieModule from "../app/service/service";
import CategoryTabSection from "./categoryTabs";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Icon,
  MenuGroup,
} from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { FaFilter } from "react-icons/fa6";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HomeSection = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [genre, setGenre] = useState(undefined);
  const [page, setPage] = useState(1);
  const [tabIndex, setTabIndex] = useState(0);
  console.log(sortBy);

  const { useGetMovie, useGetAnime } = useMovieModule();
  const {
    data: dataMovie,
    isError: isErrorMovie,
    isFetching: isFetchingMovie,
    isLoading: isLoadingMovie,
    refetch: refetchMovie,
  } = useGetMovie(genre, sortBy, page);
  const {
    data: dataAnime,
    isError: isErrorAnime,
    isFetching: isFetchingAnime,
    isLoading: isLoadingAnime,
    refetch: refetchAnime,
  } = useGetAnime(sortBy, page);

  const tabNames = [
    "All",
    "Anime",
    "Action",
    "Adventure",
    "Science Fiction",
    "Comedy",
  ];
  const tabStyle =
    "text-[#EB507F] w-fit transition-all ease-in-out duration-300 text-center py-2 px-4 cursor-pointer border border-[#eb507f] rounded-full hover:bg-[#EB507F] hover:text-white";
  const activeTabStyle = "bg-[#EB507F] text-white";

  const itemsPerPage =
    tabIndex === 0 ? dataMovie?.results.length : dataAnime?.results.length;
  const pageCount = Math.ceil(
    tabIndex === 0
      ? (dataMovie?.total_results || 0) / itemsPerPage
      : (dataAnime?.total_results || 0) / itemsPerPage,
  );

  const handlePageChange = (selected) => {
    const newPage = selected + 1;
    setPage(newPage);
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
    refetchMovie();
    refetchAnime();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full">
      <Tabs defaultIndex={0} onSelect={(index) => setTabIndex(index)}>
        <h1 className="mb-3 text-[25px] font-bold">Browse By Category.</h1>
        <section className="mb-10 flex w-full items-end justify-between">
          <div className="hidden w-full lg:block">
            <TabList className={"flex items-center space-x-3 "}>
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
          </div>
          <div>
            <div className="relative z-[100]">
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<Icon as={FaFilter} color={"#EB507F"} />}
                  border={"1px solid #EB507F"}
                  variant="outline"
                />
                <MenuList border={"1px solid #EB507F"}>
                  <MenuGroup title="Filter">
                    <MenuItem
                      icon={<TriangleUpIcon color={"#EB507F"} />}
                      color={"#EB507F"}
                      onClick={() => handleSortChange("popularity.desc")}
                    >
                      Descending
                    </MenuItem>
                    <MenuItem
                      icon={<TriangleDownIcon color={"#EB507F"} />}
                      color={"#EB507F"}
                      onClick={() => handleSortChange("popularity.asc")}
                    >
                      Ascending
                    </MenuItem>
                  </MenuGroup>
                  {isMobileView && (
                    <MenuGroup title="Genre">
                      <TabList>
                        {tabNames.map((item, index) => (
                          <Tab
                            key={index}
                            className={`cursor-pointer px-6 py-3 text-[#EB507F] hover:bg-[#EB507F] hover:text-white`}
                            selectedClassName={activeTabStyle}
                          >
                            {item}
                          </Tab>
                        ))}
                      </TabList>
                    </MenuGroup>
                  )}
                </MenuList>
              </Menu>
            </div>
          </div>
        </section>

        <section className="w-full">
          <TabPanel>
            <CategoryTabSection
              data={dataMovie}
              as={"all"}
              isError={isErrorMovie}
              isFetcing={isFetchingMovie}
              isLoading={isLoadingMovie}
            />
            <div className="mt-10 flex w-full scale-125 justify-center">
              <ReactPaginate
                pageCount={pageCount}
                marginPagesDisplayed={1}
                breakLabel={"..."}
                pageRangeDisplayed={3}
                onPageChange={(selected) => handlePageChange(selected.selected)}
                containerClassName="pagination flex items-center space-x-5"
                pageClassName="mx-2 border border-[#eb507f] px-3 rounded-full"
                activeClassName="bg-[#eb507f] text-white px-3 rounded-full"
                previousLabel={<FaChevronLeft color="#eb507f" />}
                nextLabel={<FaChevronRight color="#eb507f" />}
                previousClassName="border p-2 rounded-full"
                nextClassName="border p-2 rounded-full"
                previousLinkClassName="text-blue-500"
                nextLinkClassName="text-blue-500"
              />
            </div>
          </TabPanel>
          <TabPanel>
            <CategoryTabSection
              data={dataAnime}
              as={"anime"}
              isError={isErrorAnime}
              isFetcing={isFetchingAnime}
              isLoading={isLoadingAnime}
            />
            <div className="mt-10 flex w-full scale-125 justify-center">
              <ReactPaginate
                pageCount={pageCount}
                marginPagesDisplayed={1}
                breakLabel={"..."}
                pageRangeDisplayed={3}
                onPageChange={(selected) => handlePageChange(selected.selected)}
                containerClassName="pagination flex items-center space-x-5"
                pageClassName="mx-2 border border-[#eb507f] px-3 rounded-full"
                activeClassName="bg-[#eb507f] text-white px-3 rounded-full"
                previousLabel={<FaChevronLeft color="#eb507f" />}
                nextLabel={<FaChevronRight color="#eb507f" />}
                previousClassName="border p-2 rounded-full"
                nextClassName="border p-2 rounded-full"
                previousLinkClassName="text-blue-500"
                nextLinkClassName="text-blue-500"
              />
            </div>
          </TabPanel>
          <TabPanel>3</TabPanel>
          <TabPanel>4</TabPanel>
          <TabPanel>5</TabPanel>
          <TabPanel>6</TabPanel>
        </section>
      </Tabs>
    </div>
  );
};

export default HomeSection;
