import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav>
    <Link href="/">Home</Link>
    <Link href="pagina">Pagina</Link>
    <Link href="/blog">Blog</Link>
  </nav>

  )
}

export default NavBar