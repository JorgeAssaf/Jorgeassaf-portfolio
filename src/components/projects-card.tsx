import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'

import { cn } from '@/lib/utils'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Placeholder } from '@/components/icons'
import type { Projects } from '@/app/types/sanity'

interface ProjectsCardProps {
  projects: Projects[]
}

const ProjectsCard: FC<ProjectsCardProps> = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <Card
          key={project._id}
          className={cn('flex size-full flex-col overflow-hidden rounded-md')}
        >
          <CardHeader className='h-auto w-full space-y-0 border-b p-0'>
            <AspectRatio ratio={16 / 9}>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project?.name}
                  sizes='100vw'
                  fill
                  priority
                />
              ) : (
                <div
                  aria-label='Placeholder'
                  role='img'
                  aria-roledescription='placeholder'
                  className='flex size-full items-center justify-center'
                >
                  <Placeholder
                    className='size-14 text-muted-foreground'
                    aria-hidden='true'
                  />
                </div>
              )}
            </AspectRatio>
          </CardHeader>

          <CardContent className={cn('flex flex-1 flex-col justify-between')}>
            <CardTitle className={cn('my-3 line-clamp-1 text-2xl')}>
              {project.name}
            </CardTitle>

            <div className='prose-p:font-medium'>
              <PortableText value={project.content} />
            </div>

            <div className='my-3 flex flex-wrap items-center gap-3'>
              {project.technologies.map((technologie) => (
                <TooltipProvider key={technologie.name} delayDuration={250}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Image
                        className={cn(
                          technologie.name === 'Clerk auth'
                            ? 'rounded-full'
                            : '',
                          'size-[26px] cursor-pointer object-cover',
                        )}
                        src={technologie.image}
                        alt={technologie.name}
                        loading='lazy'
                        width={26}
                        height={26}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className='font-semibold'>{technologie.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
            <CardFooter
              className={cn('mt-3 flex items-center justify-between p-0')}
            >
              <div className='flex items-center gap-5'>
                <Link
                  aria-label='View code on GitHub'
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={cn(
                    buttonVariants({
                      size: 'sm',
                      className: cn(
                        'bg-primary font-medium transition-colors ',
                      ),
                    }),
                  )}
                >
                  View Code
                </Link>
                <Link
                  aria-label='View live demo'
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={buttonVariants({
                    variant: 'outline',
                    size: 'sm',
                    className: cn(
                      'border border-primary font-medium transition-colors  ',
                    ),
                  })}
                >
                  Live Demo
                </Link>
              </div>
            </CardFooter>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

export default ProjectsCard
