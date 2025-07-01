'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { FaDownload } from 'react-icons/fa'
import styles from '@/styles/navbar.module.css'

const navLinks = [
  { href: '#hero', label: 'Trang chủ' },
  { href: '#about', label: 'Về tôi' },
  { href: '#skills', label: 'Kỹ năng' },
  { href: '#projects', label: 'Dự án' },
  { href: '#contact', label: 'Liên hệ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="Logo" width={48} height={48} className={styles.avatar} />
          </Link>

          <nav className={styles.desktopNav}>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.navLink}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/Trần Quốc Tuấn-Intern Frontend Developer.pdf"
              download
              className={`${styles.navLink} ${styles.cvButton}`}
            >
              <FaDownload style={{ marginRight: 6 }} />&nbsp;
              Tải CV
            </a>
          </nav>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} color="#FFD700" /> : <Menu size={28} color="#FFD700" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className={styles.mobileMenu}>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/Trần Quốc Tuấn-Intern Frontend Developer.pdf"
              download
              className={`${styles.navLink} ${styles.cvButton}`}
            >
              <FaDownload style={{ marginRight: 6 }} />&nbsp;
              Tải CV
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
