import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const AMAZON_LINK = 'https://www.amazon.com.au/dp/B0GS9L9K14'

const painPoints = [
    "You're tired of slow progress and wondering if you'll ever feel like yourself again",
    "You've lost your identity and don't know who you are post-stroke",
    "Depression, shame, or fear about your limitations keeps holding you back",
    "You need proof that life can still be joyful and meaningful",
    "You're a caregiver desperate to know how to truly help your loved one",
]

export default function SoundFamiliar() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section className="relative bg-cream py-24 md:py-36 overflow-hidden">
            {/* Subtle golden gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-golden/5 via-transparent to-amber/5" />

            {/* Editorial rule */}
            <div className="editorial-rule mb-16 md:mb-24" />

            <div className="relative max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
                {/* Section number */}
                <motion.span
                    className="section-number block mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    04 — Recognition
                </motion.span>

                {/* Section title */}
                <motion.h2
                    className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-navy mb-16 max-w-3xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    Does Any of This
                    <br />
                    <span className="text-golden">Sound Familiar?</span>
                </motion.h2>

                {/* Checklist - editorial sidebar callout style */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl ml-0 md:ml-12">
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            className="relative p-6 bg-cream border border-golden/30 rounded-sm shadow-sm hover:shadow-md hover:border-golden/60 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        >
                            {/* Checkmark */}
                            <div className="flex gap-4 items-start">
                                <svg className="w-5 h-5 mt-0.5 text-soft-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <p className="font-body text-navy/80 text-base leading-relaxed">
                                    {point}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Closing line + CTA */}
                <motion.div
                    className="mt-16 ml-0 md:ml-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <p className="font-display italic text-xl md:text-2xl text-navy/80 mb-8">
                        If you answered <span className="text-golden font-semibold not-italic">YES</span>, then
                        Not Gone Yet will show you the way forward.
                    </p>
                    <a
                        href={AMAZON_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                    >
                        Get Your Copy
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
