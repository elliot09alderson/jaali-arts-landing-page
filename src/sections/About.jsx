import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin } from 'lucide-react'

export default function About() {
    const sectionRef = useRef(null)
    const visualRef = useRef(null)
    const textRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(visualRef.current, {
                x: -80,
                opacity: 0,
                duration: 1.2,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            })

            gsap.from(textRef.current.children, {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="about" className="about" ref={sectionRef}>
            <div className="about-visual" ref={visualRef}>
                <img
                    className="about-img-main"
                    src="/aesthetics/477161003_657495659939003_5638762585274566400_n.jpg"
                    alt="JAAli Arts 3D wall textures"
                    loading="lazy"
                />
                <img
                    className="about-img-accent"
                    src="/mixed/612131589_17981488850952226_6831423058847831318_n.jpg"
                    alt="Buddha relief panel by JAAli Arts"
                    loading="lazy"
                />
                <div className="about-badge">
                    <span className="about-badge-text">Handcrafted<br />with<br />Passion</span>
                </div>
            </div>

            <div className="about-text" ref={textRef}>
                <div className="section-tag">Our Story</div>
                <h2 className="section-title">
                    Transforming Spaces<br />
                    into <em>Living Art</em>
                </h2>
                <p className="section-body">
                    At JAAli Arts, we believe that walls are more than boundaries — they are
                    canvases waiting to breathe life. Rooted in Pune's vibrant creative spirit,
                    our studio crafts bespoke 3D wall relief panels, textured architectural
                    art, and sculptural pieces that carry the maker's touch in every curve.
                </p>
                <p className="section-body">
                    From delicate floral motifs to bold geometric compositions, from intimate
                    home spaces to grand commercial installations, every creation is born
                    from a deep conversation between you and our craftspeople.
                </p>

                <div style={{ display: 'flex', gap: '40px', marginTop: 36, flexWrap: 'wrap' }}>
                    {[
                        { n: '200+', l: 'Projects Completed' },
                        { n: '8+',   l: 'Years of Mastery'   },
                        { n: '50+',  l: 'Design Patterns'    },
                    ].map(s => (
                        <div key={s.l}>
                            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--terracotta)', lineHeight: 1 }}>
                                {s.n}
                            </div>
                            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--warm-gray)', marginTop: 6 }}>
                                {s.l}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="about-signature">JAAli Arts</div>
                <div style={{ fontFamily: 'var(--font-elegant)', fontSize: '0.85rem', color: 'var(--warm-gray)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 5 }}>
                    <MapPin size={13} strokeWidth={1.5} style={{ color: 'var(--terracotta)', flexShrink: 0 }} />
                    Kanade Nagar, Undri, Pune – 411060
                </div>
            </div>
        </section>
    )
}
