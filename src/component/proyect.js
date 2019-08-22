import React from 'react';
import mdlinks from '../img/mdlinks.png';
import pokemon from '../img/pokemon.png';
import burger from '../img/burger.png';

class Proyect extends React.Component{
    render(){
        return (
            <>
            <section>
                <div className="proyect-proyect">
                    <div className="proyect-container">
                        <div className="proyect-img">
                            <img src={mdlinks} className="proyect-mdlink" alt=""/>
                        </div>  
                    </div>

                    <div className="proyect-containertwo">
                        <div className="proyect-img">
                            <img src={pokemon} className="proyect-pokemon" alt=""/>
                        </div>  
                    </div>

                    <div className="proyect-containerthree">
                        <div className="proyect-img">
                            <img src={burger} className="proyect-burger" alt=""/>
                        </div>  
                    </div>
                </div>
            </section>
            </>
        )
    }
}
export default Proyect;