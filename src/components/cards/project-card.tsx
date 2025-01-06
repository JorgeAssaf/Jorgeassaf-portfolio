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
    <Card className='flex min-h-[540px] w-full max-w-lg flex-col justify-center'>
      <figure className='relative aspect-[16/10] w-full overflow-hidden'>
        <Image
          src={project.image.url ?? '/images/placeholder.svg'}
          alt={`${project.image.alt ?? project.name} image`}
          className='rounded-t-lg object-cover'
          fill
          priority
          sizes='(min-width: 640px) 640px, 100vw'
        />
      </figure>
      <CardContent className='flex flex-1 flex-col justify-between gap-3 p-4'>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center justify-between'>
            <Badge
              variant={'secondary'}
              className='inline-flex items-center gap-2 rounded-lg'
            >
              <CodeIcon className='size-4' />
              {project.category}
            </Badge>
            <div className='flex items-center gap-2 text-xs text-muted-foreground'>
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
          <p className='text-base text-muted-foreground'>
            {project.description}
          </p>
          <div className='flex flex-wrap gap-2'>
            {project.technologies.map((tech) => (
              <Badge
                key={tech.name}
                variant='secondary'
                style={{
                  backgroundColor: `#${tech.color}`,
                }}
                className='inline-flex items-center gap-2 rounded-lg text-white'
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.image}
                  alt={tech.name}
                  width={16}
                  loading='eager'
                  height={16}
                  className='size-4'
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
