const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let frutas = [];

app.get('/', (request, response) => {
  return response.json({frutas});

});

app.post('/frutas', (request, response) =>{
  const fruta = request.body;
  frutas.push(fruta);
  return response.send('frutas hmmmd deliciia');
});

app.put('/alterando', (request, response) => {
    const { id, nome, valor } = request.body;
    const frutaIndice = frutas.findIndex((fruta) => fruta.none === nome)
    
     frutas[frutaIndice] = {
       id: 0,
       nome: melancia,
       valor: 2
     }

     return response.json({frutas});

    })


    app.listen(port, () => {
      console.log(`Rodando na porta: ${port}`)
      })

