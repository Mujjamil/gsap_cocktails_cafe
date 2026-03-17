import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
            <main>
                <Navbar></Navbar>
                <Hero></Hero>
                <div className="h-dvh bg-black"></div>
            </main>
    )
}
export default App;