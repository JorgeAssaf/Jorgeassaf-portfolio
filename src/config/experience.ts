export interface JobExperience {
  occupation: string
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
    occupation: 'Frontend Developer',
    company: 'Xdevelop',
    location: 'Hibrid',
    url: 'https://xdevelop.mx/',
    startDate: '2025-12-02',
    description:
      'Worked as a Frontend Developer, improving the performance of the Residia web app using Next.js and TanStack Query. Additionally, developed the UNAM app with Expo and React Native, focusing on delivering a seamless user experience and optimizing mobile performance. Also responsible for implementing responsive designs, optimizing performance, and ensuring cross-browser compatibility.',
  },
  {
    occupation: 'Fullstack Developer',
    company: 'Lika Software',
    url: 'https://likasoftware.com/',
    location: 'Remote',
    startDate: '2024-02-20',
    endDate: '2024-09-30',
    description:
      'Working on projects for clients using Next.js, React, TypeScript, and Tailwindcss. Developing features, fixing bugs, and improving the performance of the applications.',
  },
  {
    occupation: 'Frontend Developer',
    company: 'Pawtrics',
    url: 'https://pawtrics.com/',
    location: 'Remote',
    startDate: '2023-08-20',
    endDate: '2024-03-20',
    description:
      'Worked on the frontend in PIMS project. Using Next 12, React, TypeScript, Material UI, and Supabase.',
  },
  {
    occupation: 'Frontend Developer',
    company: 'Omaka',
    url: 'https://omaka.app/',
    location: 'Remote',
    startDate: '2023-07-01',
    endDate: '2024-02-20',
    description:
      'Worked on the frontend of the admin panel, using vite, React, TypeScript, and Material UI.',
  },
] satisfies JobExperience[]
