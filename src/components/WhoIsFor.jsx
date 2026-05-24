import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const audiences = [
    {
        title: 'Stroke Survivors',
        description: "You're ready to reclaim your life and find yourself again",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
    },
    {
        title: 'Caregivers',
        description: "You need hope that healing is possible and want to truly help",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
    },
    {
        title: 'Anyone',
        description: "You refuse to let a medical event define the rest of your story",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
]

export default function WhoIsFor() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section className="relative bg-cream py-24 md:py-36 overflow-hidden">
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
                    08 — For You
                </motion.span>

                {/* Section title */}
                <motion.h2
                    className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-navy mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    This Book Is <span className="text-golden">For You</span> If...
                </motion.h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {audiences.map((audience, index) => (
                        <motion.div
                            key={index}
                            className="relative p-8 md:p-10 border border-navy/20 rounded-sm bg-navy/5
                         hover:border-golden/60 hover:bg-navy/10 transition-all duration-500 group"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
                        >
                            {/* Icon */}
                            <div className="text-golden mb-6 group-hover:scale-110 transition-transform duration-300">
                                {audience.icon}
                            </div>

                            {/* Title */}
                            <h3 className="font-display font-bold text-xl md:text-2xl text-navy mb-3">
                                {audience.title}
                            </h3>

                            {/* Description */}
                            <p className="font-body text-navy/60 leading-relaxed">
                                {audience.description}
                            </p>

                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-navy/10 rounded-tr-sm" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
