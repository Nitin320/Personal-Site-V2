import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <header>
        <NavBar/>
      </header>
    </main>
  )
}

export function NavBar() {
  return (
    <h1></h1>
  );
}
