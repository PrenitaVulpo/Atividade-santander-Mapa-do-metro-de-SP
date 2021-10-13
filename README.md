# Atividade-santander-Mapa-do-metro-de-SP

Questão #1

Mapa do metrô de SP

A malha metro/ferroviária da cidade de São Paulo é bastante extensa e complexa, tem uma considerável cobertura territorial e uma ótima vascularização (https://www.metrocptm.com.br/wp-content/uploads/2019/09/mapa-da-rede-metro-0120-abre.jpg).

O objetivo desse projeto é que você pegue os dados referente à todas as estações da cidade e as organize por linhas (linha verde, linha azul etc.). Algumas informações importantes:

Eu criei um server com um endpoint para vocês consultarem essas infos. O endpoint é o https://private-3923c4-santandercoders809.apiary-mock.com/stations. É sua responsabilidade ver o tipo de informação e estrutura que esse endpoint retorna.
A resposta esperada é um objeto, onde cada chave tem o nome de uma linha do metrô/trem e o valor dessa chave é um array contendo cada uma das estações, por exemplo:
{
"15-Prata": [
{
"_estacaoId": "356",
"_nome": "Camilo Haddad",
"_ordem": "15",
"_linhaId": "18",
"_linha": "15-Prata",
"_tipoId": "1",
"_tipo": "Metrô"
},
...
]
}
Sinta-se à vontade para usar Promises (com o .then()) ou async/await na resolução do exercício. A única coisa importante é utilizar high-order functions.
IMPORTANTE: O seu código deverá exibir a resposta esperada num console.log, independente da plataforma utilizada (Codepen, Codesandbox ...).

IMPORTANTE 2: Códigos contendo laços de repetição for não serão avaliados e receberão nota 4 automaticamente (ou proporcional a 4).
