import React from "react";
import "../styles/Navbar.css";
import {Component} from 'react';
import logo from '../img/ApenasOLogo.png'


class Navbar extends Component{

    state={clicked: false};
    handClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <header>
                <nav>
                    {/* logo clicável */}
                    <a href="/empresa"><img src={logo} alt="logo" height={80}/></a>
                    <div>
                        {/* botões */}
                        <ul id="navbar"
                        className={this.state.clicked ? "#navbar active": "#navbar"}>
                        <li><Link to='/empresa'>Home</Link></li>
                        <li><Link to='/company'>Sobre</Link></li>
              
                        <li><a href="/contacts">Contatos</a></li>
                        <li><a href="/products">Produtos</a></li>
                        </ul>
                    </div>
                    {/* divisão para criar o botão de navegação mobile */}
                    <div id='mobile' onClick={this.handClick}>
                    <i id='bar' className={this.state.clicked ? 'fas fa-times' : ' fas fa-bars'}></i>
                </div>
                </nav>
            </header>
        )
    }

}

export default Navbar
