import { useState, useEffect } from 'react'

const AMAZON_LINK = 'https://www.amazon.com.au/dp/B0GS9L9K14'

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { label: 'Story', href: '#story' },
        { label: "What's Inside", href: '#whats-inside' },
        { label: 'About Bobby', href: '#about' },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-deep-black/95 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
                {/* Logo / Title */}
                <a href="#" className="font-display font-bold text-lg md:text-xl text-cream">
                    Not Gone Yet
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-cream/80 font-body text-sm uppercase tracking-wider hover:text-golden transition-colors duration-300 relative group"
                        >
                            {link.label}
                            <svg
                                className="ekg-line absolute -bottom-2 left-0 w-full"
                                viewBox="0 0 120 24"
                                fill="none"
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M0,12 L30,12 L36,12 L39,8 L42,12 L48,12 L51,2 L54,22 L57,6 L60,12 L70,12 L74,8 L78,12 L120,12"
                                    stroke="#fbd457"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    vectorEffect="non-scaling-stroke"
                                />
                            </svg>
                        </a>
                    ))}
                    <a
                        href={AMAZON_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button text-xs py-2 px-5"
                    >
                        Buy on Amazon
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-cream p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileOpen && (
                <div className="md:hidden bg-deep-black/98 backdrop-blur-md border-t border-golden/20 px-6 py-6 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="block text-cream/80 font-body text-sm uppercase tracking-wider hover:text-golden transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={AMAZON_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button text-xs py-2 px-5 block text-center mt-4"
                    >
                        Buy on Amazon
                    </a>
                </div>
            )}
        </nav>
    )
}
