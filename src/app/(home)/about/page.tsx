import { Header } from '@/components/header'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import { FramerDiv } from '@/components/framer'
import type { Metadata } from 'next'
import { Next, React, Tailwind, Typescript, Prisma } from '@/components/icons'

export const metadata: Metadata = {
  title: 'About me',
  description:
    'I am a front-end web developer with experience in JavaScript, React, Next.js and Astro. My goal is to become a FullStack programmer. I enjoy creating beautiful and easy to use web applications that connect with users. I am always looking for new opportunities to grow and collaborate on exciting projects.',
}

const AboutPage = () => {
  return (
    <>
      <Header title='About me' page />
      <FramerDiv
        initial='hidden'
        animate='show'
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className=' max-w-[75ch] mx-auto'
      >
        <FramerDiv variants={FADE_DOWN_ANIMATION_VARIANTS}>
          <p className='leading-7 md:text-lg [&:not(:first-child)]:mt-6'>
            I&apos;m a front-end web developer with experience in JavaScript,
            React, Next.js and Astro. My goal is to become a FullStack
            programmer. I enjoy creating beautiful and easy to use web
            applications that connect with users. I am always looking for new
            opportunities to grow and collaborate on exciting projects.
          </p>
        </FramerDiv>
        <FramerDiv
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='my-10 flex flex-col justify-center items-center'
        >
          <h3 className='text-3xl font-bold '>Experience</h3>
          <section className='my-5'>
            <ol className='relative border-l-2'>
              <li className='mb-10 ml-4'>
                <div className='absolute w-3 h-3 bg-muted-foreground rounded-full mt-1.5 -left-[0.43rem] border border-muted-foreground'></div>
                <time className='mb-1 text-sm font-thin leading-none '>
                  June 2023 - Present
                </time>
                <h3 className='text-lg font-semibold'>
                  Frontend Developer at{' '}
                  <a
                    href='https://omaka.mx'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-primary underline hover:text-primary/90 transition-colors'
                  >
                    Omaka
                  </a>
                </h3>
                <p className='mb-4 text-base font-normal text-muted-foreground'>
                  I am currently working as a Frontend Developer at Omaka.
                  Working on a project that is being developed with Next.js,
                  Tailwind CSS, Redux and Typescript.
                </p>
              </li>
            </ol>
          </section>
        </FramerDiv>
        <FramerDiv
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='flex flex-col justify-center items-center'
        >
          <h3 className='text-3xl font-bold '>My stack</h3>
          <div className='flex gap-5 my-7 items-center justify-center flex-wrap'>
            <div className='flex justify-center gap-y-1 flex-col items-center'>
              <React className='w-7 h-7' />
              <span>React</span>
            </div>
            <div className='flex justify-center gap-y-1 flex-col items-center'>
              <Next className='w-7 h-7' />
              <span>Next</span>
            </div>
            <div className='flex justify-center gap-y-1 flex-col items-center'>
              <Tailwind className='w-7 h-7' />
              <span>Tailwind</span>
            </div>
            <div className='flex justify-center gap-y-1 flex-col items-center'>
              <Typescript className='w-7 h-7' />
              <span>Typescript</span>
            </div>
            <div className='flex justify-center gap-y-1 flex-col items-center'>
              <Prisma className='w-7 h-7' />
              <span>Prisma</span>
            </div>
          </div>
        </FramerDiv>
      </FramerDiv>
    </>
  )
}

export default AboutPage
