import Image from 'next/image'
import Link from 'next/link'
import { Formaters } from '@/helpers/formaters'
import { CalendarCheck, CodeIcon } from 'lucide-react'

import type { ProjectsEntity } from '@/types/sanity'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import { Badge } from '../ui/badge'

interface ProjectsCardProps {
  project: ProjectsEntity
  order?: number
}

export const ProjectCard = ({ project }: ProjectsCardProps) => {
  return (
    <Card className='flex size-full max-w-lg flex-col py-0'>
      <figure className='relative aspect-video w-full overflow-hidden'>
        <Image
          src={project.image.url ?? '/images/placeholder.svg'}
          alt={`${project.image.alt ?? project.name} image`}
          className='rounded-t-lg object-cover'
          fill
          priority
          sizes='(min-width: 640px) 640px, 100vw'
        />
      </figure>
      <CardContent className='flex flex-1 flex-col justify-between gap-4 p-4'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-between'>
            <Badge
              variant={'secondary'}
              className='inline-flex items-center gap-2 rounded-lg text-sm'
            >
              <CodeIcon className='size-4' />
              {project.category}
            </Badge>
            <div className='text-muted-foreground flex items-center gap-2 text-sm'>
              {project.createdAt && (
                <>
                  <CalendarCheck className='size-4' />
                  <p>
                    {Formaters.formatDate(project.createdAt, {
                      pattern: 'MMMM dd, yyyy',
                    })}
                  </p>
                </>
              )}
            </div>
          </div>
          <h3 className='text-xl font-semibold'>{project.name}</h3>
          <p className='text-muted-foreground'>
            {project.description}
          </p>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-2 '>
            {project.technologies.map((tech) => (
              <Badge
                key={tech.name}
                variant='secondary'
                style={{
                  backgroundColor: `#${tech.color}`,
                }}
                className='inline-flex items-center gap-1.5 text-sm rounded-lg text-white w-auto font-semibold'
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.image}
                  alt={tech.name}
                  width={20}
                  loading='eager'
                  height={20}
                  className='size-auto'

                />
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
        <div className='flex items-center gap-4'>
          {project.repo && (
            <Link
              className={cn(
                buttonVariants({
                  variant: 'link',
                }),
              )}
              href={project.repo}
              target='_blank'
              rel='noopener noreferrer'
              title={`View ${project.name} repository`}
              aria-label={`View ${project.name} repository`}
            >
              View Repository
            </Link>
          )}
          {project.link && (
            <Link
              className={cn(
                buttonVariants({
                  variant: 'link',
                }),
              )}
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              title={`View ${project.name} live site`}
              aria-label={`View ${project.name} live site`}
            >
              Live Site
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
