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
                            <p>JAVASCRIPT</p>
                        </div>
                    

                   
                        <div className="skill-icotwo">
                            <i class="fab fa-html5"></i>
                            <p>HTML 5</p>
                        </div>
                    

                    
                        <div className="skill-icothree">
                            <i class="fab fa-css3-alt"></i>
                            <p>CSS 3</p>
                        </div>

                        <div className="skill-icofour">
                            <i class="fab fa-git-alt"></i>
                            <p>GIT</p>
                        </div>
                        
                        <div className="skill-icofive">
                            <i class="fab fa-bootstrap"></i> 
                            <p>BOOTSTRAP</p>
                        </div>
                        
                        <div className="skill-icosix">
                            <i class="fab fa-node-js"></i>
                            <p>NODE</p>
                        </div>

                        <div className="skill-icoseven">
                            <i class="fab fa-figma"></i>
                            <p>FIGMA</p>
                        </div>

                        <div className="skill-icoseven">
                            <i class="fab fa-react"></i>
                            <p>REACT</p>
                        </div>

                        <div className="skill-icoseven">
                            <img src={firebase} className="fb-logo" alt="logo"/>
                            <p>FIREBASE</p>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
export default Skill;