import { motion, useInView } from 'framer-motion'
import { useRef, Suspense, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, useTexture } from '@react-three/drei'

const AMAZON_LINK = 'https://www.amazon.com.au/dp/B0GS9L9K14'

function CTABook() {
    const meshRef = useRef()
    const texture = useTexture('/book-cover.jpg')

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
        }
    })

    return (
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
            <mesh ref={meshRef}>
                <boxGeometry args={[2, 3, 0.2]} />
                <meshStandardMaterial map={texture} roughness={0.3} metalness={0.1} />
            </mesh>
        </Float>
    )
}

function BookVisual() {
    const [reducedMotion, setReducedMotion] = useState(false)

    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
        setReducedMotion(mq.matches)
        const handler = (e) => setReducedMotion(e.matches)
        mq.addEventListener('change', handler)
        return () => mq.removeEventListener('change', handler)
    }, [])

    if (reducedMotion) {
        return (
            <div className="flex items-center justify-center h-full">
                <img
                    src="/book-cover.jpg"
                    alt="Not Gone Yet book cover"
                    className="w-48 md:w-56 shadow-2xl"
                />
            </div>
        )
    }

    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 40 }} dpr={[1, 2]}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 3, 5]} intensity={0.8} color="#fbd457" />
            <pointLight position={[-2, -1, 3]} intensity={0.3} color="#76a9d4" />
            <Suspense fallback={null}>
                <CTABook />
            </Suspense>
        </Canvas>
    )
}

export default function FinalCTA() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section className="relative bg-deep-black py-24 md:py-36 overflow-hidden">
            {/* Editorial rule */}
            <div className="editorial-rule mb-16 md:mb-24" />

            <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
                {/* Section number */}
                <motion.span
                    className="section-number block mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    09 — Take Action
                </motion.span>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text + CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-cream mb-6 leading-tight">
                            You Survived Your Stroke.
                            <br />
                            <span className="text-golden">Now Discover What You're Truly Capable Of.</span>
                        </h2>

                        <p className="font-body text-cream/60 text-lg mb-10">
                            Available now on Amazon in Kindle and Paperback.
                        </p>

                        {/* CTA Button - large, prominent */}
                        <a
                            href={AMAZON_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-golden text-navy font-body font-bold uppercase tracking-wider
                         px-12 py-5 rounded text-base
                         transition-all duration-300
                         hover:bg-amber hover:shadow-xl hover:shadow-golden/40 hover:scale-105
                         focus:outline-none focus:ring-2 focus:ring-golden focus:ring-offset-2 focus:ring-offset-deep-black
                         animate-pulse hover:animate-none"
                        >
                            Buy on Amazon
                        </a>

                        <p className="font-body text-cream/40 text-sm mt-4">
                            Available in Kindle and Paperback
                        </p>
                    </motion.div>

                    {/* 3D Book */}
                    <motion.div
                        className="h-80 md:h-96"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <BookVisual />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
