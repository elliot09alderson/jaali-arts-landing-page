import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

const galleryItems = [
    { src: '/aesthetics/476836530_657269726628263_6879647700838262961_n.jpg', label: 'Monstera Leaf Panel',       cls: 'tall' },
    { src: '/aesthetics/477293617_657495849938984_2097363842471353665_n.jpg', label: 'Terra Botanical Wall'               },
    { src: '/mixed/612131589_17981488850952226_6831423058847831318_n.jpg',    label: 'Buddha Medallion'                   },
    { src: '/aesthetics/477161003_657495659939003_5638762585274566400_n.jpg', label: 'Geometric Tile Art',        cls: 'tall' },
    { src: '/aesthetics/477734952_657495859938983_6836952867817899152_n.jpg', label: 'Textured Feature Wall'             },
    { src: '/mixed/478533452_658271786528057_5874159301525548493_n.jpg',      label: 'Custom Floral Relief',     cls: 'wide' },
    { src: '/aesthetics/479103780_657495919938977_724404365750331675_n.jpg',  label: 'Abstract Relief Panel'             },
    { src: '/mixed/622865006_17983197701952226_3444270079058982623_n.jpg',    label: 'Earthy Wall Texture'               },
    { src: '/aesthetics/477430824_657495929938976_6961938581368017378_n.jpg', label: 'Detailed Carving'                  },
    { src: '/mixed/479669935_658730393148863_2653634299927414776_n.jpg',      label: 'Sculptural Panel',         cls: 'tall' },
    { src: '/aesthetics/477625085_657495746605661_8954962920505582415_n.jpg', label: 'Lily Motif Relief'                 },
    { src: '/mixed/634767077_17985419852952226_2399274105823229021_n.jpg',    label: 'Large Wall Installation'           },
]

export default function Gallery({ onOpenFullGallery }) {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.gallery-item', {
                opacity: 0,
                scale: 0.92,
                duration: 0.9,
                stagger: 0.08,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.gallery-masonry',
                    start: 'top 80%',
                },
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="gallery" className="gallery" ref={sectionRef}>
            <div className="gallery-header">
                <div>
                    <div className="section-tag">Our Portfolio</div>
                    <h2 className="section-title">
                        A Gallery of<br />
                        <em>Handcrafted Wonders</em>
                    </h2>
                </div>
                <button
                    className="gallery-link"
                    onClick={onOpenFullGallery}
                    style={{ background: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                    aria-label="View full portfolio"
                >
                    View Full Portfolio
                    <ArrowRight size={14} strokeWidth={1.8} />
                </button>
            </div>

            <div className="gallery-masonry">
                {galleryItems.map((item, i) => (
                    <div
                        key={i}
                        className={`gallery-item ${item.cls || ''}`}
                        onClick={onOpenFullGallery}
                        style={{ cursor: 'pointer' }}
                        role="button"
                        tabIndex={0}
                        onKeyDown={e => e.key === 'Enter' && onOpenFullGallery?.()}
                        aria-label={`${item.label} – open full gallery`}
                    >
                        <img
                            src={item.src}
                            alt={item.label}
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="gallery-item-overlay">
                            <span className="gallery-item-label">{item.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
