import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Layers, Leaf, Grid3x3, CircleDot, PenTool, Building2 } from 'lucide-react'

const services = [
    {
        num: '01',
        Icon: Layers,
        name: '3D Relief Wall Panels',
        desc: 'Large-format raised relief art panels featuring botanical, geometric, or custom motifs — handcrafted for feature walls, lobbies, and living spaces.',
    },
    {
        num: '02',
        Icon: Leaf,
        name: 'Botanical & Floral Textures',
        desc: 'Nature-inspired sculptural textures — from monstera leaves to lily blossoms — brought to life in rich earthy tones and organic forms.',
    },
    {
        num: '03',
        Icon: Grid3x3,
        name: 'Geometric Tile Art',
        desc: 'Precision geometric tile compositions and modular relief systems that create stunning, repeating pattern installations for any scale.',
    },
    {
        num: '04',
        Icon: CircleDot,
        name: 'Circular Medallion Art',
        desc: 'Intricately detailed circular wall medallions — from serene Buddha compositions to tree-of-life designs — crafted as singular statement pieces.',
    },
    {
        num: '05',
        Icon: PenTool,
        name: 'Bespoke Custom Design',
        desc: 'From concept sketch to finished installation, we collaborate with you to craft a completely unique piece tailored to your vision and space.',
    },
    {
        num: '06',
        Icon: Building2,
        name: 'Residential & Commercial',
        desc: 'End-to-end service for homes, hotels, restaurants, and offices — from site survey through design, fabrication, and professional installation.',
    },
]

export default function Services() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.service-card', {
                y: 60,
                opacity: 0,
                duration: 0.9,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.services-grid',
                    start: 'top 80%',
                },
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="services" className="services" ref={sectionRef}>
            <div className="services-header">
                <div>
                    <div className="section-tag">What We Create</div>
                    <h2 className="section-title" style={{ color: 'var(--white)' }}>
                        Art That<br />
                        <em style={{ color: 'var(--terra-light)' }}>Breathes & Lives</em>
                    </h2>
                </div>
                <p className="services-header-right">
                    Every surface deserves artistry. From intimate residential alcoves
                    to sweeping commercial feature walls, our craft spans mediums, motifs,
                    and magnitudes — always handmade, always one of a kind.
                </p>
            </div>

            <div className="services-grid">
                {services.map(s => (
                    <div className="service-card" key={s.num}>
                        <div className="service-number">{s.num}</div>
                        <div className="service-icon">
                            <s.Icon size={28} strokeWidth={1.4} />
                        </div>
                        <div className="service-name">{s.name}</div>
                        <p className="service-desc">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
