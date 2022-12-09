import React from "react";
import { IHeader } from "../../interfaces/IHeader";


const Header = (props: any) => {
    console.log("eu", props.title);


    return (
        <header title="{title}">
            <div className="flex flex-row items-center justify-center border-2 rounded-xl border-zinc-700">
                <div className="relative flex m-1 space-x-2 bg-red-200">
                    <h1>
                        refletiva
                    </h1>
                </div>
                    <div>
                        <h2>as melhores frases de reflexões</h2>
                    </div>
            </div>
        </header>
    )
}

export default Header;