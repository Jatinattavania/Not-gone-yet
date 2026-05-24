const AMAZON_LINK = 'https://www.amazon.com.au/dp/B0GS9L9K14'

export default function Footer() {
    return (
        <footer className="bg-deep-black border-t border-golden/10 py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Book title */}
                    <div>
                        <h3 className="font-display font-bold text-lg text-cream">
                            Not Gone Yet
                        </h3>
                        <p className="font-body text-xs text-cream/40 mt-1">
                            A Memoir of Stroke, Survival, and the Uneven Road Back to Myself
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href={AMAZON_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-sm text-cream/60 hover:text-golden transition-colors"
                        >
                            Buy on Amazon
                        </a>
                        <span className="text-cream/20">|</span>
                        <a
                            href="#story"
                            className="font-body text-sm text-cream/60 hover:text-golden transition-colors"
                        >
                            Story
                        </a>
                        <span className="text-cream/20">|</span>
                        <a
                            href="#about"
                            className="font-body text-sm text-cream/60 hover:text-golden transition-colors"
                        >
                            About
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="font-body text-xs text-cream/30">
                        © {new Date().getFullYear()} Dr. Ramandeep Chaggar. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
