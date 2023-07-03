import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learning NextJs',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <div class="navbar">
    <a href="#" class="home-link">Home</a>
    <div class="dropdown">
      <button class="dropbtn">     Other
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">Contents
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">Uma CL</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">    About Me
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">Who am I?</a>
        <a href="#">My pp</a>
        <a href="#">My pages</a>
      </div>
    </div>
    </div>{children}
  </html>
  )
}
