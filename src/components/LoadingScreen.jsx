export default function LoadingScreen() {
    return (
        <div className="loading-screen">
            <div className="loading-logo">
                <span>J</span>AAli <span>A</span>rts
            </div>
            <div style={{ fontFamily: 'var(--font-elegant)', fontSize: '0.9rem', fontStyle: 'italic', color: 'rgba(245,240,232,0.45)', letterSpacing: '0.1em' }}>
                Where Every Wall Tells a Story
            </div>
            <div className="loading-bar-wrap">
                <div className="loading-bar" />
            </div>
        </div>
    )
}
