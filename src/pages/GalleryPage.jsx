import { useState, useEffect, useCallback } from 'react'
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn, LayoutGrid } from 'lucide-react'

// ── All images ──────────────────────────────────────────────
const aestheticsImages = [
    '/aesthetics/476464837_656731663348736_1006634820650931668_n.jpg',
    '/aesthetics/476826117_656731733348729_3047542056751433381_n.jpg',
    '/aesthetics/476836530_657269726628263_6879647700838262961_n.jpg',
    '/aesthetics/476969022_657495669939002_1831740952855266815_n.jpg',
    '/aesthetics/477161003_657495659939003_5638762585274566400_n.jpg',
    '/aesthetics/477293617_657495849938984_2097363842471353665_n.jpg',
    '/aesthetics/477320857_658147246540511_6689454762336817525_n.jpg',
    '/aesthetics/477366326_658147369873832_2447114589832820451_n.jpg',
    '/aesthetics/477430824_657495929938976_6961938581368017378_n.jpg',
    '/aesthetics/477599702_657495736605662_3581528003162983413_n.jpg',
    '/aesthetics/477625085_657495746605661_8954962920505582415_n.jpg',
    '/aesthetics/477634032_657495673272335_6502289372428061465_n.jpg',
    '/aesthetics/477734952_657495859938983_6836952867817899152_n.jpg',
    '/aesthetics/477747492_657496013272301_8021694406485007449_n.jpg',
    '/aesthetics/478106057_656731936682042_3823997506801449918_n.jpg',
    '/aesthetics/478300828_657495573272345_8039999523672809192_n.jpg',
    '/aesthetics/479103780_657495919938977_724404365750331675_n.jpg',
]

const mixedImages = [
    '/mixed/476464837_656731663348736_1006634820650931668_n.jpg',
    '/mixed/476682621_656731753348727_3714177588271898013_n.jpg',
    '/mixed/476826117_656731733348729_3047542056751433381_n.jpg',
    '/mixed/476834653_656731700015399_2750983076965481414_n.jpg',
    '/mixed/476835689_656731750015394_9150062496961612992_n.jpg',
    '/mixed/476978909_657269793294923_5609828567432968040_n.jpg',
    '/mixed/477012761_657495666605669_1102966077631158919_n.jpg',
    '/mixed/477293617_657495849938984_2097363842471353665_n.jpg',
    '/mixed/477320857_658147246540511_6689454762336817525_n.jpg',
    '/mixed/477355109_657496016605634_5059856991007285701_n.jpg',
    '/mixed/477366326_658147369873832_2447114589832820451_n.jpg',
    '/mixed/477430824_657495929938976_6961938581368017378_n.jpg',
    '/mixed/477501009_657269903294912_7595597864826160932_n.jpg',
    '/mixed/477634032_657495673272335_6502289372428061465_n.jpg',
    '/mixed/477734952_657495859938983_6836952867817899152_n.jpg',
    '/mixed/477747492_657496013272301_8021694406485007449_n.jpg',
    '/mixed/477793255_658730196482216_7904203137611132884_n.jpg',
    '/mixed/477796868_657495906605645_6584636717252412131_n.jpg',
    '/mixed/478044559_658730403148862_2094105558657236217_n.jpg',
    '/mixed/478106057_656731936682042_3823997506801449918_n.jpg',
    '/mixed/478298456_657496023272300_1080363447292596387_n.jpg',
    '/mixed/478300828_657495573272345_8039999523672809192_n.jpg',
    '/mixed/478486285_658730373148865_5886879654005220963_n.jpg',
    '/mixed/478533452_658271786528057_5874159301525548493_n.jpg',
    '/mixed/478541136_658147166540519_7756479907073240934_n.jpg',
    '/mixed/478656321_657495983272304_4977996421889579483_n.jpg',
    '/mixed/478834326_658730193148883_7105784246461187048_n.jpg',
    '/mixed/479103780_657495919938977_724404365750331675_n.jpg',
    '/mixed/479197382_657269996628236_4520664540629599426_n.jpg',
    '/mixed/479668061_658730413148861_7154329484265246123_n.jpg',
    '/mixed/479669935_658730393148863_2653634299927414776_n.jpg',
    '/mixed/479676631_658730343148868_1895768604151434943_n.jpg',
    '/mixed/479676632_658730189815550_2123625877562985990_n.jpg',
    '/mixed/479676632_658730433148859_3168985879220826769_n.jpg',
    '/mixed/480005784_658730226482213_586372532603500441_n.jpg',
    '/mixed/480006091_658730429815526_2310802798418653271_n.jpg',
    '/mixed/611276594_17981214548952226_3802581443058122606_n.jpg',
    '/mixed/611309053_17981399249952226_205515391965934903_n.jpg',
    '/mixed/612131589_17981488850952226_6831423058847831318_n.jpg',
    '/mixed/618645932_17982190943952226_6994317210620729695_n.jpg',
    '/mixed/619492867_17982190835952226_5297478661868878603_n.jpg',
    '/mixed/620804741_17982402578952226_4918111895685206029_n.jpg',
    '/mixed/622865006_17983197701952226_3444270079058982623_n.jpg',
    '/mixed/622988958_17983079264952226_75510950644342027_n.jpg',
    '/mixed/625101557_17983725176952226_2169403979518920696_n.jpg',
    '/mixed/625356921_17984023706952226_6469509965418821200_n.jpg',
    '/mixed/626446072_17983827809952226_5950118958318463545_n.jpg',
    '/mixed/627760811_17984625401952226_4019687707597568327_n.jpg',
    '/mixed/627903660_17984326649952226_4814107686552532463_n.jpg',
    '/mixed/629674004_17985090224952226_4454834693504273120_n.jpg',
    '/mixed/629690670_17985192770952226_8960038325346317550_n.jpg',
    '/mixed/629729702_17985295163952226_7828056337702205373_n.jpg',
    '/mixed/629734627_17984726183952226_4924746611292911177_n.jpg',
    '/mixed/634767077_17985419852952226_2399274105823229021_n.jpg',
]

const allImages = [
    ...aestheticsImages.map(src => ({ src, category: 'Aesthetics' })),
    ...mixedImages.map(src => ({ src, category: 'Mixed' })),
]

const FILTERS = [
    { id: 'all',        label: 'All Works',   count: allImages.length },
    { id: 'Aesthetics', label: 'Aesthetics',  count: aestheticsImages.length },
    { id: 'Mixed',      label: 'Mixed',       count: mixedImages.length },
]

// ── Instagram SVG icon ──────────────────────────────────────
const IgIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
)

export default function GalleryPage({ onBack }) {
    const [filter, setFilter]   = useState('all')
    const [lightbox, setLightbox] = useState(null)
    const [loaded, setLoaded]   = useState({})

    const filtered = filter === 'all'
        ? allImages
        : allImages.filter(img => img.category === filter)

    // Scroll to top when page opens
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Keyboard navigation
    useEffect(() => {
        const handler = (e) => {
            if (lightbox === null) return
            if (e.key === 'Escape')      setLightbox(null)
            if (e.key === 'ArrowRight')  setLightbox(i => Math.min(i + 1, filtered.length - 1))
            if (e.key === 'ArrowLeft')   setLightbox(i => Math.max(i - 1, 0))
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [lightbox, filtered.length])

    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (lightbox !== null) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [lightbox])

    const onImgLoad = useCallback((src) => {
        setLoaded(p => ({ ...p, [src]: true }))
    }, [])

    return (
        <div className="gp-page">

            {/* ── Sticky Header ── */}
            <header className="gp-header">
                <button className="gp-back-btn" onClick={onBack} aria-label="Back to Home">
                    <ArrowLeft size={16} />
                    <span>Back</span>
                </button>

                <div className="gp-header-brand">
                    <LayoutGrid size={16} style={{ color: 'var(--terracotta)' }} />
                    <span><span style={{ color: 'var(--terracotta)' }}>J</span>AAli Arts — Full Portfolio</span>
                </div>

                <div className="gp-filters">
                    {FILTERS.map(f => (
                        <button
                            key={f.id}
                            className={`gp-filter-btn ${filter === f.id ? 'active' : ''}`}
                            onClick={() => setFilter(f.id)}
                        >
                            {f.label}
                            <span className="gp-filter-count">{f.count}</span>
                        </button>
                    ))}
                </div>

                <span className="gp-count">{filtered.length} works</span>

                <a
                    href="https://www.instagram.com/jaaliarts/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gp-ig-link"
                    aria-label="Follow on Instagram"
                >
                    <IgIcon />
                    <span>@jaaliarts</span>
                </a>
            </header>

            {/* ── Masonry Grid ── */}
            <div className="gp-grid">
                {filtered.map((img, idx) => (
                    <div
                        key={img.src + idx}
                        className="gp-item"
                        onClick={() => setLightbox(idx)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={e => e.key === 'Enter' && setLightbox(idx)}
                        aria-label={`View ${img.category} image ${idx + 1}`}
                    >
                        <img
                            src={img.src}
                            alt={`JAAli Arts — ${img.category} work ${idx + 1}`}
                            loading="lazy"
                            decoding="async"
                            onLoad={() => onImgLoad(img.src)}
                            style={{
                                opacity: loaded[img.src] ? 1 : 0,
                                transition: 'opacity 0.5s ease',
                            }}
                        />
                        <div className="gp-item-overlay">
                            <ZoomIn size={20} strokeWidth={1.5} />
                            <span className="gp-item-cat">{img.category}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Lightbox ── */}
            {lightbox !== null && (
                <div
                    className="gp-lightbox"
                    onClick={() => setLightbox(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image viewer"
                >
                    <div className="gp-lb-inner" onClick={e => e.stopPropagation()}>

                        <button
                            className="gp-lb-close"
                            onClick={() => setLightbox(null)}
                            aria-label="Close"
                        >
                            <X size={16} />
                        </button>

                        <button
                            className="gp-lb-nav gp-lb-prev"
                            onClick={() => setLightbox(i => Math.max(i - 1, 0))}
                            disabled={lightbox === 0}
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={22} />
                        </button>

                        <img
                            key={filtered[lightbox].src}
                            src={filtered[lightbox].src}
                            alt={`JAAli Arts ${lightbox + 1} of ${filtered.length}`}
                            className="gp-lb-img"
                        />

                        <button
                            className="gp-lb-nav gp-lb-next"
                            onClick={() => setLightbox(i => Math.min(i + 1, filtered.length - 1))}
                            disabled={lightbox === filtered.length - 1}
                            aria-label="Next image"
                        >
                            <ChevronRight size={22} />
                        </button>

                        <div className="gp-lb-info">
                            {lightbox + 1} / {filtered.length}
                            <span style={{ opacity: 0.5, margin: '0 8px' }}>·</span>
                            {filtered[lightbox].category}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
