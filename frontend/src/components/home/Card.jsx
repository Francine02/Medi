export function Card({img, text}) {
    return (
        <div className="bg-[#cddcd2] p-3 2xl:p-5 w-full sm:max-w-64 min-h-40 max-h-40 2xl:min-w-96 2xl:min-h-60 2xl:max-w-96 2xl:max-h-6 flex flex-col items-center justify-center">
            <img src={img} alt="icon" className="w-10 2xl:w-14 mx-auto" />
            <p className="font-medium pt-2 leading-relaxed text-base lg:text-lg text-center">{text}</p>
        </div>
    )
}