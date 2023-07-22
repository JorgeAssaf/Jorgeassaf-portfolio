import { Header } from '@/components/header'
import { Icons } from '@/components/icons'
const AboutPage = () => {
  return (
    <div className='md:w-3/4 mx-auto '>
      <Header title='About me' page />
      <div>
        <p className='leading-7 [&:not(:first-child)]:mt-6'>
          I&apos;m a front-end web developer with experience in JavaScript,
          React, Next.js and Astro. My goal is to become a FullStack programmer.
          I enjoy creating beautiful and easy to use web applications that
          connect with users. I am always looking for new opportunities to grow
          and collaborate on exciting projects.
        </p>
        <p className='leading-7 [&:not(:first-child)]:mt-6'>
          I hope this shorter version is useful to you. If you need more
          adjustments or changes, do not hesitate to tell me. Much success in
          your career as a web developer!
        </p>
      </div>
      <div className='my-5 flex flex-col justify-center items-center'>
        <h3 className='text-3xl font-bold '>Experience</h3>
        <section className='my-5 '>
          {/* make a line time of my work experience */}

          <ol className='relative border-l text '>
            <li className='mb-10 ml-4'>
              <div className='absolute w-3 h-3 bg-muted-foreground rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900'></div>
              <time className='mb-1 text-sm font-thin leading-none '>
                June 2023 - Present
              </time>
              <h3 className='text-lg font-semibold'>
                Frontend Developer at{' '}
                <a
                  href='https://omaka.mx'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary underline hover:text-primary-hover transition-colors'
                >
                  {' '}
                  Omaka
                </a>
              </h3>
              <p className='mb-4 text-base font-normal text-muted-foreground'>
                I am currently working as a Frontend Developer at Omaka. Working
                on a project that is being developed with Next.js, Tailwind CSS,
                Redux and Typescript.
              </p>
            </li>
            {/* <li className='mb-10 ml-4'>
              <div className='absolute w-3 h-3 bg-muted-foreground rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900'></div>
              <time className='mb-1 text-sm font-thin leading-none '>
                March 2022
              </time>
              <h3 className='text-lg font-semibold'>
                Marketing UI design in Figma
              </h3>
              <p className='mb-4 text-base font-normal text-muted-foreground'>
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li className='ml-4'>
              <div className='absolute w-3 h-3 bg-muted-foreground rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900'></div>
              <time className='mb-1 text-sm font-thin leading-none '>
                April 2022
              </time>
              <h3 className='text-lg font-semibold'>
                E-Commerce UI code in Tailwind CSS
              </h3>
              <p className='mb-4 text-base font-normal text-muted-foreground'>
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li> */}
          </ol>
        </section>
      </div>
      <div
        className='my-5 flex flex-col 
       justify-center items-center'
      >
        <h3 className='text-3xl font-bold '>Skills</h3>
        <div className='flex gap-5 my-7 items-center justify-center flex-wrap'>
          <div className='flex justify-center flex-col items-center'>
            <Icons.react className='w-7 h-7' />
            <span>React</span>
          </div>
          <div className='flex justify-center flex-col items-center'>
            <Icons.next className='w-7 h-7' />
            <span>Next</span>
          </div>
          <div className='flex justify-center flex-col items-center'>
            <Icons.tailwind className='w-7 h-7' />
            <span>Tailwind</span>
          </div>
          <div className='flex justify-center flex-col items-center'>
            <Icons.typescript className='w-7 h-7' />
            <span>Typescript</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
//   < Tabs
// defaultValue = 'frontend'
// className = 'w-[400px] justify-center items-center flex-col flex my-5'
//   >
//           <TabsList>
//             <TabsTrigger value='frontend'>Frontend</TabsTrigger>
//             <TabsTrigger value='password'>Password</TabsTrigger>
//           </TabsList>
//           <TabsContent value='frontend'>

//             <div className='flex gap-3 my-5 items-center'>
//               <Icons.react className='w-7 h-7' />
//               <span>
//                 React
//               </span>
//               <Icons.next className='w-7 h-7' />
//               <span>
//                 Next
//               </span>
//               <Icons.tailwind className='w-7 h-7' />
//               <span>
//                 Tailwind
//               </span>
//               <Icons.typescript className='w-7 h-7' />
//               <span>
//                 Typescript
//               </span>
//             </div>

//           </TabsContent >
//           <TabsContent value='password'>Change your password here.</TabsContent>
//         </ >
