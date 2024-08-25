import bgImage from '../../assets/6.png';
import { Navbar } from './Navbar';

export function Hero() {
    return (
        <div className="bg-cover bg-no-repeat bg-center px-7 py-7 sm:px-12 lg:px-20" style={{ backgroundImage: `url(${bgImage})` }}>
            <Navbar/>
            
            <h1 className='text-center pt-36 sm:pt-32 lg:pt-40 font-black text-[30px] sm:text-4xl lg:text-5xl'>Organize Seus <span className='text-[#8f5cd7]'>Medicamentos</span> com Facilidade</h1>
            <h2 className='text-center pt-5 pb-48 lg:pb-56 font-bold text-base sm:text-lg lg:text-2xl tracking-wide'>Acesse, Gerencie e Receba Lembretes Inteligentes!</h2>
        </div>
    );
}
