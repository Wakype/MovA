import { axiosClient } from "@/libs/axios";
import { useQuery } from "@tanstack/react-query";

const useMovieModule = () => {
  const useGetAnime = (sortBy = "popularity.desc", page = 1) => {
    const getAnime = async () => {
      return axiosClient
        .get(
          `/discover/tv?language=en-US&page=${page}&with_genres=16&with_keywords=210024|287501&sort_by=${sortBy}`,
        )
        .then((res) => res.data);
    };
    const { data, isError, isFetching, isLoading, refetch, isPreviousData } =
      useQuery({
        queryKey: ["discover/tv", sortBy, page],
        queryFn: () => getAnime(),
        keepPreviousData: true,
      });

    return { data, isError, isFetching, isLoading, refetch, isPreviousData };
  };

  const useGetMovie = (genre, sortBy = "popularity.desc", page = 1) => {
    const getMovie = async () => {
      return axiosClient
        .get(
          `/discover/movie?language=en-US&page=${page}&sort_by=${sortBy}&with_genres=${genre}`,
        )
        .then((res) => res.data);
    };
    const { data, isError, isFetching, isLoading, refetch, isPreviousData } =
      useQuery({
        queryKey: ["discover/movie", sortBy, page],
        queryFn: () => getMovie(),
        keepPreviousData: true,
      });

    return { data, isError, isFetching, isLoading, refetch, isPreviousData };
  };

  const useGetDetailAnime = (series_id) => {
    const getDetail = async () => {
      return axiosClient.get(`/tv/${series_id}`).then((res) => res.data);
    };

    const { data, isError, isFetching, isLoading, refetch } = useQuery({
      queryKey: ["detail_anime", series_id],
      queryFn: () => getDetail(),
      enabled: !!series_id,
    });

    return { data, isError, isFetching, isLoading, refetch };
  };

  const useGetDetailMovie = (movie_id) => {
    const getDetail = async () => {
      return axiosClient.get(`/movie/${movie_id}`).then((res) => res.data);
    };

    const { data, isError, isFetching, isLoading, refetch } = useQuery({
      queryKey: ["detail_movie", movie_id],
      queryFn: () => getDetail(),
      enabled: !!movie_id,
    });

    return { data, isError, isFetching, isLoading, refetch };
  };
  const useMovieCredit = (movie_id) => {
    const getCredit = async () => {
      return axiosClient
        .get(`/movie/${movie_id}/credits`)
        .then((res) => res.data);
    };

    const { data, isError, isFetching, isLoading, refetch } = useQuery({
      queryKey: ["credit_movie", movie_id],
      queryFn: () => getCredit(),
      enabled: !!movie_id,
    });

    return { data, isError, isFetching, isLoading, refetch };
  };
  const useAnimeCredit = (series_id) => {
    const getCredit = async () => {
      return axiosClient
        .get(`/tv/${series_id}/aggregate_credits`)
        .then((res) => res.data);
    };

    const { data, isError, isFetching, isLoading, refetch } = useQuery({
      queryKey: ["anime_credit", series_id],
      queryFn: () => getCredit(),
      enabled: !!series_id,
    });

    return { data, isError, isFetching, isLoading, refetch };
  };

  return {
    useGetAnime,
    useGetDetailAnime,
    useGetMovie,
    useGetDetailMovie,
    useAnimeCredit,
    useMovieCredit,
  };
};

export default useMovieModule;
