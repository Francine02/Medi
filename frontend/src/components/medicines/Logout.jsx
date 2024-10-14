import { useNavigate } from "react-router-dom";

export function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/*')
    }

    return (
        <div onClick={handleLogout} className="p-1 w-12 h-12 2xl:w-14 2xl:h-14 rounded-full hover:opacity-80 fixed top-4 right-6 sm:right-9 lg:right-16 2xl:right-28 2xl:bottom-9 cursor-pointer shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] group">
            <p className="absolute bg-black text-white p-1 rounded-lg text-sm opacity-85 hidden group-hover:block transition-all top-full mt-2">Sair</p>
            <img src="https://img.icons8.com/?size=100&id=24337&format=png&color=000000" alt="Sair"/>
        </div>
    )
}
