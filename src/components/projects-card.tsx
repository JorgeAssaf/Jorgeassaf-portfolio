import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { cn } from '@/lib/utils'
import { Icons } from './icons'
import { PortableText } from '@portabletext/react'

import { client } from '@/lib/sanity'
import { Projects } from '@/app/types/sanity'
import { groq } from 'next-sanity'

const query = groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    github,
    url,
    technologies[]->{
      name,
      "image": image.asset->url
    },
    content
  }`

const ProjectsCard = async () => {
  const projects = (await client.fetch<Projects[]>(query)) ?? []
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
                fill
                priority
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

            <div>
              {project.technologies.map((technologie) => (
                <Image
                  key={technologie.name}
                  src={technologie.image}
                  alt={technologie.name}
                  width={24}
                  height={24}
                />
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
