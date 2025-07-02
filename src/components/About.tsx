'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from '@/styles/sections/about.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const el = sectionRef.current

    gsap.fromTo(
      el.querySelectorAll(`.${styles.fadeSlide}`),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    const img = el.querySelector(`.${styles.studentCard}`)
    if (img) {
      gsap.fromTo(
        img,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          delay: 0.5,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      )
    }
  }, [])

  return (
    <section className={styles.aboutSection} id="about" ref={sectionRef}>
      <div className={styles.overlay}></div>

      <div className={styles.contentWrapper}>
        <h2 className={`${styles.title} ${styles.fadeSlide}`}>ABOUT ME</h2>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.column}>
              <p><strong>Full Name:</strong> Trần Quốc Tuấn</p>
              <p><strong>GPA:</strong> 3.25</p>
              <p><strong>Major:</strong> Software Engineering</p>

              <p><strong>Target:</strong></p>
              <ul className={styles.fadeSlide}>
                <li>Become a professional FullStack Developer</li>
                <li>Dedicate at least 10 hours per week to study and development</li>
                <li>Complete at least 3 real-world web projects</li>
                <li>Develop a personal portfolio website</li>
              </ul>

              <p><strong>Strengths:</strong></p>
              <ul className={styles.fadeSlide}>
                <li>Quick Learner</li>
                <li>Team Collaboration</li>
                <li>Strong Logical Thinking</li>
              </ul>
            </div>

            <div className={styles.column}>
              <p><strong>Year of birth:</strong> 2003</p>
              <p><strong>Study In:</strong> Văn Lang University</p>

              <p><strong>Hobbies:</strong></p>
              <ul className={styles.fadeSlide}>
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Exploring New Tech</li>
              </ul>

              <p><strong>Languages:</strong></p>
              <ul className={styles.fadeSlide}>
                <li>Vietnamese (native)</li>
                <li>English</li>
              </ul>
            </div>
          </div>

          <div className={`${styles.imageWrapper} ${styles.fadeSlide}`}>
            <Image
              src="/student-card.png"
              alt="Student Card"
              fill
              style={{ objectFit: 'cover' }}
              className={styles.studentCard}
              priority
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
