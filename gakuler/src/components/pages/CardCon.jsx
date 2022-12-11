import cards from "../modules/DataCon"
import '../styles/CardP.css'
import '../styles/tamanho.css'
import '../styles/Contact.css'


function CardCon(){
    
    return(
        <div>
            <section>
                <div className="container">
                    <h2>Endereço e Horários</h2>
                    <hr/>
                    <br/>
                    <div className="cards">
                       {
                        cards.map((card,i) => (
                        <div className="card" key={i}>
                            <img className="cartao" src={card.src} alt='alt' width={450}/>
                            {/* <h3>{card.title}</h3> */}
                            <p>{card.text}</p>
                            {/* <button className="btn" >Solicite!</button> */}
                        </div>
                        ))
                    }
                    </div>
                    <h2>Contatos</h2>
                    <div className="lista">
                    <ul>
                        <h3>Telefone</h3>
                        <li>(11) 97717-4483</li>
                    </ul>
                    <ul>
                        <h3>E-mail</h3>
                        <li>Contato.felix@gmail.com</li>
                    </ul>
                    <ul>
                        <h3>Redes-socias</h3>
                        <li>Facebook: Félix Refrigeraões</li>
                        <li>Instagram: Félix Refrigeraões</li>
                    </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CardCon