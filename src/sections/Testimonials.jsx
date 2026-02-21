import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const testimonials = [
    {
        name: 'Priya Sharma',
        role: 'Interior Designer, Pune',
        initials: 'PS',
        text: 'JAAli Arts transformed our client\'s living room feature wall completely. The level of detail in the botanical relief panel is breathtaking — every leaf, every petal is crafted with immense care.',
        stars: 5,
    },
    {
        name: 'Rahul Mehta',
        role: 'Hotel Owner, Pune',
        initials: 'RM',
        text: 'We commissioned a large-scale installation for our hotel lobby. JAAli Arts delivered beyond expectations — the 3D geometric tile work is now the centrepiece our guests love to photograph.',
        stars: 5,
    },
    {
        name: 'Sneha Kulkarni',
        role: 'Homeowner, Undri',
        initials: 'SK',
        text: 'The Buddha medallion on our pooja room wall is simply divine. The texture, the finish, the attention to spiritual detail — it brings such peace to the space. Highly recommended!',
        stars: 5,
    },
]

export default function Testimonials() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to('.testimonial-card', {
                opacity: 1,
                y: 0,
                duration: 0.9,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.testimonials-grid',
                    start: 'top 80%',
                },
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section className="testimonials" ref={sectionRef}>
            <div className="section-tag">Client Words</div>
            <h2 className="section-title">
                What Our Clients<br /><em style={{ color: 'var(--terra-light)' }}>Say About Us</em>
            </h2>

            <div className="testimonials-grid">
                {testimonials.map((t) => (
                    <div className="testimonial-card" key={t.name}>
                        <div className="testimonial-stars">
                            {Array.from({ length: t.stars }).map((_, i) => (
                                <span key={i}>★</span>
                            ))}
                        </div>
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
        </section>
    )
}
