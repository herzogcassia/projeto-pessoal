import React from "react";
import { IHeader } from "../../interfaces/IHeader";


const Header = (props: any)=> {
    console.log(props.title);
    
    
    return (
        <header title="{title}">
            <h1>
                    refletiva
            </h1>
        </header>
    )
}

export default Header;