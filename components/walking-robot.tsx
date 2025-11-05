"use client"

import { useState, useEffect } from "react"

export function WalkingRobot() {
    const [position, setPosition] = useState({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: 0 })
    const [direction, setDirection] = useState<'right' | 'left'>('right')
    const [isWalking, setIsWalking] = useState(true)
    const [currentAnimation, setCurrentAnimation] = useState<string>('')
    const [velocity, setVelocity] = useState({ x: 1, y: 0 })
    const [isJumping, setIsJumping] = useState(false)

    // Animaciones aleatorias disponibles
    const animations = [
        'dance',
        'jump',
        'spin',
        'wave',
        'backflip',
        'shake',
        'moonwalk',
        'celebrate',
        'thinking',
        'confused',
        'excited',
        'sleep',
        'workout',
        'floating',
    ]

    // Caminar automáticamente
    useEffect(() => {
        if (!isWalking || currentAnimation) return

        const interval = setInterval(() => {
            setPosition((prev) => {
                let newX = prev.x + (direction === 'right' ? velocity.x : -velocity.x)
                let newY = prev.y

                // Rebotar en los bordes
                if (newX > window.innerWidth - 100) {
                    setDirection('left')
                    newX = window.innerWidth - 100
                } else if (newX < 0) {
                    setDirection('right')
                    newX = 0
                }

                // Simular gravedad si está saltando
                if (isJumping) {
                    newY = prev.y + velocity.y
                    setVelocity((v) => ({ ...v, y: v.y + 0.5 }))

                    if (newY >= 0) {
                        newY = 0
                        setIsJumping(false)
                        setVelocity((v) => ({ ...v, y: 0 }))
                    }
                }

                return { x: newX, y: newY }
            })
        }, 30)

        return () => clearInterval(interval)
    }, [isWalking, currentAnimation, direction, velocity, isJumping])

    // Manejar click para activar animación aleatoria
    const handleClick = () => {
        if (currentAnimation) return

        const randomAnimation = animations[Math.floor(Math.random() * animations.length)]
        setCurrentAnimation(randomAnimation)
        setIsWalking(false)

        // Si es salto, activar física
        if (randomAnimation === 'jump' || randomAnimation === 'backflip' || randomAnimation === 'floating') {
            setIsJumping(true)
            setVelocity((v) => ({ ...v, y: randomAnimation === 'floating' ? -10 : -15 }))
        }

        // Duración de la animación
        let duration = 1000
        if (randomAnimation === 'backflip') duration = 1500
        if (randomAnimation === 'sleep') duration = 2500
        if (randomAnimation === 'workout') duration = 2000
        if (randomAnimation === 'floating') duration = 3000

        setTimeout(() => {
            setCurrentAnimation('')
            setIsWalking(true)
        }, duration)
    }

    return (
        <>
            <div
                className={`fixed z-50 cursor-pointer transition-transform ${direction === 'left' ? 'scale-x-[-1]' : ''
                    } ${currentAnimation ? `robot-${currentAnimation}` : 'robot-walk'}`}
                style={{
                    left: `${position.x}px`,
                    bottom: `${Math.max(0, -position.y)}px`,
                    width: '80px',
                    height: '100px',
                }}
                onClick={handleClick}
            >
                {/* Cabeza */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg border-2 border-blue-300">
                    {/* Antena */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1 h-3 bg-blue-500"></div>
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>

                    {/* Ojos */}
                    <div className="absolute top-3 left-2 w-3 h-3 bg-white rounded-full">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-1 ml-1"></div>
                    </div>
                    <div className="absolute top-3 right-2 w-3 h-3 bg-white rounded-full">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-1 ml-1"></div>
                    </div>

                    {/* Boca */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-gray-800 rounded-full"></div>
                </div>

                {/* Cuerpo */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-14 h-16 bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg shadow-lg border-2 border-slate-300">
                    {/* Panel de botones */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full" style={{ animationDelay: '0.3s' }}></div>
                        <div className="w-2 h-2 bg-red-400 rounded-full" style={{ animationDelay: '0.6s' }}></div>
                    </div>
                </div>

                {/* Brazo izquierdo */}
                <div className="robot-arm-left absolute top-14 -left-2 w-3 h-10 bg-gradient-to-b from-slate-400 to-slate-500 rounded-full shadow border border-slate-300"></div>

                {/* Brazo derecho */}
                <div className="robot-arm-right absolute top-14 -right-2 w-3 h-10 bg-gradient-to-b from-slate-400 to-slate-500 rounded-full shadow border border-slate-300"></div>

                {/* Pierna izquierda */}
                <div className="robot-leg-left absolute bottom-0 left-4 w-4 h-14 bg-gradient-to-b from-slate-500 to-slate-700 rounded-lg shadow border border-slate-400">
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-2 bg-slate-800 rounded-full"></div>
                </div>

                {/* Pierna derecha */}
                <div className="robot-leg-right absolute bottom-0 right-4 w-4 h-14 bg-gradient-to-b from-slate-500 to-slate-700 rounded-lg shadow border border-slate-400">
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-2 bg-slate-800 rounded-full"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes walk-legs {
                    0%, 100% {
                        transform: rotate(0deg);
                    }
                    25% {
                        transform: rotate(-15deg);
                    }
                    75% {
                        transform: rotate(15deg);
                    }
                }

                @keyframes walk-arms {
                    0%, 100% {
                        transform: rotate(0deg);
                    }
                    25% {
                        transform: rotate(15deg);
                    }
                    75% {
                        transform: rotate(-15deg);
                    }
                }

                .robot-walk .robot-leg-left {
                    animation: walk-legs 0.6s ease-in-out infinite;
                    transform-origin: top center;
                }

                .robot-walk .robot-leg-right {
                    animation: walk-legs 0.6s ease-in-out infinite;
                    animation-delay: 0.3s;
                    transform-origin: top center;
                }

                .robot-walk .robot-arm-left {
                    animation: walk-arms 0.6s ease-in-out infinite;
                    transform-origin: top center;
                }

                .robot-walk .robot-arm-right {
                    animation: walk-arms 0.6s ease-in-out infinite;
                    animation-delay: 0.3s;
                    transform-origin: top center;
                }

                @keyframes dance {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    25% { transform: translateY(-10px) rotate(-5deg); }
                    50% { transform: translateY(-15px) rotate(5deg); }
                    75% { transform: translateY(-10px) rotate(-5deg); }
                }

                .robot-dance {
                    animation: dance 0.5s ease-in-out 2;
                }

                @keyframes jump-animation {
                    0% { transform: translateY(0) scaleY(1); }
                    30% { transform: translateY(0) scaleY(0.8); }
                    50% { transform: translateY(-50px) scaleY(1.1); }
                    70% { transform: translateY(-50px) scaleY(0.9); }
                    100% { transform: translateY(0) scaleY(1); }
                }

                .robot-jump {
                    animation: jump-animation 0.8s ease-in-out;
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(720deg); }
                }

                .robot-spin {
                    animation: spin 1s ease-in-out;
                }

                @keyframes wave-arm {
                    0%, 100% { transform: rotate(0deg); }
                    25%, 75% { transform: rotate(-45deg); }
                    50% { transform: rotate(-60deg); }
                }

                .robot-wave .robot-arm-right {
                    animation: wave-arm 0.5s ease-in-out 3;
                    transform-origin: top center;
                }

                @keyframes backflip {
                    0% { transform: rotate(0deg) translateY(0); }
                    50% { transform: rotate(180deg) translateY(-60px); }
                    100% { transform: rotate(360deg) translateY(0); }
                }

                .robot-backflip {
                    animation: backflip 1.5s ease-in-out;
                }

                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                    20%, 40%, 60%, 80% { transform: translateX(5px); }
                }

                .robot-shake {
                    animation: shake 0.5s ease-in-out 2;
                }

                @keyframes moonwalk {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(-20px); }
                }

                .robot-moonwalk {
                    animation: moonwalk 0.4s ease-in-out 3;
                }

                @keyframes celebrate {
                    0%, 100% { transform: translateY(0) scale(1); }
                    25% { transform: translateY(-20px) scale(1.1) rotate(-10deg); }
                    50% { transform: translateY(-10px) scale(1.15) rotate(10deg); }
                    75% { transform: translateY(-20px) scale(1.1) rotate(-10deg); }
                }

                .robot-celebrate {
                    animation: celebrate 0.4s ease-in-out 3;
                }

                .robot-celebrate .robot-arm-left,
                .robot-celebrate .robot-arm-right {
                    animation: celebrate-arms 0.4s ease-in-out 3;
                    transform-origin: top center;
                }

                @keyframes celebrate-arms {
                    0%, 100% { transform: rotate(0deg); }
                    50% { transform: rotate(-90deg); }
                }

                @keyframes thinking {
                    0%, 100% { transform: rotate(0deg); }
                    50% { transform: rotate(10deg); }
                }

                .robot-thinking {
                    animation: thinking 1s ease-in-out;
                }

                .robot-thinking .robot-arm-right {
                    animation: thinking-arm 1s ease-in-out;
                    transform-origin: top center;
                }

                @keyframes thinking-arm {
                    0%, 100% { transform: rotate(0deg); }
                    30%, 70% { transform: rotate(-120deg); }
                }

                @keyframes confused {
                    0%, 100% { transform: rotate(0deg); }
                    15% { transform: rotate(-15deg); }
                    30% { transform: rotate(15deg); }
                    45% { transform: rotate(-15deg); }
                    60% { transform: rotate(15deg); }
                    75% { transform: rotate(-10deg); }
                }

                .robot-confused {
                    animation: confused 1s ease-in-out;
                }

                @keyframes excited {
                    0%, 100% { transform: scale(1) rotate(0deg); }
                    10%, 30%, 50%, 70%, 90% { transform: scale(1.1) rotate(-5deg) translateY(-10px); }
                    20%, 40%, 60%, 80% { transform: scale(1.15) rotate(5deg) translateY(-15px); }
                }

                .robot-excited {
                    animation: excited 1s ease-in-out;
                }

                @keyframes sleep {
                    0%, 100% { transform: rotate(0deg) translateY(0); }
                    20%, 80% { transform: rotate(90deg) translateY(10px) translateX(20px); }
                }

                .robot-sleep {
                    animation: sleep 2.5s ease-in-out;
                }

                @keyframes workout-push {
                    0%, 100% { transform: scaleX(1); }
                    50% { transform: scaleX(1.2); }
                }

                @keyframes workout-arms {
                    0%, 100% { transform: rotate(0deg); }
                    50% { transform: rotate(-90deg); }
                }

                .robot-workout {
                    animation: workout-push 0.4s ease-in-out 5;
                }

                .robot-workout .robot-arm-left,
                .robot-workout .robot-arm-right {
                    animation: workout-arms 0.4s ease-in-out 5;
                    transform-origin: top center;
                }

                @keyframes floating {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    25% { transform: translateY(-30px) rotate(5deg); }
                    50% { transform: translateY(-50px) rotate(0deg); }
                    75% { transform: translateY(-30px) rotate(-5deg); }
                }

                .robot-floating {
                    animation: floating 3s ease-in-out;
                }
            `}</style>
        </>
    )
}
