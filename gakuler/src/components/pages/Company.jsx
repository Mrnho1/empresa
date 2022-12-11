import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import '../styles/Company.css';
import felix from '../img/felix.png';

function Company() {
    return (
        <div>
            <Navbar />

            <h2>Nossa História</h2>

            <section className="container-flx">
                <div className="areaImagem">
                    <img src={felix} alt="felix" width={200} />
                </div>
                <div className="areaTexto">
                    <p>
                        Tudo começou quando eu era criança e tive curiosidades
                        nesse setor, e desta maneira comecei a desmontar os
                        aparelhos de casa, e conforme fui crescendo despertou
                        meu interesse na área, e foi onde trabalhei por 10 anos
                        em uma empresa de assistência técnica e iniciei os
                        estudos para me qualificar no objetivo de desenvolver as
                        habilidades necessárias para poder prestar serviços
                        nessa especialidade. Então foi em 2007, que decidi
                        empreender e há 15 anos que estou trabalhando nesse
                        setor e me dedicando completamente aos meus clientes.
                    </p>
                </div>
                <br />
                <br />
                <div className="areaTexto">
                    <h2>Missão</h2>
                    <p>
                        Comercializar e prestar serviços de assistência técnica
                        em equipamentos eletrodomésticos de qualidade
                        diferenciada pela robustez e versatilidade, gerando
                        valores e benefícios para clientes e sociedade. Também
                        temos um compromisso firme com a sustentabilidade,
                        melhorando a eficácia de seu aparelho para economizar
                        custos e melhorar o tempo de vida de seu aparelho
                        eletrodoméstico.
                    </p>
                </div>

                <br />
                <h2>Visão</h2>
                <div className="areaTexto">
                    <p>
                        Comercializar e prestar serviços de assistência técnica
                        em equipamentos eletrodomésticos de qualidade
                        diferenciada pela robustez e versatilidade, gerando
                        valores e benefícios para clientes e sociedade. Também
                        temos um compromisso firme com a sustentabilidade,
                        melhorando a eficácia de seu aparelho para economizar
                        custos e melhorar o tempo de vida de seu aparelho
                        eletrodoméstico.
                    </p>
                </div>
                <br />
                <h2>Valores</h2>
                <div className="areaTexto">
                    <ul>
                    <li>Disciplina</li>
                    <li>Crescimento profissional</li>
                    <li>Dedicação ao trabalho</li>
                    <li>Qualidade em tudo que fazemos</li>
                    <li>Satisfação do cliente</li> 
                    <li>Transparência</li>
                    <li>Honestidade</li> 
                    <li>Integridade</li>
                    <li>Respeito às pessoas</li>
                </ul>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Company;
