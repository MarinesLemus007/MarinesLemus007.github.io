import React from 'react';
import me from '../img/yo.jpg';

class Aboutme extends React.Component{
    render(){
        return (
            <>
            <section className="aboutme-seccion">
                <div className="aboutme-letter">
                    <div className="aboutme-word">
                        <h3>Sobre mí</h3>
                    </div>
                </div>

                <div className="aboutme-aboutme">
                    <div className="aboutme-container">
                        <div className="aboutme-img">
                            <img src={me} className="aboutme-me" alt=""/>
                        </div>
                    
                        <div className="aboutme-wordone">
                            <p>
                                Llegué a Santiago de Chile, hace un poco más de tres años, con ganas de reinventarme
                                y vi en la programación una opción novedosa e interesante que forma parte de los
                                nuevos empleos del futuro. Soy egresada de Laboratoria, donde aprendí a programar en
                                javascript y a trabajar colaborativamente mimetizando un ambiente laboral.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="aboutme-seccion-two">
                    
                    <div className="aboutme-letter-two">
                        <div className="aboutme-word-Two">
                            <h3>Habilidades</h3>
                        </div>
                    </div>

                    <div className="aboutme-icos">
                        <div className="aboutme-icos-content">
                            <img src={me} className="aboutme-me" alt=""/>
                        </div>
                    </div>

                </div>
            </section>
            </>
        )
    }
}
export default Aboutme;