export interface JobExperience {
  ocupation: string
  company: string
  asLink?: boolean
  location: string
  url?: string
  startDate: string
  endDate?: string | null
  description: string
}

export const JOB_EXPERIENCE = [
  {
    ocupation: 'Fullstack Developer',
    company: 'Lika Software',
    url: 'https://likasoftware.com/',
    location: 'Remote',
    startDate: '2024-02-20',
    description:
      'Working on the frontend in makeing the website more user friendly and responsive. using Next.js, React, TypeScript, Tailwind CSS.',
  },
  {
    ocupation: 'Frontend Developer',
    company: 'Pawtrics',
    url: 'https://pawtrics.com/',
    location: 'Remote',
    startDate: '2021-08-01',
    endDate: '2021-10-01',
    description:
      'Worked on the frontend in PIMS project. Using Next 12, React, TypeScript, Material UI, and Supabase.',
  },
  {
    ocupation: 'Frontend Developer',
    company: 'Omaka',
    url: 'https://omaka.app/',
    location: 'Remote',
    startDate: '2021-08-01',
    endDate: '2021-10-01',
    description:
      'Worked on the frontend in PIMS project. Using Next 12, React, TypeScript, Material UI, and Supabase.',
  },
] satisfies JobExperience[]
