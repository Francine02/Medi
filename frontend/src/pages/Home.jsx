import { About } from "../components/home/About";
import { Card } from "../components/home/Card";
import { Footer } from "../components/home/Footer";
import { Hero } from "../components/home/Hero";

export function Home() {
    return (
        <div className="bg-[#f0e9dd] min-h-screen">
            <Hero/>
            <About/>
            <div className="grid grid-cols-1 sm:grid-cols-3 px-7 sm:px-12 lg:px-20 gap-4 justify-items-center">
                <Card img="https://img.icons8.com/?size=100&id=34998&format=png&color=000000" text="Adicionar e Gerenciar Medicamentos"/>
                <Card img="https://img.icons8.com/?size=100&id=40401&format=png&color=000000" text="Receber Notificações por Email"/>
                <Card img="https://img.icons8.com/?size=100&id=10082&format=png&color=000000" text="Visualizar Seu Cronograma de Medicamentos"/>
            </div>

            <Footer/>
        </div>
    )
}
