'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site'
import { Icons } from '../icons'
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
              Send me an email or sendme a message on LinkedIn
            </h4>
          </div>

          <div className='flex gap-5'>
            <Link
              href='mailto:jorgeassaf160@gmail.com'
              className={cn(buttonVariants({
                variant: 'default',
              }))}
            >
              <Icons.mail className='w-6 h-6' />
              <span className='sr-only'>Mail</span>
            </Link>
            <Link
              href='https://www.linkedin.com/in/jorge-enrique-assaf/'
              target='_blank'
              rel='noreferrer'
              className={cn(buttonVariants({
                variant: 'default',
              }))}

            >
              <Icons.linkedIn className='w-6 h-6' />
              <span className='sr-only'>LinkedIn</span>
            </Link>
          </div>
        </div>
        <p className='mt-10 '>Built by Jorge Assaf.</p>
      </div>
    </motion.footer>
  )
}

export default SiteFooter
//   < div className = 'container py-5 ' >
//     <section
//       id='footer-content'
//       aria-labelledby='footer-content-heading'
//       className='flex flex-col gap-10 justify-between lg:flex-row lg:gap-20'
//     >
//       <section
//         id='footer-branding'
//         aria-labelledby='footer-branding-heading'
//       >
//         <Link
//           aria-label='Home'
//           href='/'
//           className='flex items-center space-x-2'
//         >
//           <p className='font-bold'>
//             JA<span className='text-primary'>.</span>
//           </p>
//         </Link>
//       </section>
//       <section
//         id='footer-links'
//         aria-labelledby='footer-links-heading'
//         className='flex gap-10 flex-1 justify-between items-center'
//       >
//         {siteConfig.footerNav.map((item) => (
//           <div key={item.title} className='space-y-3'>
//             <h4 className='text-base font-medium'>{item.title}</h4>
//             <ul className='space-y-3'>
//               {item.items.map((link) => (
//                 <li key={link.title}>
//                   <Link
//                     href={link.href}
//                     target={link?.external ? '_blank' : undefined}
//                     rel={link?.external ? 'noreferrer' : undefined}
//                     className='text-sm capitalize text-muted-foreground transition-colors hover:text-foreground'
//                   >
//                     {link.title}
//                     <span className='sr-only'>{link.title}</span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </section>
//     </section>
// {/* <Link
//           href={siteConfig.sourceCode}
//           target='_blank'
//           rel='noreferrer'
//           className='ml-1 font-semibold transition-colors hover:text-foreground'
//         >
//           <Icons.gitHub className='w-4 h-4' />
//           <span className='sr-only'>sourceCode</span>
//         </Link>  */}
// <section id='footer-bottom' aria-labelledby='footer-bottom-heading'>
//   <div className='flex text-left text-sm items-center leading-loose text-muted-foreground'>
//     <p className='font-semibold transition-colors hover:text-foreground'>
//       Built by Jorge Assaf.
//     </p>
//   </div>
// </section>
//       </ >
