# Descrição do projeto
> Projeto desenvolvido por Marcelo Contin no processo seletivo do **Laboratório Bridge**.  
O mesmo consiste em criar uma aplicação web que através de um formulário simples, submeta um número e mostre a lista de divisores e se o número é primo.

# Tecnologias
A linguagem utilizada foi o JavaScript (tanto para back, como para front).  

## Tecnologias utilizadas no Front
* React
Foi utilizado como estrutura base para o front.
* React-dom, react-router, react-router-dom, react-dom  
Foram utilizadas a fim de manipulação da DOM e estabelecimento de rotas.  
* Axios  
Utilizado para requisições AJAX.
* Bootstrap, JQuery  
Utilizados para facilitar o estilo do front.

## Tecnologias utilizadas no Back
* Express
Utilizado para gerenciar a aplicação do servidor
* Axios
Utilizado para requisições AJAX.
* Body-parser
Utilizado para dar o decode de formulários recebidos.
* Cors
Usado para permitir a comunicação do front com o back.
* Json-server
Utilizado para simular um banco de dados, a fim de persistir os dados pesquisados anteriormente.

# Instalando bibliotecas (sistemas Linux)
Assumindo que você tenha instalado o node e o react.  
Acessar via terminal a pasta challenge/frontend e rodar:
````
    sudo npm i
````
Após finalizar acessar a pasta challenge/backend e rodar:
````
    sudo npm i
````
Finalizando basta levantar os ambientes a seguir.
## Back
Abrir 1 terminal e acessar a pasta challenge/backend e rodar o seguinte:
````
    sudo npm run db
````
Abrir outro terminal e acessar a pasta challenge/backend e rodar o seguinte:
````
    sudo npm run server
````
## Front
Abrir outro terminal e acessar a pasta challenge/frontend e rodar o seguinte:
````
    sudo npm start
````
A aplicação estará rodando em **localhost:4003**