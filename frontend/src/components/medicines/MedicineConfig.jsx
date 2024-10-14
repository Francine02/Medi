import { useEffect, useState } from "react";
import { useMedicineContext } from "../../context/MedicineContext";
import { MedicineInput } from "./MedicineInput";
import { postMedicine, updateMedicine, deleteMedicine } from "../../utils/medicine";

export function MedicineConfig({ title }) {
    const { closeConfig, currentMedicine, isEditing } = useMedicineContext()
    const [medicineData, setMedicineData] = useState({
        name: "",
        description: "",
        dateTime: "",
        emailToSend: ""
    })

    useEffect(() => { // Carregar os dados do medicamento nos inputs quando se está editando
        if (isEditing && currentMedicine) {
            setMedicineData({
                name: currentMedicine.name || "",
                description: currentMedicine.description || "",
                dateTime: currentMedicine.dateTime || "",
                emailToSend: currentMedicine.emailToSend || ""
            })
        }
    }, [isEditing, currentMedicine])

    const handleChange = (e) => { // Manipular as mudanças nos campos
        const { name, value } = e.target
        setMedicineData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => { // Salvar medicamento
        e.preventDefault()
        const formattedMedicineData = {
            ...medicineData
        }

        try {
            if (isEditing && currentMedicine?.id) {
                await updateMedicine(currentMedicine.id, formattedMedicineData)
                location.reload()
            } else {
                await postMedicine(formattedMedicineData)
                location.reload()
            }
            closeConfig()
        } catch (error) {
            console.error("Erro ao salvar medicamento:", error)
        }
    }

    const handleDelete = async () => { // Excluir medicamento
        if (currentMedicine && isEditing) {
            try {
                await deleteMedicine(currentMedicine.id)
                closeConfig()
                location.reload()
            } catch (error) {
                console.error("Erro ao excluir medicamento:", error)
            }
        }
    }

    return (
        <div className="bg-[#fefcf4] overflow-x-auto shadow-lg rounded-lg p-6 max-w-md relative border border-[#d0b3fb]">
            <button
                className="absolute top-3 right-5 text-gray-600 hover:text-gray-800 focus:outline-none"
                aria-label="Fechar"
                onClick={closeConfig}>
                &times;
            </button>

            <h2 className="text-lg sm:text-3xl font-semibold text-[#8453c9] mb-6 text-center">{title}</h2>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                <MedicineInput
                    data={medicineData}
                    onChange={handleChange} />

                <button
                    type="submit"
                    className="bg-[#8453c9] text-white font-medium py-3 rounded-lg hover:bg-[#a26eeb] focus:outline-none focus:ring-4 focus:ring-[#1ecebc] focus:ring-opacity-50 transition-all">
                    Salvar
                </button>
                {isEditing && (
                    <button
                        type="button"
                        onClick={handleDelete}
                        className="bg-white text-[#8453c9] border border-[#d7bdfa] font-medium py-3 rounded-lg hover:bg-[#f0ebf9] focus:outline-none focus:ring-4 focus:ring-[#1ecebc] focus:ring-opacity-50 transition-all">
                        Excluir
                    </button>
                )}
            </form>
        </div>
    )
}