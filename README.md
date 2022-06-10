## desafio-marques-consult

### API para consultar Obras de Arte com retorno no formato json.

#### Art Institute of Chicago API -> https://api.artic.edu/docs/

API que permite, aos desenvolvedores, explorar e integrar dados públicos de museus aos projetos deles.

### Funcionamento da API.

* #### Instruções
* * Baixar ou Clonar o repositório;
* * Subir para um serviço na nuvem ou localmente;
* * Renomer o arquivo .env.example para .env;
* * Criar um banco de dados, apenas nomeando-o, pois as tabelas são criadas automaticamente pelo framework Sequelize.
* * Preencher o arquivo .env com as credenciais da máquina e do banco de dados que será utilizado pela à API;
* * Executar o comando para criação da "migrate", por exemplo: npx sequelize db:migrate.

* #### Endpoints

 * * #### Exemplos
&nbsp; &nbsp;
- - - http://localhost:3040/artists
&nbsp; &nbsp;
![Primero Exemplo de consumo da API](https://github.com/ArmandoPaulinoNeto/desafio-marques-consult/blob/main/printscreens/example.png)
&nbsp; &nbsp;
- - - http://localhost:3040/artists/search/Michelangelo
&nbsp; &nbsp;
![Segundo Exemplo de consumo da API](https://github.com/ArmandoPaulinoNeto/desafio-marques-consult/blob/main/printscreens/example1.png)
&nbsp; &nbsp;
- - - http://localhost:3040/agents
&nbsp; &nbsp;
![Terceiro Exemplo de consumo da API](https://github.com/ArmandoPaulinoNeto/desafio-marques-consult/blob/main/printscreens/example2.png)
&nbsp; &nbsp;
- - - http://localhost:3040/agents/114063
&nbsp; &nbsp;
![Quarto Exemplo de consumo da API](https://github.com/ArmandoPaulinoNeto/desafio-marques-consult/blob/main/printscreens/exemple3.png)
&nbsp; &nbsp;
* * #### Exemplos de Erros de Requisição.
&nbsp; &nbsp;
- - - http://localhost:3040/agents/qualquer-coisa-diverente-de-um-id
&nbsp;
- - - http://localhost:3040/artists/qualquer-coisa-diverente-de-um-id
&nbsp; &nbsp;
![Exemplo de erro na requisição](https://github.com/ArmandoPaulinoNeto/desafio-marques-consult/blob/main/printscreens/error.png)
&nbsp; &nbsp;
### :computer: Tecnologias utilizadas:
<br/>
<code><img width="10%" src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg"></code>
<br/>
<br/>
<code><img width="10%" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg"></code>
<code><img width="10%" src="https://www.vectorlogo.zone/logos/nodemonio/nodemonio-ar21.svg"></code>
<code><img width="10%" src="https://www.vectorlogo.zone/logos/json/json-ar21.svg"></code>
<br/>
<br/>
<code><img width="10%" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"></code>
<code><img width="10%" src="https://www.vectorlogo.zone/logos/axios/axios-ar21.svg"></code>
<code><img width="10%" src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg"></code>
<code><img width="10%" src="https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-ar21.svg"></code>
<br/>
