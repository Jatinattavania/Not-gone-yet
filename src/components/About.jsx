import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="about" className="relative bg-deep-black py-24 md:py-36 overflow-hidden">
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
                    07 — The Author
                </motion.span>

                {/* Layout: Image + Bio */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Image */}
                    <motion.div
                        className="lg:col-span-4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative">
                            <img
                                src={`${import.meta.env.BASE_URL}Picture4.jpg`}
                                alt="Dr. Bobby Chaggar — stroke survivor, veterinary surgeon, and recovery advocate"
                                className="w-full aspect-[3/4] object-cover rounded-sm"
                            />
                            {/* Blue accent border */}
                            <div className="absolute -bottom-3 -left-3 w-full h-full border border-soft-blue/30 -z-10 rounded-sm" />
                        </div>
                        {/* Location tag */}
                        <div className="flex items-center gap-2 mt-4">
                            <svg className="w-3.5 h-3.5 text-soft-blue" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-body text-xs uppercase tracking-widest text-cream/50">
                                Melbourne, Australia
                            </span>
                        </div>
                    </motion.div>

                    {/* Bio text */}
                    <div className="lg:col-span-8 flex flex-col justify-center">
                        <motion.h2
                            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-cream mb-3"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            About Dr. Bobby Chaggar
                        </motion.h2>

                        <motion.p
                            className="font-body text-sm uppercase tracking-widest text-soft-blue mb-8"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Stroke Survivor · Veterinary Surgeon · Recovery Advocate
                        </motion.p>

                        <motion.div
                            className="space-y-6 text-cream/80 font-body text-lg leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <p>
                                Dr Bobby chaggar practiced as a successful veterinary surgeon for 15 years before moving to Australia and worked in business development for 10 years before an ischaemic stroke paralysed the entire left side of his body in 2023
                            </p>

                            <p>
                                Today, Bobby walks <span className="text-golden font-semibold">6.5 kilometers daily</span>,
                                volunteers at his Sikh temple, and mentors stroke survivors through community
                                programs in Melbourne, Australia. He lives with his wife, son, and faithful dog
                                Petra, and is working toward his motorcycle license for that dream ride with his
                                son in the sidecar.
                            </p>
                        </motion.div>

                        {/* Decorative rule */}
                        <motion.div
                            className="w-24 h-px bg-soft-blue/40 mt-10"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: 96 } : {}}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
