import React from "react";
import CardP from "./CardP";
import Navbar from "./Navbar";
import Slide from "./Slide";
import dataP from "../modules/dataP";
import Footer from "./Footer";

function Products(){
    return(
        <div>
            <Navbar/>
            <div className='alinhar'>
                <Slide images={dataP}/>
            </div>
            <br/>
            <hr/>
            <div>
                <CardP/>
            </div>
            <Footer/>
        </div>
    )
}

export default Products