import React from 'react';

interface Movie {
  id: number;
  name: string;
  genre: string;
  duration: string;
  img_link: string;
}

interface ListProps {
  input: string;
}

interface Data {
  filmes: Movie[];
}

export default function List(props: ListProps) {
  const data: Data = require('https://movies-app.prakashsakari.repl.co/api/movies');

  const filteredData = data.filmes.filter((el) => {
    if (props.input === '') {
      return el;
    } else {
      return (
        el.name.toLowerCase().includes(props.input.toLowerCase()) ||
        el.genre.toLowerCase().includes(props.input.toLowerCase()) ||
        el.duration.toLowerCase().includes(props.input.toLowerCase())
      );
    }
  });
  return (
    <ul>
      {filteredData.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
