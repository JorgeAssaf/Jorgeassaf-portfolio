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
import type { Projects } from '@/app/types/sanity'

import { Badge } from '../ui/badge'

interface ProjectsCardProps {
  project: Projects
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
      <div className='flex flex-col space-y-2 p-6'>
        <div className=' flex items-center justify-between'>
          <CardTitle className='text-xl font-medium leading-snug tracking-normal md:text-2xl'>
            {project.name}
          </CardTitle>
        </div>
        <CardDescription className='break-all text-base leading-relaxed'>
          {project.description}
        </CardDescription>
        <div className='group flex flex-wrap items-center gap-3'>
          {project.technologies.map((technology) => (
            <Badge
              className='flex items-center gap-1.5 py-1 text-xs text-white md:text-sm'
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
      <CardFooter className='flex gap-10 px-6'>
        <Link
          href={project.link}
          className={cn(buttonVariants({ size: 'sm' }), 'text-sm')}
        >
          <Link2 size={20} />
        </Link>
        <Link
          href={project.repo}
          className={cn(
            buttonVariants({ variant: 'outline', size: 'sm' }),
            'text-sm',
          )}
        >
          <Github size={20} />
        </Link>
      </CardFooter>
    </Card>
  )
}
// ;<Card
//   className={cn(
//     'flex size-full  flex-col justify-between rounded-xl bg-card-gradient',
//   )}
// >
//   <div className='flex flex-col-reverse gap-4'>
//     <Image
//       src={project.image.url}
//       alt='success-case'
//       className={cn(
//         'relative left-0 top-0 order-1 h-auto  rounded-lg object-cover  opacity-100 transition-opacity duration-500 ',
//         // order === 1 ? 'order-first' : 'order-last',
//       )}
//       width={900}
//       height={385}
//     />
//     <div className=' flex-1 flex-col justify-between p-4'>
//       <CardHeader className='space-y-2 p-0 pb-1 md:pb-2'>
//         <div className='flex items-center justify-between'>
//           <CardTitle className='text-xl lg:text-3xl'>{project.name}</CardTitle>

//           <Badge className='flex text-xs'>{project.category}</Badge>
//         </div>
//         <div className='flex flex-wrap gap-2'>
//           {project.technologies.map((technology) => (
//             <Badge
//               className='flex items-center gap-1.5 py-1 text-xs text-foreground md:text-sm'
//               style={{
//                 backgroundColor: `#${technology.color}`,
//               }}
//               key={technology.name}
//             >
//               <Image
//                 width={20}
//                 height={20}
//                 src={technology.image}
//                 alt={technology.name}
//                 className='size-5'
//               />
//               <p>{technology.name}</p>
//             </Badge>
//           ))}
//         </div>
//       </CardHeader>
//       <CardContent className=' space-y-2 p-0'>
//         <CardDescription className='break-all text-foreground/70 md:text-base'>
//           {project.description}
//         </CardDescription>
//         <CardFooter className='flex justify-between gap-2 px-0 py-2 '>
//           <Link
//             href={project.link}
//             className={cn(buttonVariants({ size: 'sm' }), 'text-sm')}
//           >
//             <Link2 size={20} />
//           </Link>
//           <Link
//             href={project.repo}
//             className={cn(
//               buttonVariants({ variant: 'outline', size: 'sm' }),
//               'text-sm',
//             )}
//           >
//             <Github size={20} />
//           </Link>
//         </CardFooter>
//       </CardContent>
//     </div>
//   </div>
// </Card>
