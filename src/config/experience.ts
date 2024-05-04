export interface JobExperience {
  ocupation: string
  company: string
  asLink?: boolean
  location: string
  startDate: string
  endDate?: string | null
  description: string
}

export const JOB_EXPERIENCE = [
  {
    ocupation: 'Fullstack Developer',
    company: 'Lika Software',
    location: 'Remote',
    startDate: '2024-02-20',
    description:
      'Worked on the frontend of the Shadcn website, using Next.js, React, TypeScript, Tailwind CSS, and Sanity.',
  },
  {
    ocupation: 'Frontend Developer',
    company: 'Shadcn',
    location: 'Remote',
    startDate: '2021-08-01',
    endDate: '2021-10-01',
    description:
      'Worked on the frontend of the Shadcn website, using Next.js, React, TypeScript, Tailwind CSS, and Sanity.',
  },
] satisfies JobExperience[]
