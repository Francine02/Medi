import { MedicineInput } from "./MedicineInput";

export function MedicineConfig({title}) {
    return (
        <div className="bg-[#fefcf4] overflow-x-auto shadow-lg rounded-lg p-6 max-w-md relative border border-[#d0b3fb]">
            <button
                className="absolute top-3 right-5 text-gray-600 hover:text-gray-800 focus:outline-none"
                aria-label="Fechar"
                onClick={() => null}> {/* Arrumar aqui para abrir e fechar*/}
                &times;
            </button>

            <h2 className="text-lg sm:text-3xl font-semibold text-[#8453c9] mb-6 text-center">{title}</h2>

            <form className="flex flex-col space-y-6">
                <MedicineInput />

                <button
                    type="submit"
                    className="bg-[#8453c9] text-white font-medium py-3 rounded-lg hover:bg-[#a26eeb] focus:outline-none focus:ring-4 focus:ring-[#1ecebc] focus:ring-opacity-50 transition-all">
                    Salvar
                </button>
            </form>
        </div>
    )
}