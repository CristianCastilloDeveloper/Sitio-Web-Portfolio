"use client"

import { useEffect, useState } from "react"

export function MouseFollowBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return (
        <>
            <div
                className="fixed w-[700px] h-[700px] bg-gradient-to-br from-white/12 via-blue-400/10 to-slate-100/8 rounded-full transition-all duration-700 ease-out pointer-events-none animate-morph-slow"
                style={{
                    left: `${mousePosition.x - 350}px`,
                    top: `${mousePosition.y - 350}px`,
                    filter: 'blur(80px)',
                }}
            />
            <div
                className="fixed w-[600px] h-[600px] bg-gradient-to-br from-blue-300/10 via-white/8 to-sky-200/6 rounded-full transition-all duration-1000 ease-out pointer-events-none animate-morph-medium"
                style={{
                    left: `${mousePosition.x - 300}px`,
                    top: `${mousePosition.y - 300}px`,
                    filter: 'blur(90px)',
                }}
            />
            <div
                className="fixed w-[500px] h-[500px] bg-gradient-to-br from-slate-50/8 via-blue-200/6 to-white/5 rounded-full transition-all duration-500 ease-out pointer-events-none animate-morph-fast"
                style={{
                    left: `${mousePosition.x - 250}px`,
                    top: `${mousePosition.y - 250}px`,
                    filter: 'blur(100px)',
                }}
            />
        </>
    )
}
