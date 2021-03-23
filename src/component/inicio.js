import React from 'react';
// import compu from '../img/developer2.jpg';

class Start extends React.Component{
    render(){
        return (
            <>
            <section className="start-section" id="start">
                <div className="start-container">
                    <div className="start-img start-compu">
                        {/* <img src={compu} className="start-compu" alt=""/> */}
                    </div>
                    <div className="start-letter">
                        <div className="start-word">
                            <h1>
                                Marinés Lemus
                            </h1>
                        </div>
                        <div className="start-wordtwo">    
                            <h2>
                                Front-end developer 
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
export default Start;