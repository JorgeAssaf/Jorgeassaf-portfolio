'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site'

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
      <div className='container py-5 '>
        <section
          id='footer-content'
          aria-labelledby='footer-content-heading'
          className='flex flex-col gap-10 justify-between lg:flex-row lg:gap-20'
        >
          <section
            id='footer-branding'
            aria-labelledby='footer-branding-heading'
          >
            <Link
              aria-label='Home'
              href='/'
              className='flex items-center space-x-2'
            >
              <p className='font-bold'>
                JA<span className='text-primary'>.</span>
              </p>
            </Link>
          </section>
          <section
            id='footer-links'
            aria-labelledby='footer-links-heading'
            className='flex gap-10 flex-1 justify-between items-center'
          >
            {siteConfig.footerNav.map((item) => (
              <div key={item.title} className='space-y-3'>
                <h4 className='text-base font-medium'>{item.title}</h4>
                <ul className='space-y-3'>
                  {item.items.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        target={link?.external ? '_blank' : undefined}
                        rel={link?.external ? 'noreferrer' : undefined}
                        className='text-sm capitalize text-muted-foreground transition-colors hover:text-foreground'
                      >
                        {link.title}
                        <span className='sr-only'>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </section>
        <section
          id='footer-bottom'
          aria-labelledby='footer-bottom-heading'
          className='flex items-center space-x-4'
        >
          <div className='flex-1 text-left text-sm leading-loose text-muted-foreground'>
            Built by{' '}
            <a
              aria-label='Kickflip tutorial on YouTube'
              href='https://twitter.com/'
              target='_blank'
              rel='noreferrer'
              className='font-semibold transition-colors hover:text-foreground'
            >
              Jorge Assaf
            </a>
            .
          </div>
        </section>
      </div>
    </motion.footer>
  )
}

export default SiteFooter
