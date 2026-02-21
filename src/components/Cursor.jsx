import { useEffect, useRef } from 'react'

export default function Cursor() {
    const cursorRef = useRef(null)
    const followerRef = useRef(null)

    useEffect(() => {
        const cursor = cursorRef.current
        const follower = followerRef.current
        let mouseX = 0, mouseY = 0
        let followerX = 0, followerY = 0

        const handleMouseMove = (e) => {
            mouseX = e.clientX
            mouseY = e.clientY
            cursor.style.left = mouseX + 'px'
            cursor.style.top = mouseY + 'px'
        }

        const animate = () => {
            followerX += (mouseX - followerX) * 0.1
            followerY += (mouseY - followerY) * 0.1
            follower.style.left = followerX + 'px'
            follower.style.top = followerY + 'px'
            requestAnimationFrame(animate)
        }

        const handleMouseEnter = () => {
            cursor.classList.add('hovered')
            follower.classList.add('hovered')
        }
        const handleMouseLeave = () => {
            cursor.classList.remove('hovered')
            follower.classList.remove('hovered')
        }

        const interactables = document.querySelectorAll('a, button, .gallery-item, .service-card')
        interactables.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter)
            el.addEventListener('mouseleave', handleMouseLeave)
        })

        window.addEventListener('mousemove', handleMouseMove)
        animate()

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <>
            <div className="cursor" ref={cursorRef} />
            <div className="cursor-follower" ref={followerRef} />
        </>
    )
}
