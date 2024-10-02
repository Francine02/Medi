import bgImage from '../assets/5.png';
import { Table } from '../components/medicines/Table';

export function Medicines() {
    return (
        <div className="px-7 sm:px-12 lg:px-20 2xl:px-48 py-10 bg-[#f0e9dd] h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
            <h1 className="text-[28px] sm:text-4xl 2xl:text-5xl text-center font-black mb-4 text-[#8f5cd7] sm:pt-10">Medicamentos</h1>
            <Table />
        </div>
    )
}