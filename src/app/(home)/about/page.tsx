import type { Metadata } from 'next'
import Link from 'next/link'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'

import { FramerDiv } from '@/components/framer'
import { Header } from '@/components/header'
import { Next, Prisma, React, Tailwind, Typescript } from '@/components/icons'

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
        className=' mx-auto max-w-[75ch]'
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
          className='my-10 flex flex-col items-center justify-center'
        >
          <h3 className='text-3xl font-bold '>Experience</h3>
          <section className='my-5'>
            <ol className='relative border-l-2'>
              <li className='mb-10 ml-4'>
                <div className='absolute left-[-0.43rem] mt-1.5 size-3 rounded-full border border-muted-foreground bg-muted-foreground' />
                <time className='mb-1 text-sm font-thin leading-none '>
                  August 2023 - Present
                </time>

                <h3 className='text-lg font-semibold'>
                  Frontend Developer at{' '}
                  <span className='text-primary '>Pawtrics Software</span>
                </h3>
                <h4 className='my-1 text-sm font-normal text-primary/80'>
                  Florida - <span>Remote</span>
                </h4>
                <p className='mb-4 text-base font-normal text-muted-foreground'>
                  I am currently working as a Frontend Developer at Pawtrics
                  Software. Working on a project that is being developed with
                  Next.js, Tailwind CSS, Redux and Typescript.
                </p>
              </li>
              <li className='mb-10 ml-4'>
                <div className='absolute left-[-0.43rem] mt-1.5 size-3 rounded-full border border-muted-foreground bg-muted-foreground' />
                <time className='mb-1 text-sm font-thin leading-none '>
                  June 2023 - Present
                </time>
                <h3 className='text-lg font-semibold'>
                  Frontend Developer at{' '}
                  <Link
                    href='https://omaka.mx'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-primary underline transition-colors hover:text-primary/90'
                  >
                    Omaka
                  </Link>
                </h3>
                <h4 className='my-1 text-sm font-normal text-primary/80'>
                  México - <span>Remote</span>
                </h4>
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
          className='flex flex-col items-center justify-center'
        >
          <h3 className='text-3xl font-bold '>My stack</h3>
          <div className='my-7 flex flex-wrap items-center justify-center gap-5'>
            <div className='flex flex-col items-center justify-center gap-y-1'>
              <React className='size-7' />
              <span>React</span>
            </div>
            <div className='flex flex-col items-center justify-center gap-y-1'>
              <Next className='size-7' />
              <span>Next</span>
            </div>
            <div className='flex flex-col items-center justify-center gap-y-1'>
              <Tailwind className='size-7' />
              <span>Tailwind</span>
            </div>
            <div className='flex flex-col items-center justify-center gap-y-1'>
              <Typescript className='size-7' />
              <span>Typescript</span>
            </div>
            <div className='flex flex-col items-center justify-center gap-y-1'>
              <Prisma className='size-7' />
              <span>Prisma</span>
            </div>
          </div>
        </FramerDiv>
      </FramerDiv>
    </>
  )
}

export default AboutPage
