/* eslint-disable deprecation/deprecation */
import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Link2 } from 'lucide-react'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card'
import type { ProjectsEntity } from '@/app/types/sanity'

import { Badge } from '../ui/badge'

interface ProjectsCardProps {
  project: ProjectsEntity
  order?: number
}

export const ProjectsCard: FC<ProjectsCardProps> = ({ project }) => {
  return (
    <Card className='relative flex w-full max-w-lg flex-col rounded-xl bg-card/30 bg-clip-border shadow-lg md:max-w-xl'>
      <div className='relative mx-4 mt-4 overflow-hidden rounded-xl bg-clip-border shadow-lg shadow-primary/20'>
        <Image
          width={900}
          height={485}
          src={project.image.url}
          alt={project.image.alt}
        />
      </div>
      <div className='flex flex-1 flex-col justify-between gap-4 p-6'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <CardTitle className='text-xl font-medium leading-snug tracking-normal md:text-2xl'>
              {project.name}
            </CardTitle>
            <Badge className='py-1 text-[10px] sm:text-xs'>
              {project.category}
            </Badge>
          </div>
          <CardDescription className='line-clamp-6 break-all text-base leading-relaxed'>
            {project.description}
          </CardDescription>
          <div className='group flex flex-wrap items-center gap-3'>
            {project.technologies.map((technology) => (
              <Badge
                className='flex items-center gap-1.5 rounded-lg py-1.5 text-xs text-white md:text-sm'
                style={{
                  backgroundColor: `#${technology.color}`,
                }}
                key={technology.name}
              >
                <Image
                  width={20}
                  height={20}
                  src={technology.image}
                  alt={technology.name}
                  className='size-5'
                />
                <p>{technology.name}</p>
              </Badge>
            ))}
          </div>
        </div>
        <CardFooter className='flex gap-10 p-0'>
          <Link
            target='_blank'
            rel='noreferrer noopener'
            href={project.link}
            className={cn(buttonVariants({ size: 'sm' }), 'text-sm')}
          >
            <Link2 size={20} />
          </Link>
          <Link
            target='_blank'
            rel='noreferrer noopener'
            href={project.repo}
            className={cn(
              buttonVariants({ variant: 'outline', size: 'sm' }),
              'text-sm',
            )}
          >
            <Github size={20} />
          </Link>
        </CardFooter>
      </div>
    </Card>
  )
}
