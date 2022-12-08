import React from 'react';
import Navbar from './Navbar';
import '../styles/Home.css';
import Slide from './Slide';
import data from '../modules/carouseldata';
import '../styles/Form.css'
import Card from './Card';
import Footer from './Footer';




function Home() {

    const enviado= () =>{
        window.alert("Especificações enviadas!")
    }

    return (
        <div>
            <Navbar />
           
                
            <div className='alinhar'>
                <Slide images={data}/>
            </div>
            <br/>
            <hr/>
            <div>
            <h2>Félix Refrigerações manutenção e compra de eletrodomésticos</h2>
            <p className='pp'>Serviço de reparação de pequenos eletrodomésticos aberto até às 19:00</p>
            </div>
            <main>
            <div className='card-post'>
            <div className="card-body-post">
            <form>
                <div className="fields">
                    <label>Nome</label>
                    <input type='text'/>
                </div>
                <div className="fields">
                    <label>E-mail</label>
                    <input type='email'/>
                </div>
                <div className="fields">
                    <label>Descrição</label>
                    <textarea type='text'></textarea>
                </div>
                <div className="btn-post">
                    <button type="submit" onClick={enviado}>Faça um Orçamento!</button>
                </div>
            </form>
        </div>                
            </div>
            </main>
            <hr/>
            <div className='cor-card-body'>
                <div className='card-line'>
                    <Card/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
