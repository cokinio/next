import Image from 'next/image'
import NavBar from "@/components/NavBar"

export default function Home() {
  return (
    <>
    <NavBar/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
      hOME.
    </p>
    
    </main>
    </>
)
}
