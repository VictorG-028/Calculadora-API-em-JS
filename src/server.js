import express from 'express';
import fetch from 'node-fetch';
import { router } from './routes.js';


const app = express();

app.use(express.json()); // Configura para permitir enviar resposta JSON
app.use(router);


app.listen(3333, main); // API REST na porta 3333 e chama main como callback
async function main() {
  console.log("Server is running on localhost:3333");

  async function testar(URL) {
    const response = await fetch(URL);
    const resultado = await response.json(); // formata para JSON
    const op = URL.substring(22).split('?')[0];
    console.log(op, resultado);
  }

  var URL;

  // Testando somar, subtrair, multiplicar e dividir
  URL = "http://localhost:3333/somar?num_1=2&num_2=2"; // 2+2 = 4
  await testar(URL);

  URL = "http://localhost:3333/subtrair?num_1=3&num_2=6"; // 3 - 6 = -3
  await testar(URL);

  URL = "http://localhost:3333/multiplicar?num_1=3&num_2=3"; // 3 * 3 = 9
  await testar(URL);

  URL = "http://localhost:3333/dividir?num_1=1&num_2=2"; // 1 / 2 = 0.5
  await testar(URL);

  // Testando sqrt, pow, sen, cos, tg
  URL = "http://localhost:3333/sqrt?num_1=2"; // sqrt(2) = 1.4142
  await testar(URL);

  URL = "http://localhost:3333/pow?num_1=2&num_2=10"; // 2^10 = 1024
  await testar(URL);

  URL = "http://localhost:3333/sen?num_1=0"; // sen(0) = 0
  await testar(URL);

  URL = "http://localhost:3333/cos?num_1=0"; // cos(0) = 1
  await testar(URL);

  URL = "http://localhost:3333/tg?num_1=0"; // tg(0) = 0
  await testar(URL);
}
