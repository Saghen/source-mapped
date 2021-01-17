import React from 'react'
import Header from './Header'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header title={'Source Mapped'} />
      {children}
      <footer></footer>
    </div>
  )
}
