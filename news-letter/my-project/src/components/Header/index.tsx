import React from "react";
import { IHeader } from "../../interfaces/IHeader";
import{ AiOutlineSearch} from "react-icons/ai"


const Header = (props: any) => {
    return (
        <header className="fixed w-screen px-2 border-2 shadow bg-terracota w-70 border-terracota z-[999]">
            <div className="flex flex-row items-center">
                <div>
                    {/* <AiOutlineSearch /> */}
                </div>
                <div>
                    <img src="../../../ico/imageCare.ico" className="w-10 px-1" />
                </div>
                <div className="items-center justify-center">
                    <h1 className="items-center font-bold text-creamNude">
                        refletiva
                    </h1>
                </div>
                {/* <div>
                        <h2 className="text-creamNude">as melhores frases de reflexões</h2>
                    </div> */}
            </div>
        </header>
    )
}

export default Header;


















