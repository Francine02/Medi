export function TableContent({name, hour, description}) {
    return (
        <>
            <th scope="row" class="px-6 py-4 font-medium ">
                {name}
            </th>
            <td class="px-6 py-4">
                {hour}
            </td>
            <td class="px-6 py-4">
                {description}
            </td>

            <td class="px-6 py-4">
                <a href="#" class="font-medium text-[#8f5cd7] hover:underline">Edit</a>
            </td>
        </>
    )
}