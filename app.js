const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/filmes', async (req, res) => {
  try {
    const api_url = 'https://movies-app.prakashsakari.repl.co/api/movies';
    const response = await axios.get(api_url);

    res.json(response.data);
  } catch (error) {
    console.error('Erro ao obter dados da API remota:', error.message);
    res.status(500).json({ error: 'Erro ao obter dados da API remota' });
  }
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
