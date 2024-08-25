export function Footer() {
    return (
        <div className="bg-[#8f5cd7] w-full mt-20 sm:mt-36 px-7 sm:px-12 lg:px-20 pt-10 text-white">
            <div className=" flex justify-between items-center">
                <p className="text-xl sm:text-2xl font-black ">Medi</p>

                <div className="flex space-x-5 sm:space-x-8">
                    <a href="https://github.com/Francine02" target="_blank">
                        <img src="https://img.icons8.com/?size=100&id=12598&format=png&color=FFFFFF" alt="github" className="w-8 hover:opacity-80" />
                    </a>
                    <a href="https://www.linkedin.com/in/francine-ccruz/" target="_blank">
                        <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF" alt="LinkedIn" className="w-8 hover:opacity-80" />
                    </a>
                    <a href="https://wa.me/5551986283397" target="_blank">
                        <img src="https://img.icons8.com/?size=100&id=16733&format=png&color=FFFFFF" alt="Whatsapp" className="w-8 hover:opacity-80" />
                    </a>
                </div>
            </div>
            <p className="pt-10 pb-3 text-sm">Desenvolvido por Francine Cruz.</p>
        </div>
    )
}