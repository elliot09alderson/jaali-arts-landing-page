import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star } from 'lucide-react'

const testimonials = [
    {
        name: 'Priya Sharma',
        role: 'Interior Designer, Pune',
        initials: 'PS',
        text: 'JAAli Arts transformed our client\'s living room feature wall completely. The level of detail in the botanical relief panel is breathtaking — every leaf, every petal crafted with immense care. Clients are blown away every time.',
        stars: 5,
    },
    {
        name: 'Rahul Mehta',
        role: 'Hotel Owner, Pune',
        initials: 'RM',
        text: 'We commissioned a large-scale installation for our hotel lobby. JAAli Arts delivered beyond expectations — the 3D geometric tile work is now the centrepiece our guests love to photograph and share.',
        stars: 5,
    },
    {
        name: 'Sneha Kulkarni',
        role: 'Homeowner, Undri',
        initials: 'SK',
        text: 'The Buddha medallion on our pooja room wall is simply divine. The texture, the finish, the attention to spiritual detail — it brings such peace to the space. Our entire family is in love with it.',
        stars: 5,
    },
    {
        name: 'Amit Joshi',
        role: 'Architect, Mumbai',
        initials: 'AJ',
        text: 'I\'ve specified JAAli Arts on three commercial projects now. Their ability to execute bespoke designs at scale without sacrificing any handcrafted quality is genuinely rare. My clients always come back asking for more.',
        stars: 5,
    },
    {
        name: 'Neha Patil',
        role: 'Restaurant Owner, Pune',
        initials: 'NP',
        text: 'Our restaurant\'s feature wall used to be plain white. Now it\'s a conversation piece — a stunning floral relief that perfectly matches our brand. Footfall increased noticeably since the installation. Worth every rupee.',
        stars: 5,
    },
    {
        name: 'Vikram Desai',
        role: 'Corporate Developer, Bangalore',
        initials: 'VD',
        text: 'We needed something that would make our office reception stand out. JAAli Arts designed and delivered a custom geometric panel that our partners admire on every visit. Professional, precise, and passionate team.',
        stars: 5,
    },
]

const StarRating = ({ count }) => (
    <div className="testimonial-stars">
        {Array.from({ length: count }).map((_, i) => (
            <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
        ))}
    </div>
)

export default function Testimonials() {
    const sectionRef = useRef(null)
    const trackRef   = useRef(null)
    const progressRef = useRef(null)

    useEffect(() => {
        // Horizontal scroll-pin only on tablets/desktops
        if (window.innerWidth < 769) return

        const ctx = gsap.context(() => {
            const track = trackRef.current

            // How far to slide the track left (negative x)
            const getScrollAmount = () =>
                -(track.scrollWidth - track.offsetWidth)

            const st = ScrollTrigger.create({
                trigger: sectionRef.current,
                pin: true,
                scrub: 1.2,
                start: 'top top',
                end: () => `+=${Math.abs(getScrollAmount())}`,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                    if (progressRef.current) {
                        progressRef.current.style.transform = `scaleX(${self.progress})`
                    }
                },
            })

            gsap.to(track, {
                x: getScrollAmount,
                ease: 'none',
                scrollTrigger: st,
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section className="testimonials" ref={sectionRef} id="testimonials">

            {/* ── Header ── */}
            <div className="testimonials-hd">
                <div className="section-tag">Client Words</div>
                <h2 className="section-title" style={{ color: 'var(--white)', marginBottom: 0 }}>
                    What Our Clients<br />
                    <em style={{ color: 'var(--terra-light)' }}>Say About Us</em>
                </h2>
                <div className="testimonials-scroll-hint">
                    <span>Scroll to explore</span>
                    <div className="testimonials-scroll-arrow" />
                </div>
            </div>

            {/* ── Horizontal track ── */}
            <div className="testimonials-track" ref={trackRef}>
                {testimonials.map((t) => (
                    <div className="testimonial-card" key={t.name}>
                        <StarRating count={t.stars} />
                        <p className="testimonial-text">"{t.text}"</p>
                        <div className="testimonial-author">
                            <div className="testimonial-avatar">{t.initials}</div>
                            <div>
                                <div className="testimonial-name">{t.name}</div>
                                <div className="testimonial-role">{t.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Progress bar ── */}
            <div className="testimonials-progress">
                <div className="testimonials-progress-bar" ref={progressRef} />
            </div>
        </section>
    )
}
