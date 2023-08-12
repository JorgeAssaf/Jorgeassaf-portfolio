'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, LinkedIn } from '@/components/icons'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'

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
              Send me message on LinkedIn
            </h4>
          </div>

          <div className='flex gap-5'>
            <Link
              href='https://www.linkedin.com/in/jorge-enrique-assaf/'
              target='_blank'
              rel='noreferrer'
              className={cn(
                buttonVariants({
                  variant: 'default',
                }),
              )}
            >
              <LinkedIn className='w-6 h-6' />
              <span className='sr-only'>LinkedIn</span>
            </Link>
          </div>
        </div>
        <p className='mt-10 '>Built by Jorge Assaf.</p>
        <p>
          Model by{' '}
          <Link
            target='_blank'
            href='https://github.com/craftzdog'
            className={cn(
              buttonVariants({
                variant: 'link',
              }),
              'p-0',
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