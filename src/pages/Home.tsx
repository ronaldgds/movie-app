'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '@/pages/home.module.css';
import MovieCard from '@/components/card/movieCard';
import SearchBar from '@/components/searchBar/searchBar';

interface Movie {
  id: number;
  name: string;
  genre: string;
  duration: string;
  img_link: string;
}

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const { data } = await axios.get<Movie[]>(
        'http://localhost:3001/api/filmes',
      );
      setMovies(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.heading_1}>Movies</h1>
      </header>
      <h1 id={styles.h1}>Search Bar</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main className={styles.main}>
        {loading ? (
          <p>Carregando...</p>
        ) : movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              name={movie.name}
              genre={movie.genre}
              duration={movie.duration}
              img_link={movie.img_link}
            />
          ))
        ) : (
          <p>
            {error ? 'Erro ao carregar os filmes.' : 'Nenhum filme encontrado.'}
          </p>
        )}
      </main>
    </div>
  );
}
