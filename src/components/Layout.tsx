import React from 'react'
import Header from './Header'
import Separator from './Separator'

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
