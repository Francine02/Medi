import { About } from "../components/home/About";
import { Hero } from "../components/home/Hero";

export function Home() {
    return (
        <div className="bg-[#f0e9dd] min-h-screen">
            <Hero/>
            <About/>
        </div>
    );
}
