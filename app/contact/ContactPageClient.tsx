"use client"

import { WalkingRobot } from "@/components/walking-robot"

export function ContactPageClient({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <WalkingRobot />
        </>
    )
}
