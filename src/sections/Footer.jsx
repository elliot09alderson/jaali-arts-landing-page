import { Phone, Mail, Globe, Heart } from 'lucide-react'

// ── Brand SVG icons (not in lucide) ─────────────────────────
const InstagramIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
)

const WhatsAppIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
)

const socialLinks = [
    {
        href: 'https://www.instagram.com/jaaliarts/',
        title: 'Instagram',
        icon: <InstagramIcon />,
        external: true,
    },
    {
        href: 'tel:+918329928857',
        title: 'Call: +91 8329928857',
        icon: <Phone size={15} strokeWidth={1.6} />,
    },
    {
        href: 'https://wa.me/918329928857?text=Hi%20JAAli%20Arts%2C%20I\'m%20interested%20in%20a%20custom%20wall%20art%20piece.',
        title: 'WhatsApp: +91 8329928857',
        icon: <WhatsAppIcon />,
        style: { borderColor: '#25D366', color: '#25D366' },
        external: true,
    },
    {
        href: 'mailto:jaaliarts@gmail.com',
        title: 'Email',
        icon: <Mail size={15} strokeWidth={1.6} />,
    },
    {
        href: 'https://www.jaaliarts.com',
        title: 'Website',
        icon: <Globe size={15} strokeWidth={1.6} />,
        external: true,
    },
]

const exploreLinks = [
    { label: 'About Us',   id: 'about'    },
    { label: 'Services',   id: 'services' },
    { label: 'Portfolio',  id: 'gallery'  },
    { label: 'Process',    id: 'process'  },
    { label: 'Contact',    id: 'contact'  },
]

const serviceLinks = [
    '3D Relief Panels',
    'Botanical Art',
    'Geometric Tiles',
    'Medallion Art',
    'Custom Design',
]

export default function Footer() {
    const year = new Date().getFullYear()

    const handleNav = (e, id) => {
        const el = document.querySelector(`#${id}`)
        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }) }
    }

    return (
        <footer className="footer">
            <div className="footer-top">
                {/* Brand */}
                <div>
                    <div className="footer-brand-name">
                        <span>J</span>AAli <span>A</span>rts
                    </div>
                    <p className="footer-brand-desc">
                        Bespoke 3D wall art and relief panels crafted entirely by hand.
                        We bring extraordinary artistry to your walls — from intimate homes
                        to grand commercial spaces.
                    </p>
                    <div className="footer-socials">
                        {socialLinks.map(({ href, title, icon, style, external }) => (
                            <a
                                key={title}
                                href={href}
                                className="footer-social-btn"
                                title={title}
                                style={style}
                                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                aria-label={title}
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Explore */}
                <div className="footer-col">
                    <div className="footer-col-title">Explore</div>
                    <ul>
                        {exploreLinks.map(({ label, id }) => (
                            <li key={id}>
                                <a href={`#${id}`} onClick={e => handleNav(e, id)}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div className="footer-col">
                    <div className="footer-col-title">Services</div>
                    <ul>
                        {serviceLinks.map(s => (
                            <li key={s}>
                                <a href="#services" onClick={e => handleNav(e, 'services')}>{s}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Find Us */}
                <div className="footer-col">
                    <div className="footer-col-title">Find Us</div>
                    <ul>
                        {[
                            '+91 8329928857',
                            '(Call & WhatsApp)',
                            'jaaliarts@gmail.com',
                            'Kanade Nagar, Undri',
                            'Pune – 411060',
                        ].map(c => (
                            <li key={c}>
                                <span style={{ fontFamily: 'var(--font-elegant)', fontSize: '0.95rem', color: 'rgba(245,240,232,0.55)' }}>
                                    {c}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-left" style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                    © {year} JAAli Arts. All rights reserved. Crafted with
                    <Heart size={12} fill="currentColor" style={{ color: 'var(--terracotta)' }} />
                    in Pune, India.
                </div>
                <div className="footer-bottom-right">
                    <a href="https://www.instagram.com/jaaliarts/" target="_blank" rel="noopener noreferrer">
                        @jaaliarts
                    </a>
                </div>
            </div>
        </footer>
    )
}
