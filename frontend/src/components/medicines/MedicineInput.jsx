export function MedicineInput() {
    return (
        <div className="flex flex-col space-y-5">
            <label className="block">
                <input
                    type="text"
                    placeholder="Nome do medicamento"
                    className="w-full sm:w-96 p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4c0192] mt-2"
                />
            </label>

            <label className="block">
                <textarea
                    placeholder="Descrição do medicamento"
                    className="w-full sm:w-96 p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4c0192] max-h-28 resize-none mt-2"
                    style={{ maxHeight: '112px' }}
                />
            </label>

            <label className="block">
                <span className="text-lg sm:text-xl text-gray-800">Data e horário</span>
                <input
                    type="datetime-local"
                    className="w-full sm:w-96 p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4c0192] mt-2"
                />
            </label>
        </div>
    );
}