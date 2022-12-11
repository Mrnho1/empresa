import React from "react";
import Navbar from "./Navbar";
import '../styles/Contatos.css'
import CardCon from "./CardCon";
import Footer from "./Footer";


function Contacts(){
    return(
        <div>
            <Navbar/>
            <section>
                <div className="container">
                {/* <h2>Contate-nos</h2> */}
                <div className="center">
                <CardCon/>
                </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Contacts