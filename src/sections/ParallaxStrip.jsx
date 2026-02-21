import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ParallaxStrip() {
    const bgRef = useRef(null)
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(bgRef.current, {
                yPercent: 25,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            })

            gsap.from('.parallax-strip-quote', {
                opacity: 0,
                y: 40,
                duration: 1.2,
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
        <div className="parallax-strip" ref={sectionRef}>
            <div className="parallax-strip-bg" ref={bgRef}>
                <img
                    src="/mixed/622865006_17983197701952226_3444270079058982623_n.jpg"
                    alt="JAAli Arts wall art texture"
                />
            </div>
            <div className="parallax-strip-content">
                <p className="parallax-strip-quote">
                    "Every wall is a canvas. Every texture, a heartbeat.
                    Every piece we craft carries the soul of its creator
                    and the spirit of its home."
                </p>
                <div className="parallax-strip-author">— JAAli Arts Studio</div>
            </div>
        </div>
    )
}
