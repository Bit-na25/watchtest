import SearchForm from "@/components/SearchForm";
import MovieList from "@/components/MovieList";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

export default function Home() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const res = await axios.get("/movies/");
    const movies = res.data.results ?? [];

    setMovies(movies);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <SearchForm />
      <MovieList className={styles.movieList} movies={movies} />
    </>
  );
}
