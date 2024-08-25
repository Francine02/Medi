import { useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="flex justify-between items-center">
            <p className="text-xl sm:text-2xl py-1 font-black text-[#8f5cd7]">Medi</p>

            {/* Menu Desktop */}
            <div className="hidden sm:flex space-x-12 text-lg font-bold">
                <button className="hover:opacity-70">Entrar</button>
                <button className="bg-black hover:bg-opacity-80 text-white px-4 py-2">Cadastre-se</button>
            </div>

            {/* Menu Hambúrguer para telas menores */}
            <div className="sm:hidden flex items-center">
                <button onClick={toggleMenu} className="text-2xl text-[#8f5cd7] font-black">
                    &#9776;
                </button>
                {isOpen && (
                    <div className="absolute top-16 right-4 bg-[#f0e9dd] shadow-lg rounded-md flex flex-col space-y-4 p-4 z-10 text-lg font-bold">
                        <button className="hover:opacity-70">Entrar</button>
                        <button className="bg-black hover:bg-opacity-80 text-white px-4 py-2">Cadastre-se</button>
                    </div>
                )}
            </div>
        </div>
    )
}
