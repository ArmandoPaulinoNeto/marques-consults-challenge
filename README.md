## desafio-marques-consult

### API para consultar Obras de Arte com retorno no formato json.

#### Art Institute of Chicago API -> https://api.artic.edu/docs/

API que permite, aos desenvolvedores, explorar e integrar dados públicos de museus aos projetos deles.

### Funcionamento da API desenvolvida.

* #### Endpoints

 * * #### Exemplos
&nbsp;
&nbsp;
- - - http://localhost:3040/artists
&nbsp;
&nbsp;
![Primero Exemplo de consumo da API](https://github.com/ArmandoPaulinoNeto/desafio-marques-consult/blob/main/printscreens/example.png)
&nbsp; &nbsp;
- - - http://localhost:3040/artists/search/Michelangelo
&nbsp; &nbsp;
![Segundo Exemplo de consumo da API](https://github.com/ArmandoPaulinoNeto/desafio-marques-consult/blob/main/printscreens/example1.png)
&nbsp; &nbsp;
- - - http://localhost:3040/agents
&nbsp; &nbsp;
![Terceiro Exemplo de consumo da API](https://github.com/ArmandoPaulinoNeto/desafio-marques-consult/blob/main/printscreens/example2.png)
&nbsp;
&nbsp;
- - - http://localhost:3040/agents/114063
&nbsp;
&nbsp;
![Quarto Exemplo de consumo da API](https://github.com/ArmandoPaulinoNeto/desafio-marques-consult/blob/main/printscreens/exemple3.png)
&nbsp;
&nbsp;
* * #### Exemplos de Erros de Requisição.
&nbsp;
&nbsp;
- - - http://localhost:3040/agents/qualquer-coisa-diverente-de-um-id
&nbsp;
- - - http://localhost:3040/artists/qualquer-coisa-diverente-de-um-id
&nbsp;
&nbsp;
![Exemplo de erro na requisição](https://github.com/ArmandoPaulinoNeto/desafio-marques-consult/blob/main/printscreens/error.png)
