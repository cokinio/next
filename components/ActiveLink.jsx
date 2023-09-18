'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const style={
 color:'#0070f3',
 textDecoration:'underline'
}
export const ActiveLink = (props) => {
   let  {text, href} = props;
    
   const pathname=usePathname()
   console.log(pathname)

  return (
    <Link href={href} style={(href===pathname) ? style : null}>{text}</Link>
  )
}
