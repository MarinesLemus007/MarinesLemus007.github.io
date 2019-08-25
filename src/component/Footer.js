import React from 'react';

class Footer extends React.Component{
    render(){
        return (
            <>
                 <section className="footer-seccion">
                    <div className="footer-container">
                    
                     
                            <div className="footer-word">
                                <h4>© 2019 MARINÉS LEMUS. HECHO EN CHILE</h4>
                            </div>
                        

                        <div className="footer-contact">
                           
                                <div className="footer-icotwo">
                                    <i className="fab fa-github"></i>
                                </div>

                                <div className="footer-ico">
                                    <i className="fab fa-linkedin"></i>
                                </div>
                    
                                <div className="footer-icothree">
                                    <i className="fas fa-envelope"></i>
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