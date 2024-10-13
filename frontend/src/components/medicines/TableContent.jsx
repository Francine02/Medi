export function TableContent({name, hour, description, id}) {
    return (
        <>
            <th scope="row" className="px-6 py-4 font-medium ">
                {name}
            </th>
            <td className="px-6 py-4">
                {hour}
            </td>
            <td className="px-6 py-4 max-w-24">
                {description}
            </td>

            <td className="px-6 py-4">
                <a href="#" className="font-medium text-[#8f5cd7] hover:underline">Edit</a>
            </td>
        </>
    )
}