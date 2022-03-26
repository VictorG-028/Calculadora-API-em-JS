import path from 'path';
import { fileURLToPath  } from 'url';
import { Router } from 'express';
import { Calculadora } from './Calculadora.js';


const router = Router(); // Cria o router

const calculadora = new Calculadora(); // Instancia calculadora

// Rota para retornar interface gráfia -> localhost:3333/
const __path = path.dirname(fileURLToPath(import.meta.url));
router.get("/", (_, res) => res.sendFile(path.join(__path, "/interface.html")));

// Cria as rotas URL contendo o método de requisição HTTP pedido, a URI, params
// e a função da calculadora que será executada
router.get("/somar"      , calculadora.somar);
router.get("/subtrair"   , calculadora.subtrair);
router.get("/multiplicar", calculadora.multiplicar);
router.get("/dividir"    , calculadora.dividir);

router.get("/sqrt", calculadora.sqrt);
router.get("/pow" , calculadora.pow);
router.get("/sen" , calculadora.sen);
router.get("/cos" , calculadora.cos);
router.get("/tg"  , calculadora.tg);


export { router };
