import React from "react"
import logo from '../img/logo_comfundo.png'
import '../styles/Footer.css'
import {TiSocialFacebook,TiSocialLinkedin,TiSocialGooglePlusCircular,TiSocialInstagram,TiCalendar,TiLocation,TiChevronRightOutline} from 'react-icons/ti';


function Footer(){
    return(
        <div>
            <hr/>
            <footer >
                <div className="cor">
                    <div className="container">
                        <div className="cards">
                            <div className="card2">
                            <img src={logo} alt='footer logo' height={150}></img>
                           <small><p><TiChevronRightOutline/>Copyright-todos os direitos reservados</p></small>
                            </div>
                            <div className="card2">
                                <ul className="tira">
                               
                               <li className="card2"><a href="/Contact">
                                    <TiSocialFacebook/>
                                </a>Conecte-se conosco</li>
                                <li className="card2">  <a href="/Contact">
                                    <TiSocialInstagram/>
                                </a> Nos siga nas redes sociais</li>
                                <li className="card2"><a  href="/Contact">
                                <TiSocialGooglePlusCircular/>
                                </a>Entre em contato</li>
                                
                                </ul>
                            </div>
                            <div className="card2">
                                <ul className="tira">
                               
                               <li className="card2"><a href="/Contact">
                                    <TiCalendar/>
                                </a>Agende uma visita</li>
                                <li className="card2">  <a href="/Contact">
                                    <TiLocation/>
                                </a>Venha nos visitar</li>
                                <li className="card2">  <a  href="/Contact">
                                    <TiSocialLinkedin/>
                                </a>Envie seu currículo</li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-box-discover">

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer