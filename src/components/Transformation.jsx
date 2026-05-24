import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function AnimatedNumber({ value, suffix = '', isInView }) {
    const [display, setDisplay] = useState(0)

    useEffect(() => {
        if (!isInView) return

        const numericValue = parseFloat(value)
        const duration = 2000
        const startTime = Date.now()

        const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(eased * numericValue)

            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }

        requestAnimationFrame(animate)
    }, [isInView, value])

    const isDecimal = value.toString().includes('.')
    const formatted = isDecimal ? display.toFixed(1) : Math.round(display)

    return (
        <span className="font-body font-bold text-amber" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
            {formatted}{suffix}
        </span>
    )
}

const stats = [
    { value: '6.5', suffix: ' km', label: 'Walked Daily' },
    { value: '17', suffix: '', label: 'Days to Breakthrough' },
    { value: '1', suffix: '', label: 'Dream Achieved ✓' },
]

export default function Transformation() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section className="relative bg-cream py-24 md:py-36 overflow-hidden">
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
                    06 — The Proof
                </motion.span>

                {/* Section title */}
                <motion.h2
                    className="font-display font-bold text-4xl md:text-5xl lg:text-7xl text-navy mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    From Wheelchair to
                    <br />
                    <span className="text-golden">Motorcycle</span>
                </motion.h2>

                {/* Stats - large editorial data visualization */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center md:text-left"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
                        >
                            <AnimatedNumber
                                value={stat.value}
                                suffix={stat.suffix}
                                isInView={isInView}
                            />
                            <p className="font-body text-xs uppercase tracking-widest text-navy/50 mt-2">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* The image - editorial full-bleed style */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="relative overflow-hidden rounded-sm">
                        <img
                            src="/Picture2.jpg"
                            alt="Dr. Bobby Chaggar on a motorcycle with his son in the sidecar — the dream realized"
                            className="w-full max-h-[600px] object-cover"
                        />
                    </div>

                    {/* Caption */}
                    <p className="font-body text-xs uppercase tracking-widest text-navy/40 mt-4">
                        The dream realized — Bobby and his son on the motorcycle
                    </p>
                </motion.div>

                {/* Closing quote */}
                <motion.blockquote
                    className="mt-16 md:mt-24 max-w-3xl ml-0 md:ml-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <span className="text-golden text-6xl font-display leading-none opacity-40">"</span>
                    <p className="font-display italic text-xl md:text-2xl lg:text-3xl text-navy/90 leading-relaxed -mt-6">
                        Bobby wrote Not Gone Yet because stroke victims aren't gone. They're standing at the
                        threshold of discovering strength, compassion, and purpose they never knew they possessed.
                    </p>
                    <div className="w-16 h-px bg-golden/40 mt-8" />
                </motion.blockquote>
            </div>
        </section>
    )
}
