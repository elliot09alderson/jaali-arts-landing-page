import { useRef, useState } from 'react'
import { Phone, Mail, MapPin, Globe, CheckCircle2, MessageCircle, ArrowRight, Send } from 'lucide-react'

// WhatsApp SVG inline (brand icon not in lucide)
const WhatsAppIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
)

const contactDetails = [
    {
        Icon: Phone,
        iconBg: '#25D366',
        label: 'Phone & WhatsApp',
        content: (
            <>
                <a href="tel:+918329928857">+91 8329928857</a>
                <br />
                <a
                    href="https://wa.me/918329928857?text=Hi%20JAAli%20Arts%2C%20I'm%20interested%20in%20a%20custom%20wall%20art%20piece."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#25D366', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 6 }}
                >
                    <WhatsAppIcon size={13} /> Chat on WhatsApp
                </a>
            </>
        ),
    },
    {
        Icon: Mail,
        label: 'Email',
        content: <a href="mailto:jaaliarts@gmail.com">jaaliarts@gmail.com</a>,
    },
    {
        Icon: MapPin,
        label: 'Studio Address',
        content: <>Kanade Nagar, Undri<br />Pune – 411060, Maharashtra</>,
    },
    {
        Icon: Globe,
        label: 'Website & Social',
        content: (
            <>
                <a href="https://www.jaaliarts.com" target="_blank" rel="noopener noreferrer">www.jaaliarts.com</a>
                <br />
                <a href="https://www.instagram.com/jaaliarts/" target="_blank" rel="noopener noreferrer">@jaaliarts</a>
            </>
        ),
    },
]

export default function Contact() {
    const sectionRef = useRef(null)
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    const handleChange = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }))

    const handleSubmit = e => {
        e.preventDefault()
        setSubmitting(true)
        setTimeout(() => {
            setSubmitting(false)
            setSubmitted(true)
            setTimeout(() => setSubmitted(false), 5000)
        }, 800)
    }

    return (
        <section id="contact" className="contact" ref={sectionRef}>
            <div className="contact-info">
                <div className="section-tag">Get In Touch</div>
                <h2 className="section-title">
                    Let's Create Something<br />
                    <em>Extraordinary</em>
                </h2>
                <p className="section-body" style={{ marginBottom: 44 }}>
                    Ready to transform your space? Reach out to us for a consultation.
                    We'd love to hear your vision and craft something uniquely yours.
                </p>

                {contactDetails.map(({ Icon, iconBg, label, content }) => (
                    <div className="contact-detail" key={label}>
                        <div
                            className="contact-detail-icon"
                            style={iconBg ? { background: iconBg } : {}}
                        >
                            <Icon size={18} strokeWidth={1.6} />
                        </div>
                        <div>
                            <div className="contact-detail-label">{label}</div>
                            <div className="contact-detail-value">{content}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="contact-form-wrap">
                {submitted ? (
                    <div style={{ textAlign: 'center', padding: '60px 0' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                            <CheckCircle2
                                size={56}
                                strokeWidth={1.2}
                                style={{ color: 'var(--terracotta)' }}
                            />
                        </div>
                        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--terracotta)', marginBottom: 12 }}>
                            Message Sent!
                        </div>
                        <div style={{ fontFamily: 'var(--font-elegant)', color: 'var(--warm-gray)' }}>
                            We'll be in touch within 24 hours.
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="contact-form-title">Request a Consultation</div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Your Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Priya Sharma"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="priya@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Service Interested In</label>
                                <select name="service" value={formData.service} onChange={handleChange}>
                                    <option value="">Select a service…</option>
                                    <option>3D Relief Wall Panels</option>
                                    <option>Botanical &amp; Floral Textures</option>
                                    <option>Geometric Tile Art</option>
                                    <option>Circular Medallion Art</option>
                                    <option>Bespoke Custom Design</option>
                                    <option>Commercial Installation</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Tell Us About Your Vision</label>
                                <textarea
                                    name="message"
                                    placeholder="Describe your space, style preferences, and what you'd love to create…"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="form-submit" disabled={submitting}>
                                {submitting ? (
                                    <>Sending…</>
                                ) : (
                                    <><Send size={14} style={{ marginRight: 8 }} /> Send Message</>
                                )}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </section>
    )
}
