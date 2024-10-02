import { TableContent } from "./TableContent";
import { TitlesTable } from "./TitlesTable";

export function Table() {
    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 2xl:mx-20">
            <table class="w-full text-sm lg:text-base text-left rtl:text-right ">
                <TitlesTable name="" hour="" description="" />
                <tbody>
                    <tr class=" bg-[#fffcf2] ">
                        <TableContent />
                    </tr>
                </tbody>
            </table>
        </div>

    )
}