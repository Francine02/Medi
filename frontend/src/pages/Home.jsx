import { About } from "../components/home/About";
import { Card } from "../components/home/Card";
import { Footer } from "../components/home/Footer";
import { Hero } from "../components/home/Hero";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

export function Home() {
    useEffect(() => { //Para a configuração do ScrollReveal
        const sr = ScrollReveal()

        sr.reveal('.one', {
            duration: 950,
            origin: 'left',
            distance: '100px',
            easing: 'ease-in-out',
        })

        sr.reveal('.two', {
            duration: 950,
            origin: 'right',
            distance: '100px',
            easing: 'ease-in-out',
        })

    }, [])
    return (
        <div className="bg-[#f0e9dd] min-h-screen overflow-auto">
            <div className="one"><Hero /></div>
            <div className="two"><About /></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 px-7 sm:px-12 lg:px-20 gap-4 justify-items-center one">
                <Card img="https://img.icons8.com/?size=100&id=34998&format=png&color=000000" text="Adicionar e Gerenciar Medicamentos" />
                <Card img="https://img.icons8.com/?size=100&id=40401&format=png&color=000000" text="Receber Notificações por Email" />
                <Card img="https://img.icons8.com/?size=100&id=10082&format=png&color=000000" text="Visualizar Seu Cronograma de Medicamentos" />
            </div>

            <div className="two"><Footer /></div>
        </div>
    )
}
