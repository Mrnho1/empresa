import logo from "../img/logo_comfundo.png"
import email from "../img/o-email (1).png"
import face from "../img/facebook (2).png"
import insta from "../img/instagram (2).png"
import "../styles/Footer.css"

function Footer(){
    return(
        <footer>
            <div className="cont">
                <ul>
                    <img className="logo" src={logo} alt='logo' width={300}/>
                    <p><small>Todos os direitos reservados.</small></p>
                    <div className="redes">
                    <a href="/gakuler/src/components/pages/Contacts.jsx"><img src={email} alt='email' width={35}/></a>
                    <a href="/gakuler/src/components/pages/Contacts.jsx"><img src={face} alt='face' width={35}/></a>
                    <a href="/gakuler/src/components/pages/Contacts.jsx"><img src={insta} alt='insta' width={35}/></a>
                    
                    
                    
                    </div>
                </ul>
                <ul>
                    <h3 className="logo">Produtos e Serviços</h3>
                    <li><a href="#">Máquinas</a></li>
                    <li><a href="#">Refrigeradores</a></li>
                    <li><a href="#">Fornos</a></li>
                    <li><a href="#">Orçamento</a></li>
                    
                </ul>
                <ul>
                    <h3 className="logo">Suporte</h3>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Sobre nós</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
                <ul></ul>
            </div>
        </footer>
    )
}

export default Footer