export function Card({img, text}) {
    return (
        <div className="bg-[#cddcd2] p-3 w-full sm:max-w-64 min-h-36 max-h-36">
            <img src={img} alt="icon" className="w-10 mx-auto" />
            <p className="font-medium pt-2 leading-relaxed text-base lg:text-lg text-center">{text}</p>
        </div>
    )
}