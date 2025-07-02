'use client'

import styles from './AdvancedSkills.module.css'
import Image from 'next/image'

const frontendSkills = [
  { src: '/skills/python.png', alt: 'Python' },
  { src: '/skills/html.png', alt: 'HTML' },
  { src: '/skills/css.png', alt: 'CSS' },
  { src: '/skills/js.png', alt: 'JavaScript' },
  { src: '/skills/react.png', alt: 'ReactJS' },
  { src: '/skills/nextjs.png', alt: 'Next.js' },
  { src: '/skills/boostrap.png', alt: 'Bootstrap 5' },
]

const toolSkills = [
  { src: '/skills/figma.png', alt: 'Figma' },
  { src: '/skills/mysql.png', alt: 'MySQL' },
  { src: '/skills/mongodb.png', alt: 'MongoDB' },
  { src: '/skills/postman.png', alt: 'Postman' },
  { src: '/skills/git.png', alt: 'Git' },
  { src: '/skills/devops.png', alt: 'DevOps' },
]

export default function AdvancedSkills() {
  return (
    <div className={styles.advancedSkills}>
      <h3 className={styles.subTitle}>Advanced Skills</h3>

      <div className={styles.skillGroup}>
        <p className={styles.category}>Languages & Frameworks</p>
        <div className={styles.skillsGrid}>
          {frontendSkills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <Image
                src={skill.src}
                alt={skill.alt}
                width={60}
                height={60}
                className={styles.skillIcon}
              />
              <span>{skill.alt}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.skillGroup}>
        <p className={styles.category}>Tools & Platforms</p>
        <div className={styles.skillsGrid}>
          {toolSkills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <Image
                src={skill.src}
                alt={skill.alt}
                width={60}
                height={60}
                className={styles.skillIcon}
              />
              <span>{skill.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
