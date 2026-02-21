import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Collected images from both aesthetics and mixed folders
const heroImage = '/aesthetics/476836530_657269726628263_6879647700838262961_n.jpg'

export default function Hero() {
    const bgRef = useRef(null)
    const tagRef = useRef(null)
    const titleLinesRef = useRef([])
    const descRef = useRef(null)
    const actionsRef = useRef(null)
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance animations
            const tl = gsap.timeline({ delay: 0.2 })

            tl.to(tagRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
            })

            titleLinesRef.current.forEach((line, i) => {
                tl.from(line, {
                    yPercent: 110,
                    duration: 1.1,
                    ease: 'power4.out',
                }, i === 0 ? '-=0.6' : '-=0.85')
            })

            tl.to(descRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
            }, '-=0.5')

            tl.to(actionsRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: 'power3.out',
            }, '-=0.6')

            // Parallax on background
            gsap.to(bgRef.current, {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="hero" className="hero" ref={sectionRef}>
            <div className="hero-bg" ref={bgRef}>
                <img src={heroImage} alt="JAAli Arts hero artwork" />
            </div>
            <div className="hero-overlay" />

            <div className="hero-content">
                <div className="hero-tag" ref={tagRef} style={{ transform: 'translateY(20px)' }}>
                    Bespoke 3D Wall Art Studio · Pune, India
                </div>

                <h1 className="hero-title">
                    <span
                        className="line"
                        ref={el => titleLinesRef.current[0] = el}
                    >
                        Where Every
                    </span>
                    <span
                        className="line"
                        ref={el => titleLinesRef.current[1] = el}
                    >
                        Wall <em>Tells</em> a
                    </span>
                    <span
                        className="line"
                        ref={el => titleLinesRef.current[2] = el}
                    >
                        Story
                    </span>
                </h1>

                <p className="hero-desc" ref={descRef} style={{ transform: 'translateY(20px)' }}>
                    Handcrafted 3D relief panels, sculptural wall textures, and bespoke
                    architectural art that transform any space into a timeless masterpiece.
                </p>

                <div className="hero-actions" ref={actionsRef} style={{ transform: 'translateY(20px)' }}>
                    <a href="#gallery" className="btn-primary" onClick={e => { e.preventDefault(); document.querySelector('#gallery').scrollIntoView({ behavior: 'smooth' }) }}>
                        View Portfolio
                    </a>
                    <a href="#contact" className="btn-outline" onClick={e => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}>
                        Commission a Piece
                    </a>
                </div>
            </div>

            <div className="hero-stats">
                <div className="hero-stat">
                    <div className="hero-stat-number">200+</div>
                    <div className="hero-stat-label">Projects Done</div>
                </div>
                <div className="hero-stat">
                    <div className="hero-stat-number">8+</div>
                    <div className="hero-stat-label">Years of Craft</div>
                </div>
                <div className="hero-stat">
                    <div className="hero-stat-number">100%</div>
                    <div className="hero-stat-label">Handcrafted</div>
                </div>
            </div>

            <div className="hero-scroll-cue">
                <div className="hero-scroll-line" />
                <span>Scroll</span>
            </div>
        </section>
    )
}
