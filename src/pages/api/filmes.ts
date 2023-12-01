import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
type Movie = {
  name: string;
  genre: string;
  duration: string;
  cast_name: string;
  year: string;
};
let cachedMovies: {
  data: Movie[];
} = { data: [] };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const filters = req.query;
    const name = filters?.searchTerm?.toString();
    const api_url = 'https://movies-app.prakashsakari.repl.co/api/movies';
    const response =
      cachedMovies.data.length > 0
        ? cachedMovies
        : await axios.get<Movie[]>(api_url);
    if (cachedMovies.data.length === 0) {
      cachedMovies = response;
    }
    if (name) {
      return res.json(
        response.data.filter((el) => {
          return (
            el.name.toLowerCase().includes(name.toLowerCase()) ||
            el.genre.toLowerCase().includes(name.toLowerCase()) ||
            el.duration.includes(name) ||
            el.cast_name.toLowerCase().includes(name.toLowerCase()) ||
            el.year === name
          );
        }),
      );
    }

    res.json(response.data);
  } catch (error) {
    console.error('Erro ao obter dados da API remota:', (error as any).message);
    res.status(500).json({ error: 'Erro ao obter dados da API remota' });
  }
}
