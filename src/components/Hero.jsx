import { useRef, Suspense, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, useTexture } from '@react-three/drei'
import { motion } from 'framer-motion'

const AMAZON_LINK = 'https://www.amazon.com.au/dp/B0GS9L9K14'

function Book() {
    const meshRef = useRef()
    const texture = useTexture('./book-cover.jpg')
    const [hovered, setHovered] = useState(false)

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
        }
    })

    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh
                ref={meshRef}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                scale={hovered ? 1.05 : 1}
            >
                <boxGeometry args={[2.2, 3.2, 0.25]} />
                <meshStandardMaterial
                    map={texture}
                    roughness={0.3}
                    metalness={0.1}
                />
            </mesh>
        </Float>
    )
}

function Particles() {
    const particlesRef = useRef()
    const count = 50

    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 10
        positions[i + 1] = (Math.random() - 0.5) * 10
        positions[i + 2] = (Math.random() - 0.5) * 5
    }

    useFrame((state) => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
            particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01
        }
    })

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#fbd457"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    )
}

function BookScene() {
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
            <div className="w-full h-full flex items-center justify-center">
                <img
                    src="./book-cover.jpg"
                    alt="Not Gone Yet book cover"
                    className="w-64 md:w-80 shadow-2xl rounded"
                />
            </div>
        )
    }

    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            className="w-full h-full"
            dpr={[1, 2]}
        >
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} color="#fbd457" />
            <pointLight position={[-3, -3, 2]} intensity={0.3} color="#76a9d4" />
            <Suspense fallback={null}>
                <Book />
                <Particles />
                <Environment preset="city" />
            </Suspense>
        </Canvas>
    )
}

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-deep-black overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-deep-black/90 via-deep-black/50 to-transparent z-10" />

            {/* 3D Book - right side */}
            <div className="absolute right-0 top-0 w-full md:w-1/3 h-full opacity-80 md:opacity-100">
                <BookScene />
            </div>

            {/* Content - left side */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-0">
                <div className="max-w-2xl">
                    {/* Section marker */}
                    <motion.span
                        className="section-number block mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        01 — The Memoir
                    </motion.span>

                    {/* Main title */}
                    <motion.h1
                        className="font-display font-bold text-cream leading-none mb-6"
                        style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Not Gone
                        <br />
                        <span className="text-golden">Yet</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        className="font-display italic text-xl md:text-2xl text-cream/80 mb-4 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        What If Your Stroke Could Make You Stronger Than You Were Before?
                    </motion.p>

                    {/* Supporting text */}
                    <motion.p
                        className="font-body text-cream/60 text-lg mb-10 max-w-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        You Survived Your Stroke. Now, Here Is the Roadmap to Reclaiming Your Life and Finding Yourself Again.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                    >
                        <a
                            href={AMAZON_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-button text-center"
                        >
                            Buy on Amazon
                        </a>
                        <a
                            href="#story"
                            className="cta-button-dark text-center"
                        >
                            Read Bobby's Story
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <svg className="w-6 h-6 text-golden/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </motion.div>
        </section>
    )
}
