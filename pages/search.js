import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/router";
import styles from "@/styles/Search.module.css";
import MovieList from "@/components/MovieList";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Head from "next/head";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  const [movies, setMovies] = useState([]);

  async function getMovies(query) {
    const res = await axios.get(`/movies?q=${query}`);
    const movies = res.data.results ?? [];

    setMovies(movies);
  }

  useEffect(() => {
    getMovies(q);
  }, [q]);

  return (
    <>
      <Head>
        <title>{q} 검색 결과 - watchit</title>
      </Head>
      <SearchForm initialValue={q} />
      <h2 className={styles.title}>
        <span className={styles.keyword}>{q}</span> 검색 결과
      </h2>
      <MovieList movies={movies} />
    </>
  );
}
