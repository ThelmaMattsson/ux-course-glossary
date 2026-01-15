import type { ReactNode } from "react"
import type React from "react"

interface LayoutProps {
    children: ReactNode
}

export function Layout({ children}: LayoutProps) {
    return (
        <div className="flex-1 p-4 bg-slate-100 gap-4 overflow-auto">
            {children}
        </div>
    )
}