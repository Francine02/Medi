import { useMedicineContext } from "../../context/MedicineContext"

export function TableContent({ name, hour, description, medicine }) {
    const { openEdit } = useMedicineContext()

    const formatForDisplay = (dateTime) => { // Formatar data exibida
        const date = new Date(dateTime)
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
    }

    return (
        <>
            <th scope="row" className="px-6 py-4 font-medium max-w-32">
                {name}
            </th>
            <td className="px-6 py-4">
                {formatForDisplay(hour)}
            </td>
            <td className="px-6 py-4 max-w-24">
                {description}
            </td>

            <td className="px-6 py-4">
                <a onClick={() => openEdit(medicine)} className="font-medium text-[#8f5cd7] hover:underline cursor-pointer">Edit</a>
            </td>
        </>
    )
}