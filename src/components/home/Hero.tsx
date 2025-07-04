'use client'

import { useEffect, useRef } from 'react'
import styles from '@/styles/sections/hero.module.css'
import Image from 'next/image'
import { gsap } from 'gsap'
import BlobBackground from '@/components/BlobBackground'
import { FaDownload } from 'react-icons/fa'

export default function Hero() {
  const textRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    gsap.from(imgRef.current, {
      x: -80,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
    })

    gsap.from(textRef.current, {
      x: 80,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: 'power2.out',
    })
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <BlobBackground />
      <div className={styles.container}>
        <div className={styles.avatarWrapper} ref={imgRef}>
          <Image
            src="/avatar.jpg"
            alt="Avatar"
            width={400}
            height={400}
            className={styles.avatarImg}
            priority
          />
        </div>

        <div className={styles.text} ref={textRef}>
          <h1>
            Xin chào, tôi là <span className={styles.highlight}>Wiken</span>
          </h1>
          <p className={styles.slogan}>
            “My knowledge is but a grain of sand in the vast desert of discovery.”
          </p>
          <div className={styles.buttons}>
            <a
              href="https://drive.google.com/file/d/10SSComLMmNwzTjLImmQkaG8At57nhz5G/view"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              📄 Xem CV Online
            </a>
            <a
              href="/Trần Quốc Tuấn-Intern Frontend Developer.pdf"
              download
              className={styles.secondaryBtn}
            >
              <FaDownload className={styles.icon} />
              &nbsp;Tải CV PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
