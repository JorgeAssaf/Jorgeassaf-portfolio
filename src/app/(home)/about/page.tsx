import Aboutme from '@/components/about-me'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About me',
  description:
    'I am a front-end web developer with experience in JavaScript, React, Next.js and Astro. My goal is to become a FullStack programmer. I enjoy creating beautiful and easy to use web applications that connect with users. I am always looking for new opportunities to grow and collaborate on exciting projects.',
}

const AboutPage = () => {
  return <Aboutme />
}

export default AboutPage
