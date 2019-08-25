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
                            <h4>
                                Front end Developer egresada de Laboratoria. Con facilidad para el auto aprendizaje.
                                Responsable, ordenada y positiva. Me desenvuelvo bien tanto de manera colaborativa
                                como individualmente. Me interesa aplicar otros lenguajes de programación y continuar
                                mi formación como profesional en el area del desarrollo web. 
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
export default Aboutme;