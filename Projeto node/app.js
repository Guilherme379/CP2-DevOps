const express = require('express');
const app = express();
 
// Rota para a página inicial
app.get('/', (req, res) => {
  res.send('<h1>Implantação efetuada com sucesso</h1>');
});
 
// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});