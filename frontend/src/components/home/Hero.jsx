import bgImage from '../../assets/6.png';
import { Navbar } from './Navbar';

export function Hero() {
    return (
        <div className="bg-cover bg-no-repeat bg-center px-7 py-7 sm:px-12 lg:px-20" style={{ backgroundImage: `url(${bgImage})` }}>
            <Navbar/>
        </div>
    );
}
