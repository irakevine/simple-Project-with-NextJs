import Footer from '@/Componet/Footer'
import Navbar from '@/Componet/navbar'
import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div>
    <Navbar/>
    <h1>Hello world </h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tellus vitae ex tempor dapibus quis feugiat dolor. Proin at pulvinar lorem. Nunc at sapien iaculis, hendrerit quam eu, luctus mauris. Aenean faucibus justo nisi. Quisque eu lobortis ex. Donec pulvinar, est ac facilisis malesuada, velit diam lobortis dui,</p>

  <Link href="/txen">
  <a> see Txen listing </a>
  </Link>
  <Footer/>
  </div>
  )
}
