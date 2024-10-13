export function MedicineInput({ data, onChange }) {
    return (
        <div className="flex flex-col space-y-5">
            <label className="block">
                <input
                    value={data.name}
                    onChange={onChange}
                    name="name"
                    type="text"
                    placeholder="Nome do medicamento"
                    className="w-full sm:w-96 p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4c0192] mt-2"
                />
            </label>

            <label className="block">
                <input
                    value={data.emailToSend}
                    onChange={onChange}
                    name="emailToSend"
                    type="email"
                    placeholder="E-mail para enviar lembrete"
                    className="w-full sm:w-96 p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4c0192] mt-2"
                />
            </label>

            <label className="block">
                <textarea
                    value={data.description}
                    onChange={onChange}
                    name="description"
                    placeholder="Descrição do medicamento"
                    className="w-full sm:w-96 p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4c0192] max-h-28 resize-none mt-2"
                    style={{ maxHeight: '112px' }}
                />
            </label>

            <label className="block">
                <span className="text-lg sm:text-xl text-gray-800">Data e horário</span>
                <input
                    name="dateTime"
                    value={data.dateTime}
                    onChange={onChange}
                    type="datetime-local"
                    className="w-full sm:w-96 p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4c0192] mt-2"
                />
            </label>
        </div>
    );
}