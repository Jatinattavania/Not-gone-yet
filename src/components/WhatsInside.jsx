import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const AMAZON_LINK = 'https://www.amazon.com.au/dp/B0GS9L9K14'

const learnings = [
    {
        icon: '◆',
        text: 'The "Dynamic Recovery" framework — replacing "getting back to normal" with becoming stronger, more compassionate, and more purposeful',
    },
    {
        icon: '◆',
        text: 'Why small victories matter more than big goals — how celebrating putting on your shoes creates unstoppable momentum',
    },
    {
        icon: '◆',
        text: 'The "bank of memories" technique — using past passions and experiences to fuel present-day progress',
    },
    {
        icon: '◆',
        text: 'How acceptance accelerates healing (not resignation, but peace that lets you move forward)',
    },
    {
        icon: '◆',
        text: 'The daily affirmation practice that took Bobby from wheelchair-bound to walking 6.5km daily',
    },
    {
        icon: '◆',
        text: 'How to structure your day for maximum recovery — Bobby\'s complete exercise routine',
    },
    {
        icon: '◆',
        text: 'The truth about depression and isolation after stroke, plus practical strategies that work',
    },
    {
        icon: '◆',
        text: 'How to build your support network even if family isn\'t nearby',
    },
]

const bonuses = [
    'Real stories from Bobby\'s sister and wife about caregivers\' experiences',
    'The honest truth about setbacks, dark moments, and the mask Bobby wore',
    'Specific guidance on TENS machines, clinical trials, rehab facilities, and support programs',
    'Proof that you can tie your turban again, play with your kids, and ride your motorcycle again',
]

export default function WhatsInside() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="whats-inside" className="relative bg-deep-black py-24 md:py-36 overflow-hidden">
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
                    05 — The Contents
                </motion.span>

                {/* Section title */}
                <motion.h2
                    className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-cream mb-6 max-w-4xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    What You'll Discover in
                    <br />
                    <span className="text-golden">Not Gone Yet</span>
                </motion.h2>

                <motion.p
                    className="font-body text-cream/70 text-lg mb-16 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    This isn't another clinical manual. This is the complete system for transforming
                    your recovery from an exhausting slog into a journey of rediscovery.
                </motion.p>

                {/* Two-column grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Main learnings */}
                    <div className="lg:col-span-7">
                        <motion.h3
                            className="font-body font-semibold text-sm uppercase tracking-widest text-soft-blue mb-8"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            You'll Learn
                        </motion.h3>

                        <div className="space-y-5">
                            {learnings.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex gap-4 items-start group"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.08 }}
                                >
                                    <span className="text-golden text-sm mt-1 flex-shrink-0">{item.icon}</span>
                                    <p className="font-body text-cream/80 leading-relaxed">
                                        {item.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Bonus sidebar - editorial callout */}
                    <div className="lg:col-span-5">
                        <motion.div
                            className="bg-cream/5 border-l-2 border-golden p-8 rounded-r-sm"
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <h3 className="font-body font-semibold text-sm uppercase tracking-widest text-golden mb-6">
                                Plus You'll Get
                            </h3>

                            <div className="space-y-4">
                                {bonuses.map((item, index) => (
                                    <div key={index} className="flex gap-3 items-start">
                                        <span className="text-soft-blue text-xs mt-1.5">●</span>
                                        <p className="font-body text-cream/70 text-sm leading-relaxed">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            className="mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            <a
                                href={AMAZON_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button block text-center"
                            >
                                Buy on Amazon
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
