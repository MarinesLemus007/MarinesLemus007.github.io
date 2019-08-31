import React from 'react';

class Footer extends React.Component{
    render(){
        return (
            <>
                 <section className="footer-seccion" id="footer">
                    <div className="footer-container">
                    
                     
                            <div className="footer-word">
                                <h4>© 2019 MARINÉS LEMUS. HECHO EN CHILE</h4>
                            </div>
                        

                        <div className="footer-contact">
                           
                                <div className="footer-icotwo">
                                    <a 
                                        href="https://github.com/MarinesLemus007?tab=repositories"
                                        target="blank"
                                    >
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>

                                <div className="footer-ico">
                                    <a 
                                        href="https://www.linkedin.com/in/marines-lemus/"
                                        target="blank"
                                    >
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </div>
                    
                                <div className="footer-icothree">
                                    <a
                                        href="mailto:marineslemus@gmail.com"
                                        target="blank"
                                    >
                                        <i className="fas fa-envelope"></i>
                                    </a>
                                </div>

                            
                        </div>

                     
                            <div className="footer-wordtwo">
                                <h4>GRACIAS POR VISITARME / QUE TENGAS UN LINDO DÍA</h4>
                            </div>
                        
                    </div>
                </section>
            </>
        )
    }
}
export default Footer;