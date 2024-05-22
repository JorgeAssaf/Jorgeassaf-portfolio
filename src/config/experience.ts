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
      'Working on projects for clients using Next.js, React, TypeScript, and Tailwindcss. Developing features, fixing bugs, and improving the performance of the applications.',
  },
  {
    ocupation: 'Frontend Developer',
    company: 'Pawtrics',
    url: 'https://pawtrics.com/',
    location: 'Remote',
    startDate: '2023-08-20',
    endDate: '2024-03-20',
    description:
      'Worked on the frontend in PIMS project. Using Next 12, React, TypeScript, Material UI, and Supabase.',
  },
  {
    ocupation: 'Frontend Developer',
    company: 'Omaka',
    url: 'https://omaka.app/',
    location: 'Remote',
    startDate: '2023-07-01',
    endDate: '2024-02-20',
    description:
      'Worked on the frontend of the admin panel, using vite, React, TypeScript, and Material UI.',
  },
] satisfies JobExperience[]
