'use client'

import styles from '@/styles/sections/skills.module.css'
import AdvancedSkills from './AdvancedSkills'
import SoftSkills from './SoftSkills'
import BlobBackground from '@/components/BlobBackground'

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <BlobBackground />
      <div className={styles.container}>
        <h2 className={styles.title}>SKILLS</h2>
        <div className={styles.contentWrapper}>
          <div className={styles.left}>
            <AdvancedSkills />
          </div>
          <div className={styles.right}>
            <SoftSkills />
          </div>
        </div>
      </div>
    </section>
  )
}
