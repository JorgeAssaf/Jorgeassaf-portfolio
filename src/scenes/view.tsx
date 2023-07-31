'use client'

import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'

export const Common = () => (
  <Suspense fallback={null}>
    <OrbitControls autoRotate autoRotateSpeed={0.5} />
    <ambientLight intensity={1.8} />
  </Suspense>
)

// interface ViewProps extends React.HTMLAttributes<HTMLDivElement> {
//   orbit?: boolean
//   children: JSX.Element
// }

// const View = forwardRef<HTMLDivElement, ViewProps>(({ children, orbit, ...props }, ref) => {
//   const localRef = useRef<HTMLDivElement>(null!)
//   useImperativeHandle(ref, () => localRef.current!)

//   return (
//     <>

//       <Three>

//         <ViewImpl track={localRef}>
//           {children}
//           {orbit && <OrbitControls />}
//         </ViewImpl>
//       </Three>
//     </>
//   )
// })
// View.displayName = 'View'

// export { View }
