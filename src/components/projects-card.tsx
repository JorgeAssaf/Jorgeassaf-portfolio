import { type FC } from 'react'
import Image from 'next/image'
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

import Link from 'next/link'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { cn } from '@/lib/utils'
import { Icons } from './icons'

import type { Projects } from '@/app/types/sanity'

interface ProjectsCardProps {
  projects: Projects[]
}

const ProjectsCard: FC<ProjectsCardProps> = ({ projects }) => {
  console.log(projects)
  return (
    <>
      {projects.map((project) => (
        <Card key={project._id}>
          <CardHeader className={cn('border-b bg-card p-0')}>
            <AspectRatio ratio={4 / 3}>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project?.name}
                  quality={100}
                  className={`object-cover ${project.name == 'Netflix clone' ? 'object-left-top' : ''
                    }`}
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
                  <Icons.placeholder
                    className='h-14 w-14 text-muted-foreground'
                    aria-hidden='true'
                  />
                </div>
              )}
            </AspectRatio>
          </CardHeader>

          <CardContent>
            <CardTitle className={cn('line-clamp-1 text-2xl my-3')}>
              {project.name}
            </CardTitle>

            <PortableText value={project.content} />

            <div className='mt-3 mb-4 flex items-center gap-3 flex-wrap'>
              {project.technologies.map((technologie) => (
                <TooltipProvider key={technologie.name} delayDuration={450}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Image
                        className={cn(
                          technologie.name === 'Clerk auth'
                            ? 'rounded-full'
                            : '',
                          'cursor-pointer',
                        )}
                        src={technologie.image}
                        alt={technologie.name}
                        width={26}
                        height={26}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{technologie.name}</p>
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
                        'font-medium bg-primary transition-colors ',
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
      ))}
    </>
  )
}

export default ProjectsCard
