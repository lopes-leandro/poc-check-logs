# POC Validação de Fatura

Esta POC tem como objetivo apresentar os principais logs de erros encontrados ao validar o processamento de dados de um conjunto de faturas de cartão de crédito. Os dados apresentados são meramente ilustrativos.

## Development server

Existem duas formas de executar este projeto:

* A primeira é executar `npm start` no console, este comando executa a library __concurrently__, que possibilita a execução do servidor `json-server` e do aplicativo Angular.

* A segunda é executar os ambientes em consoles diferentes, executando o servidor __json-server__ com o comando `npm run server` e em um novo console executar o __Angular__ com o comando `npm run ng:start`
