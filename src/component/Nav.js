import React from 'react';
import logo from '../img/logo.png';

class Nav extends React.Component{
    render(){
        return (
            <>
            <header>
                <nav className="nav-nav">
                    <div className="nav-container">
                        <div className="nav-img">
                            <img src={logo} className="nav-logo" alt="logo"/>
                        </div>
                        <div className="nav-inicio">Inicio</div>
                        <div className="nav-proyectos">Proyectos</div>
                        <div className="nav-sobremi">Sobre mí</div>
                        <div className="nav-contacto">Contacto</div>
                        <div className="nav-vercv">Ver CV</div>
                    </div>
                </nav>
            </header>
            </>
        )
    }
}
export default Nav;