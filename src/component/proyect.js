import React from 'react';
import mdlinks from '../img/mdlinks.png';
import pokemon from '../img/pokemon.png';
import burger from '../img/burger.png';

class Proyect extends React.Component{
    render(){
        return (
            <>
            <section className="proyect-seccion">
                <div className="proyect-letter">
                    <div className="proyect-word">
                        <h3>Proyectos</h3>
                    </div>
                </div>

                <div className="proyect-proyect">
                    <div className="proyect-container">
                        <div className="proyect-img">
                            <img src={mdlinks} className="proyect-mdlink" alt=""/>
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
                                <p>
                                    JS, NODE y NPM
                                </p>
                            </div>

                            <div  className="proyect-wordfour">
                                <p>
                                    Repositorio
                                </p>
                                <p className="proyect-npm">
                                    Npm
                                </p>
                            </div>
                        </div>   
                    </div>

                    <div className="proyect-containertwo">
                        <div className="proyect-img">
                            <img src={pokemon} className="proyect-pokemon" alt=""/>
                        </div>

                        <div className="proyect-word-mdlink">
                            <div className="proyect-wordone">
                                <strong><h4>PÓKEDEX</h4></strong>
                            </div>

                            <div className="proyect-wordtwo">
                                <p>
                                    Producto creado pensando en los fanáticos de Pókemon Go!
                                    Puedes buscar a los pokemones según su tipo, ordenarlos
                                    de manera crecientes o decreciente y ver sus horas de
                                    salida para atraparlos a todos.
                                </p>
                            </div>

                            <div  className="proyect-wordthree">
                                <p>
                                    JS, HTML5 y CSS3
                                </p>
                            </div>

                            <div  className="proyect-wordfour">
                                <p>
                                    Repositorio
                                </p>
                                <p className="proyect-npm">
                                    Npm
                                </p>
                            </div>
                        </div>    
                    </div>

                    <div className="proyect-containerthree">
                        <div className="proyect-img">
                            <img src={burger} className="proyect-burger" alt=""/>
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
                                <p>
                                    REACT, HTML5 y CSS3
                                </p>
                            </div>

                            <div  className="proyect-wordfour">
                                <p>
                                    Repositorio
                                </p>
                                <p className="proyect-npm">
                                    Npm
                                </p>
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