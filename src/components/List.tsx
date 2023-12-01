import React, { useState, useEffect } from 'react';

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
  // const data: Data = require('http://localhost:3001/api/filmes');

  const [data, setData] = useState<
    {
      id: string;
      name: string;
      genre: string;
      duration: number;
    }[]
  >([]);
  const filteredData = data.filter((el) => {
    if (props.input === '') {
      return el;
    } else {
      return (
        el.name.toLowerCase().includes(props.input.toLowerCase()) ||
        el.genre.toLowerCase().includes(props.input.toLowerCase()) ||
        el.duration.toString().includes(props.input.toLowerCase())
      );
    }
  });
  useEffect(() => {
    fetch('http://localhost:3001/api/filmes')
      .then(
        (res) =>
          res.json() as Promise<
            {
              id: string;
              name: string;
              genre: string;
              duration: number;
            }[]
          >,
      )
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <ul>
      {filteredData.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
