'use client'
import { Fiverr, LinkedIn } from '@/components/icons'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'

const SiteFooter = () => {
  return (
    <motion.footer
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
      className='w-full border-t bg-background my-10'
    >
      <div className='container py-7 '>
        <div className='scroll-m-20 flex  gap-5 justify-between items-center'>
          <div>
            <h3 className='scroll-m-20 text-3xl font-semibold mb-5 tracking-tight'>
              Let&apos;s talk
            </h3>
            <h4 className='scroll-m-20 text-base tracking-tight '>
              Send me message on LinkedIn or Fiverr.
            </h4>
          </div>

          <div className='flex gap-5'>
            <Link
              href='https://www.linkedin.com/in/jorge-enrique-assaf/'
              target='_blank'
              rel='noreferrer'
              className={cn(buttonVariants())}
            >
              <LinkedIn className='w-6 h-6' />
              <span className='sr-only'>LinkedIn</span>
            </Link>
            <Link
              href='https://www.fiverr.com/jorgeassaf/custom-landing-pages-for-your-business-or-personal-projects?utm_campaign=gigs_show&utm_medium=shared&utm_source=copy_link&utm_term=gl40al'
              target='_blank'
              rel='noreferrer noopener'
              className={cn(buttonVariants())}
            >
              <Fiverr className='w-12 h-12 md:w-14 md:h-14' />
              <span className='sr-only'>Fiverr</span>
            </Link>
          </div>
        </div>
        <p className='mt-10 '>Built by Jorge Assaf.</p>
        <p>
          Model by{' '}
          <Link
            target='_blank'
            href='https://www.craftz.dog/'
            rel='noopener noreferrer'
            className={cn(
              buttonVariants({
                variant: 'link',
              }),
              'p-0'
            )}
          >
            Takuya Matsuyama.
          </Link>
        </p>
      </div>
    </motion.footer>
  )
}

export default SiteFooter
