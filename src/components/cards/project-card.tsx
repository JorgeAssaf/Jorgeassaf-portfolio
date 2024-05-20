import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Formaters } from '@/helpers/formaters'
import { CalendarCheck, CodeIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { ProjectsEntity } from '@/app/types/sanity'

import { Badge } from '../ui/badge'

interface ProjectsCardProps {
  project: ProjectsEntity
  order?: number
}

export const ProjectCard: FC<ProjectsCardProps> = ({ project }) => {
  return (
    <Card className='w-full max-w-lg'>
      <figure className='relative aspect-[16/10] w-full overflow-hidden'>
        <Image
          src={project.image.url ?? '/images/placeholder.svg'}
          alt={`${project.image.alt ?? project.name} image`}
          className='rounded-t-lg object-cover'
          fill
          sizes='(min-width: 640px) 640px, 100vw'
        />
      </figure>
      <CardContent className='space-y-3 p-4'>
        <div className='flex items-center justify-between'>
          <Badge
            variant={'secondary'}
            className='inline-flex items-center gap-2 rounded-lg '
          >
            <CodeIcon className='size-4' />
            {project.category}
          </Badge>
          <div className='flex items-center gap-2 text-xs text-muted-foreground'>
            {project.createdAt && (
              <>
                <CalendarCheck className='size-4' />
                <p>
                  {Formaters.formatDate(project.createdAt, 'MMMM dd, yyyy')}
                </p>
              </>
            )}
          </div>
        </div>
        <h3 className='text-xl font-semibold'>{project.name}</h3>
        <p className='text-muted-foreground'>{project.description}</p>
        <div className=' flex flex-wrap gap-2'>
          {project.technologies.map((tech) => (
            <Badge
              key={tech.name}
              variant='secondary'
              className='inline-flex items-center gap-2 rounded-lg'
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
        <div className='flex items-center gap-4'>
          <Link
            className={cn(
              buttonVariants({
                variant: 'link',
              }),
            )}
            href={project.repo}
            target='_blank'
            rel='noopener noreferrer'
          >
            View Repository
          </Link>
          <Link
            className={cn(
              buttonVariants({
                variant: 'link',
              }),
            )}
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            Live Site
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
