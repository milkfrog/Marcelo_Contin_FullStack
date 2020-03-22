import React from 'react'
import './Home.css'

export default props =>
    <React.Fragment>
        <main>
            <div className="container">
                <h1 className="mt-5">Solução</h1>
                <p>
                    Desenvolvido por <strong>Marcelo Pietro Grützmacher Contin</strong>.
                </p>
                    <ul>
                        <li>Para acessar a solução clicar no menu <i>Desafio</i>.</li>
                        <li>Para conhecer um pouco sobre o autor clicar no menu <i>Autor</i>.</li>
                    </ul> 
                <h3 >Definições do Desafio</h3>
                <p>
                    Crie um web app que através de um formulário simples, submeta um número e mostre a lista
                    de divisores desse número e se o mesmo é um número primo.
                </p>
                <ul>
                    <li>O sistema deve possuir uma tela com um campo de texto e botão.</li>
                    <li>Ao clicar no botão, os dados devem ser enviados ao backend para os cálculos.</li>
                    <li>O resultado deve ser exibido na tela.</li>
                    <li>Os cálculos dos divisores e do número primo devem ser executados pelo backend.</li>
                    <li>Estilize as páginas utilizando a ferramenta/biblioteca CSS de sua preferência. 
                        Nós julgaremos a usabilidade das telas e componentes.</li>
                    <li>Crie um README explicando as tecnologias e principais bibliotecas utilizadas em sua solução.
                        Adicione também diretivas de como executar seu projeto localmente.</li>
                </ul>
                <h3>Bônus</h3>
                <ul>
                    <li>Publique sua solução em um cloud provider (exemplo: Heroku) e nos forneça o link de acesso.</li>
                    <li>Salve um histórico dos números submetidos.</li>
                </ul>
            </div>
        </main>
    </React.Fragment>