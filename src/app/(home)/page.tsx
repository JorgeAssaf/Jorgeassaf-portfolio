'use client'
import Image from 'next/image'
import Link from 'next/link'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Hero from '@/components/hero'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <Hero />
      <motion.div
        initial='hidden'
        animate='show'
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.div
          className='flex flex-col justify-center items-center animate-pulse'
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          Scroll
          <ArrowDown className='w-5 h-5 animate-bounce ' />
        </motion.div>
      </motion.div>

      <motion.section
        initial='hidden'
        animate='show'
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className='grid grid-cols-1 gap-5 ls:grid-cols-2 '
      >
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
          <Card>
            <CardHeader className='border-b bg-card p-0'>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src='/netflix-clone.png'
                  alt='Netflix Clone'
                  sizes='(min-width: 640px) 640px, 100vw'
                  fill
                  loading='lazy'
                />
                {/* ) : (
                  <div
                    aria-label="Placeholder"
                    role="img"
                    aria-roledescription="placeholder"
                    className="flex h-full w-full items-center justify-center bg-secondary"
                  >
                    <Icons.placeholder
                      className="h-9 w-9 text-muted-foreground"
                      aria-hidden="true"
                    />
                  </div>
                )} */}
              </AspectRatio>
            </CardHeader>

            <CardContent>
              <CardTitle className='line-clamp-1 text-2xl my-3'>
                Recipely
              </CardTitle>
              <CardDescription className='text-base '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </CardDescription>
              <div></div>
              <CardFooter
                className={cn('p-0 flex justify-between items-center', 'mt-3')}
              >
                <div className='flex items-center gap-5'>
                  <Link
                    href=''
                    className={cn(
                      buttonVariants({
                        className: cn(
                          'font-medium bg-primary  transition-colors ',
                        ),
                      }),
                    )}
                  >
                    View Code
                  </Link>
                  <Link
                    href=''
                    className={buttonVariants({
                      variant: 'outline',
                      className: cn(
                        'font-medium border border-primary transition-colors  ',
                      ),
                    })}
                  >
                    Live Demo
                  </Link>
                </div>
              </CardFooter>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </main>
  )
}
