import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Story from './components/Story'
import SoundFamiliar from './components/SoundFamiliar'
import WhatsInside from './components/WhatsInside'
import Transformation from './components/Transformation'
import About from './components/About'
import WhoIsFor from './components/WhoIsFor'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = (window.scrollY / totalHeight) * 100
            setScrollProgress(progress)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
            <Navigation />
            <main>
                <Hero />
                <Problem />
                <Story />
                <SoundFamiliar />
                <WhatsInside />
                <Transformation />
                <About />
                <WhoIsFor />
                <FinalCTA />
            </main>
            <Footer />
        </>
    )
}

export default App
