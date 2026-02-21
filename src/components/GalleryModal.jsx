import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

// ── ALL IMAGES ─────────────────────────────────────────────
const aestheticsImages = [
    { src: '/aesthetics/476464837_656731663348736_1006634820650931668_n.jpg', folder: 'Aesthetics' },
    { src: '/aesthetics/476826117_656731733348729_3047542056751433381_n.jpg', folder: 'Aesthetics' },
    { src: '/aesthetics/476836530_657269726628263_6879647700838262961_n.jpg', folder: 'Aesthetics' },
    { src: '/aesthetics/476969022_657495669939002_1831740952855266815_n.jpg', folder: 'Aesthetics' },
    { src: '/aesthetics/477161003_657495659939003_5638762585274566400_n.jpg', folder: 'Aesthetics' },
    { src: '/aesthetics/477293617_657495849938984_2097363842471353665_n.jpg', folder: 'Aesthetics' },
    { src: '/aesthetics/477320857_658147246540511_6689454762336817525_n.jpg', folder: 'Aesthetics' },
    { src: '/aesthetics/477366326_658147369873832_2447114589832820451_n.jpg', folder: 'Aesthetics' },
    { src: '/aesthetics/477430824_657495929938976_6961938581368017378_n.jpg', folder: 'Aesthetics' },
    { src: '/aesthetics/477599702_657495736605662_3581528003162983413_n.jpg', folder: 'Aesthetics' },
    { src: '/aesthetics/477625085_657495746605661_8954962920505582415_n.jpg', folder: 'Aesthetics' },
    { src: '/aesthetics/477634032_657495673272335_6502289372428061465_n.jpg', folder: 'Aesthetics' },
    { src: '/aesthetics/477734952_657495859938983_6836952867817899152_n.jpg', folder: 'Aesthetics' },
    { src: '/aesthetics/477747492_657496013272301_8021694406485007449_n.jpg', folder: 'Aesthetics' },
    { src: '/aesthetics/478106057_656731936682042_3823997506801449918_n.jpg', folder: 'Aesthetics' },
    { src: '/aesthetics/478300828_657495573272345_8039999523672809192_n.jpg', folder: 'Aesthetics' },
    { src: '/aesthetics/479103780_657495919938977_724404365750331675_n.jpg', folder: 'Aesthetics' },
]

const mixedImages = [
    { src: '/mixed/476464837_656731663348736_1006634820650931668_n.jpg', folder: 'Mixed' },
    { src: '/mixed/476682621_656731753348727_3714177588271898013_n.jpg', folder: 'Mixed' },
    { src: '/mixed/476826117_656731733348729_3047542056751433381_n.jpg', folder: 'Mixed' },
    { src: '/mixed/476834653_656731700015399_2750983076965481414_n.jpg', folder: 'Mixed' },
    { src: '/mixed/476835689_656731750015394_9150062496961612992_n.jpg', folder: 'Mixed' },
    { src: '/mixed/476978909_657269793294923_5609828567432968040_n.jpg', folder: 'Mixed' },
    { src: '/mixed/477012761_657495666605669_1102966077631158919_n.jpg', folder: 'Mixed' },
    { src: '/mixed/477293617_657495849938984_2097363842471353665_n.jpg', folder: 'Mixed' },
    { src: '/mixed/477320857_658147246540511_6689454762336817525_n.jpg', folder: 'Mixed' },
    { src: '/mixed/477355109_657496016605634_5059856991007285701_n.jpg', folder: 'Mixed' },
    { src: '/mixed/477366326_658147369873832_2447114589832820451_n.jpg', folder: 'Mixed' },
    { src: '/mixed/477430824_657495929938976_6961938581368017378_n.jpg', folder: 'Mixed' },
    { src: '/mixed/477501009_657269903294912_7595597864826160932_n.jpg', folder: 'Mixed' },
    { src: '/mixed/477634032_657495673272335_6502289372428061465_n.jpg', folder: 'Mixed' },
    { src: '/mixed/477734952_657495859938983_6836952867817899152_n.jpg', folder: 'Mixed' },
    { src: '/mixed/477747492_657496013272301_8021694406485007449_n.jpg', folder: 'Mixed' },
    { src: '/mixed/477793255_658730196482216_7904203137611132884_n.jpg', folder: 'Mixed' },
    { src: '/mixed/477796868_657495906605645_6584636717252412131_n.jpg', folder: 'Mixed' },
    { src: '/mixed/478044559_658730403148862_2094105558657236217_n.jpg', folder: 'Mixed' },
    { src: '/mixed/478106057_656731936682042_3823997506801449918_n.jpg', folder: 'Mixed' },
    { src: '/mixed/478298456_657496023272300_1080363447292596387_n.jpg', folder: 'Mixed' },
    { src: '/mixed/478300828_657495573272345_8039999523672809192_n.jpg', folder: 'Mixed' },
    { src: '/mixed/478486285_658730373148865_5886879654005220963_n.jpg', folder: 'Mixed' },
    { src: '/mixed/478533452_658271786528057_5874159301525548493_n.jpg', folder: 'Mixed' },
    { src: '/mixed/478541136_658147166540519_7756479907073240934_n.jpg', folder: 'Mixed' },
    { src: '/mixed/478656321_657495983272304_4977996421889579483_n.jpg', folder: 'Mixed' },
    { src: '/mixed/478834326_658730193148883_7105784246461187048_n.jpg', folder: 'Mixed' },
    { src: '/mixed/479103780_657495919938977_724404365750331675_n.jpg', folder: 'Mixed' },
    { src: '/mixed/479197382_657269996628236_4520664540629599426_n.jpg', folder: 'Mixed' },
    { src: '/mixed/479668061_658730413148861_7154329484265246123_n.jpg', folder: 'Mixed' },
    { src: '/mixed/479669935_658730393148863_2653634299927414776_n.jpg', folder: 'Mixed' },
    { src: '/mixed/479676631_658730343148868_1895768604151434943_n.jpg', folder: 'Mixed' },
    { src: '/mixed/479676632_658730189815550_2123625877562985990_n.jpg', folder: 'Mixed' },
    { src: '/mixed/479676632_658730433148859_3168985879220826769_n.jpg', folder: 'Mixed' },
    { src: '/mixed/480005784_658730226482213_586372532603500441_n.jpg', folder: 'Mixed' },
    { src: '/mixed/480006091_658730429815526_2310802798418653271_n.jpg', folder: 'Mixed' },
    { src: '/mixed/611276594_17981214548952226_3802581443058122606_n.jpg', folder: 'Mixed' },
    { src: '/mixed/611309053_17981399249952226_205515391965934903_n.jpg', folder: 'Mixed' },
    { src: '/mixed/612131589_17981488850952226_6831423058847831318_n.jpg', folder: 'Mixed' },
    { src: '/mixed/618645932_17982190943952226_6994317210620729695_n.jpg', folder: 'Mixed' },
    { src: '/mixed/619492867_17982190835952226_5297478661868878603_n.jpg', folder: 'Mixed' },
    { src: '/mixed/620804741_17982402578952226_4918111895685206029_n.jpg', folder: 'Mixed' },
    { src: '/mixed/622865006_17983197701952226_3444270079058982623_n.jpg', folder: 'Mixed' },
    { src: '/mixed/622988958_17983079264952226_75510950644342027_n.jpg', folder: 'Mixed' },
    { src: '/mixed/625101557_17983725176952226_2169403979518920696_n.jpg', folder: 'Mixed' },
    { src: '/mixed/625356921_17984023706952226_6469509965418821200_n.jpg', folder: 'Mixed' },
    { src: '/mixed/626446072_17983827809952226_5950118958318463545_n.jpg', folder: 'Mixed' },
    { src: '/mixed/627760811_17984625401952226_4019687707597568327_n.jpg', folder: 'Mixed' },
    { src: '/mixed/627903660_17984326649952226_4814107686552532463_n.jpg', folder: 'Mixed' },
    { src: '/mixed/629674004_17985090224952226_4454834693504273120_n.jpg', folder: 'Mixed' },
    { src: '/mixed/629690670_17985192770952226_8960038325346317550_n.jpg', folder: 'Mixed' },
    { src: '/mixed/629729702_17985295163952226_7828056337702205373_n.jpg', folder: 'Mixed' },
    { src: '/mixed/629734627_17984726183952226_4924746611292911177_n.jpg', folder: 'Mixed' },
    { src: '/mixed/634767077_17985419852952226_2399274105823229021_n.jpg', folder: 'Mixed' },
]

const allImages = [...aestheticsImages, ...mixedImages]

const FILTERS = ['All', 'Aesthetics', 'Mixed']

export default function GalleryModal({ onClose }) {
    const overlayRef = useRef(null)
    const gridRef = useRef(null)
    const [filter, setFilter] = useState('All')
    const [lightbox, setLightbox] = useState(null) // index into filtered
    const [loaded, setLoaded] = useState({})

    const filtered = filter === 'All' ? allImages : allImages.filter(i => i.folder === filter)

    // ── entrance animation ──
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        gsap.fromTo(overlayRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.4, ease: 'power2.out' }
        )
        gsap.fromTo('.gm-card',
            { opacity: 0, y: 40, scale: 0.92 },
            { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.03, ease: 'power3.out', delay: 0.15 }
        )
        return () => { document.body.style.overflow = '' }
    }, [])

    // re-animate on filter change
    useEffect(() => {
        gsap.fromTo('.gm-card',
            { opacity: 0, y: 30, scale: 0.94 },
            { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.025, ease: 'power3.out' }
        )
    }, [filter])

    // close on Escape
    useEffect(() => {
        const handler = e => {
            if (e.key === 'Escape') {
                if (lightbox !== null) setLightbox(null)
                else handleClose()
            }
            if (e.key === 'ArrowRight' && lightbox !== null) setLightbox(i => Math.min(i + 1, filtered.length - 1))
            if (e.key === 'ArrowLeft' && lightbox !== null) setLightbox(i => Math.max(i - 1, 0))
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [lightbox, filtered.length])

    const handleClose = () => {
        gsap.to(overlayRef.current, {
            opacity: 0, duration: 0.3, ease: 'power2.in',
            onComplete: onClose,
        })
    }

    return (
        <div className="gm-overlay" ref={overlayRef}>
            {/* ── Header ── */}
            <div className="gm-header">
                <div className="gm-title">
                    <span style={{ color: 'var(--terracotta)' }}>J</span>AAli Arts
                    <span className="gm-title-sub"> — Full Gallery</span>
                    <span className="gm-count">{filtered.length} works</span>
                </div>

                <div className="gm-filters">
                    {FILTERS.map(f => (
                        <button
                            key={f}
                            className={`gm-filter-btn ${filter === f ? 'active' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f}
                            <span className="gm-filter-count">
                                {f === 'All' ? allImages.length : allImages.filter(i => i.folder === f).length}
                            </span>
                        </button>
                    ))}
                </div>

                <button className="gm-close" onClick={handleClose} aria-label="Close gallery">
                    ✕
                </button>
            </div>

            {/* ── Grid ── */}
            <div className="gm-grid" ref={gridRef}>
                {filtered.map((img, idx) => (
                    <div
                        key={img.src + idx}
                        className="gm-card"
                        onClick={() => setLightbox(idx)}
                    >
                        <img
                            src={img.src}
                            alt={`JAAli Arts – ${img.folder} ${idx + 1}`}
                            loading="lazy"
                            onLoad={() => setLoaded(p => ({ ...p, [img.src]: true }))}
                            style={{ opacity: loaded[img.src] ? 1 : 0, transition: 'opacity 0.4s' }}
                        />
                        <div className="gm-card-overlay">
                            <span className="gm-card-folder">{img.folder}</span>
                            <span className="gm-card-zoom">🔍</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Lightbox ── */}
            {lightbox !== null && (
                <div className="gm-lightbox" onClick={() => setLightbox(null)}>
                    <div className="gm-lightbox-inner" onClick={e => e.stopPropagation()}>
                        <button
                            className="gm-lb-nav gm-lb-prev"
                            onClick={() => setLightbox(i => Math.max(i - 1, 0))}
                            disabled={lightbox === 0}
                        >‹</button>

                        <img
                            src={filtered[lightbox].src}
                            alt={`JAAli Arts ${lightbox + 1}`}
                            className="gm-lb-img"
                        />

                        <button
                            className="gm-lb-nav gm-lb-next"
                            onClick={() => setLightbox(i => Math.min(i + 1, filtered.length - 1))}
                            disabled={lightbox === filtered.length - 1}
                        >›</button>

                        <div className="gm-lb-info">
                            {lightbox + 1} / {filtered.length} · {filtered[lightbox].folder}
                        </div>
                        <button className="gm-lb-close" onClick={() => setLightbox(null)}>✕</button>
                    </div>
                </div>
            )}
        </div>
    )
}
