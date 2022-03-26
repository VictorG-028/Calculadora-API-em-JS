# Calculadora-Científica
Tarefa de SD - API REST de uma calculadora simples

## Exemplos de uso usando interface.html e requisição HTTP

![exemplo de soma](https://github.com/VictorG-028/Calculadora-Cientifica/blob/main/exemplo%20de%20soma.png)
![exemplo de potenciação](https://github.com/VictorG-028/Calculadora-Cientifica/blob/main/exemplo%20de%20potencia%C3%A7%C3%A3o.png)

## Como instalar e executar

```
⚠️ É preciso ter o NodeJS e NPM (e yarn se preferir) instalados para executar o projeto ⚠️
```

1. Copie os arquivos do projeto com `git clone` ou baixando o .zip para o seu computador
2. Abra um console na pasta do projeto e use o comando `npm start` ou `yarn start` para executar o projeto
3. A mensagem **Server is running on localhost:3333** e os testes de URL devem aparecer nesse terminal caso não haja erros

## Arquitetura do projeto
- server.js é o arquivo principal em que tudo se inicia, nele é instanciado o app com suporte do arquivo routes.js <br/>
- routes.js cria o mapeamento de recursos usando arquitetura REST, fornece o objeto router para ser usado no server.js e usa a calculadora.js como suporte <br/>
- calculadora.js implementa a classe calculadora e retorna JSON em todos os métodos contendo a resposta do cálculo <br/>
- interface.html é a GUI simples feita para permitir um usuário testar a calculadora e pode ser acessada na URL http://localhost:3333 <br/>
