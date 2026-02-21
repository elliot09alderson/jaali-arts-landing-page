import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const instaPosts = [
    '/aesthetics/476836530_657269726628263_6879647700838262961_n.jpg',
    '/aesthetics/478300828_657495573272345_8039999523672809192_n.jpg',
    '/mixed/479669935_658730393148863_2653634299927414776_n.jpg',
    '/mixed/478533452_658271786528057_5874159301525548493_n.jpg',
    '/aesthetics/477625085_657495746605661_8954962920505582415_n.jpg',
    '/mixed/634767077_17985419852952226_2399274105823229021_n.jpg',
]

export default function InstagramSection() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.instagram-post', {
                opacity: 0,
                scale: 0.9,
                duration: 0.7,
                stagger: 0.08,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.instagram-grid',
                    start: 'top 85%',
                },
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section className="instagram-section" ref={sectionRef}>
            <div className="instagram-header">
                <div className="section-tag" style={{ justifyContent: 'center' }}>Follow Our Work</div>
                <h2 className="section-title">
                    <em>@jaaliarts</em> on Instagram
                </h2>
                <p style={{ fontFamily: 'var(--font-elegant)', fontSize: '1rem', color: 'var(--warm-gray)', marginTop: 12 }}>
                    Follow us for daily doses of artistry, behind-the-scenes craft, and new installations.
                </p>
            </div>

            <div className="instagram-grid">
                {instaPosts.map((src, i) => (
                    <a
                        key={i}
                        href="https://www.instagram.com/jaaliarts/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram-post"
                    >
                        <img src={src} alt={`JAAli Arts Instagram post ${i + 1}`} loading="lazy" />
                        <div className="instagram-post-overlay">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </div>
                    </a>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 48 }}>
                <a
                    href="https://www.instagram.com/jaaliarts/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                >
                    Follow @jaaliarts
                </a>
            </div>
        </section>
    )
}
