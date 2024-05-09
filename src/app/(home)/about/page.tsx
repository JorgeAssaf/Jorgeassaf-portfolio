import type { Metadata } from 'next'
import Link from 'next/link'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import { Formaters } from '@/helpers/formaters'

import { JOB_EXPERIENCE } from '@/config/experience'
import { FramerDiv } from '@/components/framer'
import { Next, Prisma, React, Tailwind, Typescript } from '@/components/icons'
import { MyResumen } from '@/components/my-resumen'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'About me',
  description:
    'I am a front-end web developer with experience in JavaScript, React, Next.js and Astro. My goal is to become a FullStack programmer. I enjoy creating beautiful and easy to use web applications that connect with users. I am always looking for new opportunities to grow and collaborate on exciting projects.',
}

export default function AboutPage() {
  return (
    <>
      <PageHeader title='About me' page />
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
          <p className=' leading-7 text-foreground/70 md:text-lg [&:not(:first-child)]:mt-6'>
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
          <MyResumen />
        </FramerDiv>

        <FramerDiv
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='my-10 flex flex-col items-center justify-center'
        >
          <h3 className='text-3xl font-bold '>Experience</h3>
          <section className='my-5'>
            <ol className='relative border-l-2'>
              {JOB_EXPERIENCE.map((job, index) => (
                <li className='mb-10 ml-4' key={index}>
                  <div className='absolute left-[-0.43rem] mt-1.5 size-3 rounded-full border border-muted-foreground bg-muted-foreground' />
                  <time
                    className='mb-1 text-sm font-thin leading-none '
                    dateTime={job.startDate}
                  >
                    {`${Formaters.formatDateTime(job.startDate, 'MMMM y')} - ${job.endDate ? Formaters.formatDateTime(job.endDate, 'MMMM y') : 'Present'}`}
                  </time>

                  <h3 className='text-lg font-semibold'>
                    {job.ocupation} at{' '}
                    <Link
                      href='https://likasoftware.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary underline transition-colors hover:text-primary/90'
                    >
                      {job.company}
                    </Link>
                  </h3>
                  <h4 className='my-1 text-sm font-normal text-primary/80'>
                    {job.location}
                  </h4>
                  <p className='mb-4 text-base font-normal text-muted-foreground'>
                    {job.description}
                  </p>
                </li>
              ))}
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
