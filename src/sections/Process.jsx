import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MessageCircle, PenLine, Hammer, Home } from 'lucide-react'

const steps = [
    {
        Icon: MessageCircle,
        name: 'Consultation',
        desc: 'We sit with you to understand your space, aesthetic preferences, and creative vision.',
    },
    {
        Icon: PenLine,
        name: 'Design & Sketch',
        desc: 'Our artists draft custom designs and mood boards tailored to your unique brief.',
    },
    {
        Icon: Hammer,
        name: 'Handcraft',
        desc: 'Skilled craftspeople shape, texture, and finish each piece entirely by hand in our studio.',
    },
    {
        Icon: Home,
        name: 'Installation',
        desc: 'Our team installs the artwork on-site with precision, leaving your space transformed.',
    },
]

export default function Process() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to('.process-step', {
                opacity: 1,
                y: 0,
                duration: 0.9,
                stagger: 0.18,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.process-steps',
                    start: 'top 80%',
                },
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="process" className="process" ref={sectionRef}>
            <div className="process-header">
                <div className="section-tag">How We Work</div>
                <h2 className="section-title">
                    From Vision to<br /><em>Masterpiece</em>
                </h2>
                <p style={{ fontFamily: 'var(--font-elegant)', fontSize: '1.05rem', color: 'var(--warm-gray)', maxWidth: 520, margin: '0 auto', lineHeight: 1.8 }}>
                    A seamless, collaborative process that puts your vision at the centre —
                    every step of the way.
                </p>
            </div>

            <div className="process-steps">
                {steps.map((step, i) => (
                    <div className="process-step" key={i}>
                        <div className="process-step-dot">
                            <step.Icon size={26} strokeWidth={1.5} style={{ color: 'var(--terracotta)' }} />
                        </div>
                        <div className="process-step-num">Step {String(i + 1).padStart(2, '0')}</div>
                        <div className="process-step-name">{step.name}</div>
                        <p className="process-step-desc">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
