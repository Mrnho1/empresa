import cards from "../modules/DataCon"
import '../styles/CardP.css'


function CardCon(){
    
    return(
        <div>
            <section>
                <div className="container">
                    <h2>Contate-nos</h2>
                    <hr/>
                    <br/>
                    <div className="cards">
                       {
                        cards.map((card,i) => (
                        <div className="card" key={i}>
                            <img src={card.src} alt='alt' width={450}/>
                            {/* <h3>{card.title}</h3> */}
                            <p>{card.text}</p>
                            {/* <button className="btn" >Solicite!</button> */}
                        </div>
                        ))
                    }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CardCon