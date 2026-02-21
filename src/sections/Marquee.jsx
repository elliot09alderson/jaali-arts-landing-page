export default function Marquee() {
    const items = [
        'Wall Relief Art',
        'Textured Panels',
        '3D Sculptures',
        'Architectural Art',
        'Custom Designs',
        'Floral Motifs',
        'Geometric Patterns',
        'Premium Finishes',
    ]

    const repeated = [...items, ...items]

    return (
        <div className="marquee-strip">
            <div className="marquee-inner">
                {repeated.map((item, i) => (
                    <span key={i}>
                        {item} <span className="dot">◆</span>
                    </span>
                ))}
            </div>
        </div>
    )
}
