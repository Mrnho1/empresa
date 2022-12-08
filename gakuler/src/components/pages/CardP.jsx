import cards from "../modules/cadsP"
import '../styles/CardP.css'


function CardP(){
    
    return(
        <div>
            <section>
                <div className="container">
                    <h2>Trabalhamos com os seguintes produtos.</h2>
                    <div className="cards">
                       {
                        cards.map((card,i) => (
                        <div className="card" key={i}>
                            <img src={card.src} alt='alt'/>
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                            <button className="btn" >Solicite!</button>
                        </div>
                        ))
                    }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CardP