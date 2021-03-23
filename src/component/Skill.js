import React from 'react';
import firebase from '../img/fb.png'

class Skill extends React.Component{
    render(){
        return (
            <>
            <section className="skill-seccion">
                <div className="skill-letter">
                    <div className="skill-word">
                        <h3>Habilidades</h3>
                    </div>
                </div>

                <div className="skill-skill">
                    <div className="skill-container">

                        <div className="skill-ico">
                            <i className="fab fa-js-square"></i>
                            <p className="blue-word">JAVASCRIPT</p>
                        </div>

                        <div className="skill-icotwo">
                            <i className="fab fa-html5"></i>
                            <p className="blue-word">HTML 5</p>
                        </div>

                        <div className="skill-icothree">
                            <i className="fab fa-css3-alt"></i>
                            <p className="blue-word">CSS 3</p>
                        </div>
                    
                        <div className="skill-icoseven">
                            <i className="fab fa-react"></i>
                            <p className="blue-word">REACT</p>
                        </div>

                        <div className="skill-icoseven">
                            <i className="fab fa-vuejs"></i>
                            <p className="blue-word">VUE</p>
                        </div>

                        <div className="skill-icofive">
                            <i className="fab fa-bootstrap"></i> 
                            <p className="blue-word">BOOTSTRAP</p>
                        </div>

                        <div className="skill-icosix">
                            <i className="fab fa-node-js"></i>
                            <p className="blue-word">NODE</p>
                        </div>

                        <div className="skill-icoseven">
                            <img src={firebase} className="fb-logo" alt="logo"/>
                            <p className="blue-word">FIREBASE</p>
                        </div>
                    
                        <div className="skill-icofour">
                            <i className="fab fa-git-alt"></i>
                            <p className="blue-word">GIT</p>
                        </div>

                        <div className="skill-icoseven">
                            <i className="fab fa-figma"></i>
                            <p className="blue-word">FIGMA</p>
                        </div>

                    </div>
                </div>
            </section>
            </>
        )
    }
}
export default Skill;