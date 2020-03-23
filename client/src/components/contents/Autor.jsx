import React from 'react'
import './Autor.css'
import imagemMarcelo from '../assets/imgs/marcelo.png'
import pdf from '../assets/cv/cv_marcelo_contin.pdf'

export default props =>
        <main>
            <div className="container">
                <h1 className="mt-5 titulo">Autor</h1>
                <div className="autor">
                    <img className="fotoMarcelo" src={imagemMarcelo} alt="Foto Marcelo Contin"/>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/continmarcelo/" 
                            className="socials linkedin" ><i className="fab fa-linkedin"></i>
                            <span className="texto"> Linkedin</span>
                        </a>
                        <a href={pdf} 
                            className="socials cv"><i className="far fa-file"></i>
                            <span className="texto"> Currículo</span>
                        </a>
                        <a href="https://github.com/milkfrog" 
                            className="socials github"><i className="fab fa-github"></i>
                            <span className="texto"> GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>