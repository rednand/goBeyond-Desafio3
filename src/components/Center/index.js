import React from "react";
import {infos} from '../infos';
import './center.css';
import {images} from '../img'



export default function Center(){
    return(
     <div className="infos_profile">
         <h1>{infos.nome}</h1>
         <span className="contact">{infos.whatsApp}</span>
         <span className="contact">{infos.fone}</span>
         <span className="contact">{infos.email}</span>
         <br/>
         <div>
        <button className="button">{infos.info1}</button>
        <button className="button">{infos.info2}</button>
        <button className="button">{infos.info3}</button>
        </div>
        <div className="livros">
                <div className="livros2">
                <img src={images.image_bottom} />
                <img src={images.image_bottom2} />
                </div>
        </div>

    
    </div>
    
    )
}

