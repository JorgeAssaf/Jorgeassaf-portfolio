import Image from 'next/image'
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
import { PortableText } from '@portabletext/react'

import { client } from '@/lib/sanity'
import { Projects } from '@/app/types/sanity'
import { projectsQuery } from '@/utils/querys'

const ProjectsCard = async () => {
  const projects = (await client.fetch<Projects[]>(projectsQuery)) ?? []

  console.log(projects)
  return (
    <>
      {projects.map((project) => (
        <Card key={project._id}>
          <CardHeader className='border-b bg-card p-0'>
            <AspectRatio ratio={16 / 9}>
              project.image ? (
              <Image
                src={project.image}
                alt={project.name}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                fill
                loading='lazy'
              />
              ) : (
              <div
                aria-label='Placeholder'
                role='img'
                aria-roledescription='placeholder'
              >
                <Icons.placeholder
                  className='h-9 w-9 text-muted-foreground'
                  aria-hidden='true'
                />
              </div>
              )
            </AspectRatio>
          </CardHeader>

          <CardContent>
            <CardTitle className='line-clamp-1 text-2xl my-3'>
              {project.name}
            </CardTitle>

            <PortableText value={project.content} />

            <div className='my-3'>
              {project.technologies.map((technologie) => (
                <TooltipProvider key={technologie.name}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Image

                        src={technologie.image}
                        alt={technologie.name}
                        width={24}
                        height={24}
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
              className={cn('p-0 flex justify-between items-center', 'mt-3')}
            >
              <div className='flex items-center gap-5'>
                <Link
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
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
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
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
      ))}
    </>
  )
}

export default ProjectsCard
