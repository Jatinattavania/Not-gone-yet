import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Story() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="story" className="relative bg-deep-black py-24 md:py-36 overflow-hidden">
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
                    03 — The Origin
                </motion.span>

                {/* Two-column editorial layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Image - editorial photography style */}
                    <motion.div
                        className="lg:col-span-5"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative">
                            <img
                                src="/Picture1.jpg"
                                alt="Dr. Bobby Chaggar at a cafe, relaxed and smiling after recovery"
                                className="w-full aspect-[3/4] object-cover"
                            />
                            {/* Golden border accent */}
                            <div className="absolute -bottom-3 -right-3 w-full h-full border border-golden/40 -z-10" />
                            {/* Caption */}
                            <p className="mt-4 font-body text-xs uppercase tracking-widest text-cream/50">
                                Dr. Bobby Chaggar — Melbourne, Australia
                            </p>
                        </div>
                    </motion.div>

                    {/* Text content */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <motion.h2
                            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-cream mb-8 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            From Peak Health to
                            <br />
                            <span className="text-golden">Complete Paralysis</span>
                            <br />
                            in One Night
                        </motion.h2>

                        <motion.div
                            className="space-y-6 text-cream/80 font-body text-lg leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <p className="drop-cap">
                                On <span className="text-golden font-semibold">December 3, 2023</span>, Dr. Ramandeep 'Bobby'
                                Chaggar went from peak health to complete left-side paralysis. Successful
                                veterinary surgeon. Avid cyclist. Devoted father. All of it seemingly gone.
                            </p>

                            <p>
                                But <span className="text-golden font-semibold">seventeen days</span> into his
                                recovery, Bobby discovered something his doctors never mentioned: stroke recovery
                                isn't just about retraining your muscles. It's about rebuilding your mind,
                                reclaiming your identity, and rediscovering that you're capable of becoming even
                                stronger than before.
                            </p>
                        </motion.div>

                        {/* Decorative rule */}
                        <motion.div
                            className="w-24 h-px bg-golden/60 mt-10"
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
