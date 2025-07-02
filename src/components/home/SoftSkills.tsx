'use client'

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import styles from './SoftSkills.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  adaptiveHeight: true,
  cssEase: 'ease-in-out',
}

const softSkillsData = [
  {
    title: 'Khám phá & nghiên cứu công nghệ mới',
    images: [
      '/soft/amazon1.jpg',
      '/soft/amazon2.jpg',
      '/soft/amazon3.jpg',
      '/soft/amazon4.png',
    ],
    caption: 'Luôn tìm tòi công nghệ mới để nâng cao năng lực giải quyết vấn đề.',
  },
  {
    title: 'Thích ứng và làm việc nhóm linh hoạt',
    images: [
      '/soft/group1.jpg',
      '/soft/group2.jpg',
      '/soft/group3.jpg',
      '/soft/group4.png',
      '/soft/group5.jpg',
      '/soft/group6.png',
      '/soft/group7.png',
      '/soft/group8.png',
      '/soft/group9.png',
    ],
    caption: 'Giao tiếp rõ ràng, thích nghi nhanh chóng và cộng tác hiệu quả.',
  },
  {
    title: 'Kỹ năng trình bày quan điểm rõ ràng',
    staticImage: '/soft/class.png',
    caption: 'Diễn đạt ý tưởng logic, truyền đạt thông điệp thuyết phục và ngắn gọn.',
  },
]

export default function SoftSkills() {
  return (
    <section className={styles.softSkills}>
      <h2 className={styles.subTitle}>Soft Skills</h2>

      {softSkillsData.map((skill, idx) => (
        <div key={idx} className={styles.softBlock}>
          <h4>{skill.title}</h4>

          {skill.images ? (
            <Slider {...sliderSettings} className={styles.carousel}>
              {skill.images.map((src, i) => (
                <div key={i} className={styles.sliderItem}>
                  <Image
                    src={src}
                    alt={`${skill.title}-${i}`}
                    fill
                    className={styles.sliderImg}
                    unoptimized
                    priority
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <div className={styles.staticImage}>
              <Image
                src={skill.staticImage}
                alt={skill.title}
                fill
                className={styles.sliderImg}
                unoptimized
                priority
              />
            </div>
          )}

          <p className={styles.skillCaption}>{skill.caption}</p>
        </div>
      ))}
    </section>
  )
}
