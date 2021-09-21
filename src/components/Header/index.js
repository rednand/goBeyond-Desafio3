import React from "react";
import './header.css'
import {images} from '../img'


export default function Header(){
    return(
     <div className="header_background">
         <div className="header_main">
          <img src={images.header_image} />
        </div>
    </div>
    )
}