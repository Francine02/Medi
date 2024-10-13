import { useEffect, useState } from "react";
import { TableContent } from "./TableContent";
import { TitlesTable } from "./TitlesTable";
import { getMedicines } from "../../utils/medicine";

export function Table() {
    const [medicines, setMedicines] = useState([])

    useEffect(() => {
        const getMedi = async () => {
            const response = await getMedicines()

            if (response && response.data) {
                setMedicines(response.data)
            }
        }

        getMedi()
    }, [])

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 2xl:mx-20">
            <table className="w-full text-sm lg:text-base text-left rtl:text-right ">
                <TitlesTable name="" hour="" description="" />
                <tbody>
                    {medicines.map((medicine) => (
                        <tr key={medicine.id} className="bg-[#fffcf2]">
                            <TableContent
                                id={medicine.id}
                                name={medicine.name}
                                hour={medicine.dateTime}
                                description={medicine.description}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}