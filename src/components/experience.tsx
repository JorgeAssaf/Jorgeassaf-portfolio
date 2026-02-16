import Link from 'next/link'
import { Formaters } from '@/helpers/formaters'

import type { JobExperience } from '@/config/experience'
import { cn } from '@/lib/utils'

interface ExperienceProps extends React.ComponentPropsWithoutRef<'ol'> {
  experience: JobExperience[]
}

export const Experience = ({
  experience,
  className,
  ...props
}: ExperienceProps) => {
  return (
    <ol className={cn('relative border-l-2 *:my-[1lh]', className)} {...props}>
      {experience.map((job) => (
        <li className='mb-10 ml-4' key={job.startDate}>
          <div className='border-muted-foreground bg-muted-foreground absolute left-[-0.43rem] mt-1.5 size-3 rounded-full border' />
          <time
            className='mb-1 text-sm leading-none font-thin'
            dateTime={job.startDate}
          >
            {`${Formaters.formatDate(job.startDate, {
              pattern: 'MMMM y',
            })} - ${job.endDate ? Formaters.formatDate(job.endDate, { pattern: 'MMMM y' }) : 'Present'}`}
          </time>

          <h3 className='text-lg font-semibold'>
            {job.occupation} at{' '}
            <Link
              href={job.url || '#'}
              target='_blank'
              rel='noopener noreferrer'
              title={`Visit ${job.company} website`}
              aria-label={`Visit ${job.company} website`}
              className='text-primary hover:text-primary/90 underline transition-colors'
            >
              {job.company}
            </Link>
          </h3>
          <h4 className='text-primary/80 my-1 text-sm font-normal'>
            {job.location}
          </h4>
          <p className='text-muted-foreground mb-4 text-base font-normal'>
            {job.description}
          </p>
        </li>
      ))}
    </ol>
  )
}
