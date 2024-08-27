export function Input({ type, placeholder }) {
    return (
        <div class="relative h-11 w-full min-w-[200px]">
            <input placeholder={placeholder} type={type}
                class="peer h-full w-full border-b border-gray-500 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border-gray-500 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-0" />
            <label
                class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {placeholder}
            </label>
        </div>
    )
}