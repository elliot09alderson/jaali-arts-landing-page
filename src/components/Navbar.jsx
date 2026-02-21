import { useEffect, useRef, useState } from 'react'
import { LayoutGrid, X, Menu } from 'lucide-react'

const links = [
    { label: 'About',    href: '#about'    },
    { label: 'Services', href: '#services' },
    { label: 'Gallery',  href: '#gallery'  },
    { label: 'Process',  href: '#process'  },
    { label: 'Contact',  href: '#contact'  },
]

export default function Navbar({ onOpenGallery }) {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const navRef = useRef(null)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleLinkClick = (e, href) => {
        e.preventDefault()
        setMenuOpen(false)
        const target = document.querySelector(href)
        if (target) target.scrollIntoView({ behavior: 'smooth' })
    }

    const linkColor = scrolled ? 'var(--charcoal)' : 'rgba(255,255,255,0.92)'
    const logoColor = scrolled ? 'var(--charcoal)' : 'white'

    return (
        <>
            <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>

                {/* ── Logo ── */}
                <a href="#" className="navbar-logo" onClick={e => handleLinkClick(e, '#hero')}>
                    <img
                        src="/logo.png"
                        alt="JAAli Arts Logo"
                        style={{ height: 38, width: 'auto', objectFit: 'contain' }}
                    />
                    <div className="navbar-logo-text" style={{ color: logoColor }}>
                        <span style={{ color: 'var(--terracotta)' }}>J</span>AAli Arts
                    </div>
                </a>

                {/* ── Desktop Links ── */}
                <ul className="navbar-links">
                    {links.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={e => handleLinkClick(e, link.href)}
                                style={{ color: linkColor }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={onOpenGallery}
                            className="navbar-gallery-btn"
                            style={{ color: linkColor }}
                            aria-label="Open full portfolio gallery"
                        >
                            <LayoutGrid size={13} strokeWidth={1.8} />
                            Full Portfolio
                        </button>
                    </li>
                </ul>

                {/* ── CTA ── */}
                <a
                    href="#contact"
                    className="navbar-cta"
                    onClick={e => handleLinkClick(e, '#contact')}
                >
                    Get a Quote
                </a>

                {/* ── Hamburger ── */}
                <button
                    className="navbar-hamburger"
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                >
                    {menuOpen
                        ? <X size={20} style={{ color: scrolled ? 'var(--charcoal)' : 'white' }} />
                        : <Menu size={20} style={{ color: scrolled ? 'var(--charcoal)' : 'white' }} />
                    }
                </button>
            </nav>

            {/* ── Mobile Menu ── */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                {links.map(link => (
                    <a key={link.href} href={link.href} onClick={e => handleLinkClick(e, link.href)}>
                        {link.label}
                    </a>
                ))}
                <button
                    onClick={() => { setMenuOpen(false); onOpenGallery?.() }}
                    style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '2.2rem',
                        color: 'var(--terracotta)',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                    }}
                >
                    <LayoutGrid size={22} strokeWidth={1.4} />
                    Full Portfolio
                </button>
                <a
                    href="#contact"
                    className="navbar-cta"
                    style={{ marginTop: 16 }}
                    onClick={e => handleLinkClick(e, '#contact')}
                >
                    Get a Quote
                </a>
            </div>
        </>
    )
}
