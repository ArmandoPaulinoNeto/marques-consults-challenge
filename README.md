## Marques Consult's Challenge

### API for querying Works of Art with responses in JSON format.
#### Art Institute of Chicago API -> https://api.artic.edu/docs/
* An API that allows developers to explore and integrate public museum data into their projects.

### How the API Works
* #### Instructions:

* * Download or clone the repository;

* * Deploy it to a cloud service or run it locally;

* * Rename the file .env.example to .env;

* * Create a database (just name it — the tables are automatically created by the Sequelize framework);

* * Fill in the .env file with the machine and database credentials that will be used by the API;

* * Run the command to create the migration, for example: npx sequelize db:migrate.


* #### Endpoints
* * #### Examples
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
* * #### Examples of Request Errors.
&nbsp; &nbsp;
- - - http://localhost:3040/agents/qualquer-coisa-diverente-de-um-id
&nbsp;
- - - http://localhost:3040/artists/qualquer-coisa-diverente-de-um-id
&nbsp; &nbsp;
![Exemplo de erro na requisição](https://github.com/ArmandoPaulinoNeto/desafio-marques-consult/blob/main/printscreens/error.png)
&nbsp; &nbsp;
### :computer: Technologies Used:
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
