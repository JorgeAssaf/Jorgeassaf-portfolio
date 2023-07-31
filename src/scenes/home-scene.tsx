'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls, Preload, useProgress } from '@react-three/drei'

const Dog = dynamic(() => import('@/scenes/Model').then((mod) => mod.Dog), {
  ssr: false,
})

import { Common } from '@/scenes/view'

function LoaderModel() {
  const { progress } = useProgress()
  return (
    <Html className='text-primary' center position={[-3, 4, -5]}>
      {progress} % loaded
    </Html>
  )
}

const HomeScene = () => {
  return (
    <Canvas
      style={{
        height: 500,
        width: 500,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [4, 3, 6],
      }}
      gl={{ antialias: true }}
    >
      <Suspense fallback={<LoaderModel />}>
        <Dog
          position={[0, -1, 0]}
          scale={[0.6, 0.6, 0.6]}
          rotation={[0.0, -0.3, 0]}
        />
        <Common color='#020202' />
      </Suspense>
    </Canvas>
  )
}

export default HomeScene
