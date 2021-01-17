import React from 'react'

type LayoutProps = {
    children: React.ReactNode
}


export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            {/* Header and Footer to be added  */}
            <header></header>
            {children}
            <footer></footer>
        </div>
    )
}
