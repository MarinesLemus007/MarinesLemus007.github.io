import React from 'react';
import mdlinks from '../img/mdlinks.png';
import pokemon from '../img/pokemon.png';
import burger from '../img/burger.png';
import rickandmorty from '../img/rickandmorty.png';

class Proyect extends React.Component{
    render(){
        return (
            <>
            <section className="proyect-seccion" id="proyect">
                <div className="proyect-letter">
                    <div className="proyect-word">
                        <h3>Proyectos</h3>
                    </div>
                </div>

                <div className="proyect-proyect">

                    <div className="proyect-container">
                        
                        <div className="proyect-img">
                            <img src={rickandmorty} className="proyect-mdlink" alt=""/>
                            <div className="middle">
                                <div className="text">
                                    <a className="text-deploy"
                                        href="https://vue-rickandmorty-7cc6d.web.app"
                                        target="blank"
                                    >
                                        Ir a Deploy
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="proyect-word-mdlink">
                            <div className="proyect-wordone">
                                <strong><h4>Rick and Morty</h4></strong>
                            </div>

                            <div className="proyect-wordtwo">
                                <p>
                                    Rick and Morty es una pequeña SPA creada con Vue.
                                    Posee cuatro vistas: home, characters, locations y episodes.
                                    Para su construcción se utilizó la api de Rick and Morty.
                                </p>
                            </div>

                            <div  className="proyect-wordthree">
                                <strong>   
                                    <p>
                                        VUE, JAVASCRIPT, FIREBASE, VUETIFY, ROUTER VUE, VUEX, AXIOS VUE
                                    </p>
                                </strong> 
                            </div>

                            <div  className="proyect-wordfour">
                                <a className="proyect-repository"
                                    href="https://github.com/MarinesLemus007/vue-rickandmortyapi"
                                    target="blank"
                                >
                                    Repositorio   
                                </a>
                            </div>
                        </div>   
                    </div>

                    <div className="proyect-containertwo">
                        <div className="proyect-img">
                            <img src={pokemon} className="proyect-pokemon" alt=""/>
                            <div className="middle-two">
                                <div className="text-two">
                                    <a className="text-deploy"
                                        href="https://marineslemus007.github.io/react-pokemonapi/"
                                        target="blank"
                                    >
                                        Ir a Deploy
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="proyect-word-mdlink">
                            <div className="proyect-wordone">
                                <strong><h4>POKÉMON</h4></strong>
                            </div>

                            <div className="proyect-wordtwo">
                                <p>
                                    Pokémon es una SPA creada con React. Posee dos vistas: home y detail.
                                    Para su construcción se utilizó la PokéApi con datos de todos los pokemones.
                                </p>
                            </div>

                            <div  className="proyect-wordthree">
                                <strong>
                                    <p>
                                        REACT, HOOKS, JAVASCRIPT, GH PAGES, MATERIAL UI, REACT ROUTER, REDUX y AXIOS 
                                    </p>
                                </strong>
                            </div>

                            <div  className="proyect-wordfour">
                                <a className="proyect-repository"
                                    href="https://github.com/MarinesLemus007/react-pokemonapi"
                                    target="blank"
                                >
                                    Repositorio    
                                </a>
                            </div>
                        </div>
                           
                    </div>

                    <div className="proyect-containerthree">
                        <div className="proyect-img">
                            <img src={mdlinks} className="proyect-mdlink" alt=""/>
                            <div className="middle">
                                <div className="text">
                                    <a className="text-deploy"
                                        href="https://www.npmjs.com/package/mlemus-md-links"
                                        target="blank"
                                    >
                                        Ir a Npm
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="proyect-word-mdlink">
                            <div className="proyect-wordone">
                                <strong><h4>MD LINKS</h4></strong>
                            </div>

                            <div className="proyect-wordtwo">
                                <p>
                                    Es una libreria creada para la lectura de archivos en formato Markdown.
                                    Busca archivos dentro de los directorios para luego analizarlos y
                                    entregar estatus y estadisticas simples sobre los links encontrados.
                                </p>
                            </div>

                            <div  className="proyect-wordthree">
                                <strong>   
                                    <p>
                                        JS, NODE y NPM
                                    </p>
                                </strong> 
                            </div>

                            <div  className="proyect-wordfour">
                                <a className="proyect-repository"
                                    href="https://github.com/MarinesLemus007/SCL009-md-links"
                                    target="blank"
                                >
                                    Repositorio   
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="proyect-containerfour">
                        <div className="proyect-img">
                            <img src={burger} className="proyect-burger" alt=""/>
                            <div className="middle-three">
                                <div className="text-three">
                                    <a className="text-deploy"
                                        href="https://cloiw.github.io/SCL009-Burger-Queen/"
                                        target="blank"
                                    >
                                        Ir a Deploy
                                    </a>                              
                                </div>
                            </div>
                        </div>

                        <div className="proyect-word-mdlink">
                            <div className="proyect-wordone">
                                <strong><h4>BURGER QUEEN </h4></strong>
                            </div>

                            <div className="proyect-wordtwo">
                                <p>
                                    Trabajo colaborativo. Esta aplicación nos presenta un menú digital donde
                                    el mesero podra ir agregando la orden del cliente, obtener el total,
                                    enviarla a cocina y finalmente entregarla cuando ésta esté lista.
                                </p>
                            </div>

                            <div  className="proyect-wordthree">
                                <strong>
                                    <p>
                                        REACT, HTML5 y CSS3
                                    </p>
                                </strong>
                            </div>

                            <div  className="proyect-wordfour">
                                <a className="proyect-repository"
                                    href="https://github.com/MarinesLemus007/SCL009-Burger-Queen"
                                    target="blank"
                                >
                                    Repositorio
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            </>
        )
    }
}
export default Proyect;