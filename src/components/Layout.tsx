import type { ReactNode } from "react"
import type React from "react"

interface LayoutProps {
    children: ReactNode
}

export function Layout({ children}: LayoutProps) {
    return (
        <div className="min-h-screen p-4 bg-bg">
            {children}
        </div>
    )
}