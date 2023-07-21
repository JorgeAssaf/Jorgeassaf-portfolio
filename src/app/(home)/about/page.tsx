import { Header } from '@/components/header'
import { Icons } from '@/components/icons'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
const AboutPage = () => {
  return (
    <div>
      <Header title='About' page />
      <div className='w-3/4 mx-auto'>
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
        <h3 className='text-3xl font-bold '>Skills</h3>
        <div className='flex gap-3 my-5 items-center'>
          <Icons.react className='w-7 h-7' />
          <span>React</span>
          <Icons.next className='w-7 h-7' />
          <span>Next</span>
          <Icons.tailwind className='w-7 h-7' />
          <span>Tailwind</span>
          <Icons.typescript className='w-7 h-7' />
          <span>Typescript</span>
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
