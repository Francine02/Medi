import bgImage from '../assets/5.png';
import { Button } from '../components/medicines/Button';
import { MedicineConfig } from '../components/medicines/MedicineConfig';
import { Table } from '../components/medicines/Table';
import { useMedicineContext } from "../context/MedicineContext";

export function Medicines() {
    const { showConfig, closeConfig, isEditing } = useMedicineContext()

    return (
        <div className="px-7 sm:px-12 lg:px-20 2xl:px-48 py-10 bg-[#f0e9dd] bg-cover h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
            <h1 className="text-[28px] sm:text-4xl 2xl:text-5xl text-center font-black mb-4 text-[#8f5cd7] sm:pt-10">Medicamentos</h1>
            <Table />

            {showConfig && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <MedicineConfig
                        title={isEditing ? "Editar Medicamento" : "Novo Medicamento"}
                        onClose={closeConfig}
                    />
                </div>
            )}

            <Button />
        </div>
    )
}