"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

interface AboutSectionClientProps {
    summary: string[]
}

export function AboutSectionClient({ summary }: AboutSectionClientProps) {
    const [displayedParagraphs, setDisplayedParagraphs] = useState<string[]>([])
    const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0)
    const [currentCharIndex, setCurrentCharIndex] = useState(0)
    const [isTyping, setIsTyping] = useState(true)

    useEffect(() => {
        if (!isTyping) return

        if (currentParagraphIndex >= summary.length) {
            setIsTyping(false)
            return
        }

        const currentParagraph = summary[currentParagraphIndex]

        if (currentCharIndex < currentParagraph.length) {
            const timeout = setTimeout(() => {
                setDisplayedParagraphs((prev) => {
                    const newParagraphs = [...prev]
                    if (!newParagraphs[currentParagraphIndex]) {
                        newParagraphs[currentParagraphIndex] = ""
                    }
                    newParagraphs[currentParagraphIndex] = currentParagraph.slice(0, currentCharIndex + 1)
                    return newParagraphs
                })
                setCurrentCharIndex((prev) => prev + 1)
            }, 1) // Velocidad de escritura (ms por carácter)

            return () => clearTimeout(timeout)
        } else {
            // Pasar al siguiente párrafo después de una pequeña pausa
            const timeout = setTimeout(() => {
                setCurrentParagraphIndex((prev) => prev + 1)
                setCurrentCharIndex(0)
            }, 300)

            return () => clearTimeout(timeout)
        }
    }, [currentCharIndex, currentParagraphIndex, summary, isTyping])

    return (
        <div className="space-y-6">
            {displayedParagraphs.map((paragraph, index) => (
                <p
                    key={index}
                    className="text-muted-foreground leading-relaxed text-lg max-w-none text-justify"
                >
                    {paragraph}
                    {index === currentParagraphIndex && currentCharIndex < summary[currentParagraphIndex]?.length && (
                        <span className="inline-block w-0.5 h-5 ml-1 bg-primary animate-pulse align-middle" />
                    )}
                </p>
            ))}
            <div className="pt-2">
                <Link
                    href="/resume"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 group transition-all duration-300"
                >
                    <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
                    <span className="underline underline-offset-4 decoration-primary/30 group-hover:decoration-primary/60 transition-all font-medium">
                        Ver mi currículum completo
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    )
}
