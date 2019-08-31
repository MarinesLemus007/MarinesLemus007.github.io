import React from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-scroll';

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
                        <div className="nav-inicio">
                            <Link
                                activeClass="active"
                                to="start"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration= {500}
                                >
                            Inicio
                            </Link>
                        </div>
                        <div className="nav-proyectos">
                            <Link
                                activeClass="active"
                                to="proyect"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                            >
                            Proyectos
                            </Link>
                        </div>
                        <div className="nav-sobremi">
                            <Link
                                activeClass="active"
                                to="aboutme"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                            >
                            Sobre mí
                            </Link>
                        </div>
                        <div className="nav-contacto">
                            <Link
                                activeClass="active"
                                to="footer"
                                spy={true}
                                smooth={true}
                                offset={-350}
                                duration= {500}
                                >
                                Contacto
                            </Link>
                        </div>
                        <div className="nav-vercv">
                            <a className="nav-vercv-anchor"
                                href="https://drive.google.com/open?id=1U77ZJviTaTp2kpRFpazAleC9OW553uNg"
                                target="blank"
                            >
                                Ver CV
                            </a>
                        </div>
                        
                    </div>
                </nav>
            </header>
            </>
        )
    }
}
export default Nav;