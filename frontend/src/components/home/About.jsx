import bgImage from '../../assets/3.png';

export function About() {
    return (
        <div className="bg-cover bg-no-repeat bg-center px-7 sm:px-12 lg:px-20 mt-14 sm:mt-16 pb-16" style={{ backgroundImage: `url(${bgImage})` }}>
            <h1 className="text-[28px] sm:text-4xl text-center font-black mb-4 text-[#8f5cd7] sm:pt-10">Sobre</h1>
            <p className="text-lg lg:text-xl font-medium leading-relaxed">
                Na <span className='text-[#6b34b7] font-bold'>Medi</span>, acreditamos que a gestão de medicamentos pode ser tão simples quanto uma tarefa diária. Nosso objetivo é proporcionar uma solução intuitiva e eficiente para ajudá-lo a manter o controle da sua medicação e garantir que você nunca perca uma dose. Com a nossa plataforma, você pode:
            </p>
        </div>
    )
}
