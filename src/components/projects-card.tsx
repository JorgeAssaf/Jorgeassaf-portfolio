import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
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

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { cn } from '@/lib/utils'
import { Placeholder } from '@/components/icons'

import type { Projects } from '@/app/types/sanity'

interface ProjectsCardProps {
  projects: Projects[]
}

const ProjectsCard: FC<ProjectsCardProps> = ({ projects }) => {
  return (
    <>
      {projects.map(project => (
        <Card
          key={project._id}
          className={cn(
            'h-full w-full overflow-hidden rounded-md flex flex-col'
          )}
        >
          <CardHeader className='border-b p-0 '>
            <AspectRatio ratio={16 / 9}>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project?.name}
                  className={cn(
                    'object-cover',
                    project.name === 'Netflix clone' ? 'object-left-top' : ''
                  )}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  fill
                  priority
                />
              ) : (
                <div
                  aria-label='Placeholder'
                  role='img'
                  aria-roledescription='placeholder'
                  className='flex items-center justify-center h-full w-full'
                >
                  <Placeholder
                    className='h-14 w-14 text-muted-foreground'
                    aria-hidden='true'
                  />
                </div>
              )}
            </AspectRatio>
          </CardHeader>

          <CardContent className={cn('flex-1 flex justify-between flex-col')}>
            <CardTitle className={cn('line-clamp-1 text-2xl my-3')}>
              {project.name}
            </CardTitle>

            <div className='prose-p:font-medium'>
              <PortableText value={project.content} />
            </div>

            <div className='my-3 flex items-center gap-3 flex-wrap'>
              {project.technologies.map(technologie => (
                <TooltipProvider key={technologie.name} delayDuration={250}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Image
                        className={cn(
                          technologie.name === 'Clerk auth'
                            ? 'rounded-full'
                            : '',
                          'cursor-pointer w-[26px] h-[26px] object-cover'
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
              className={cn('p-0 flex justify-between items-center mt-3')}
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
                        'font-medium bg-primary transition-colors '
                      ),
                    })
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
                      'font-medium border border-primary transition-colors  '
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
