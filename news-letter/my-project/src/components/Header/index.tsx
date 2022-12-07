import React from "react";

const Header = () => {
    return (
        <div>
            <div className='fixed z-30 flex flex-col justify-between w-screen lg:px-5 pl-5 pr-5 py-4 bg-creamNude md:fixed max-w-[1440px] shadow'>
                <div>
                <img src="../../img/imageCare.ico" alt="icon-care" />
                </div>
                <div>
                    <p className="text-black-/70">Meu Cabeçalho</p>
                </div>
            </div>
        </div>
    )
}

 export default Header;