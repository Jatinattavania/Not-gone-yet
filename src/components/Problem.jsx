import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Problem() {
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
                    02 — The Gap
                </motion.span>

                {/* Section title - asymmetric, left-hung */}
                <motion.h2
                    className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-navy mb-12 md:mb-16 max-w-4xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    The Part of Recovery
                    <br />
                    <span className="text-golden">Your Doctors Aren't Teaching You</span>
                </motion.h2>

                {/* Pull quote - the emotional centerpiece */}
                <motion.div
                    className="relative ml-0 md:ml-24 lg:ml-36 max-w-3xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    {/* Golden quote mark */}
                    <span className="absolute -top-8 -left-4 md:-left-12 text-golden font-display text-8xl md:text-9xl leading-none opacity-30">
                        "
                    </span>

                    <blockquote className="pull-quote text-navy/90 relative">
                        <p>
                            You're doing everything right. Physical therapy, doctor's appointments, exercises.
                            But inside, you're grieving. You don't recognize yourself anymore. The person you
                            were feels gone, and everyone keeps telling you to{' '}
                            <span className="text-golden">'stay positive'</span> like that's supposed to
                            fix everything.
                        </p>
                    </blockquote>

                    {/* Subtle blue accent line */}
                    <div className="w-16 h-px bg-soft-blue mt-8" />
                </motion.div>
            </div>
        </section>
    )
}
