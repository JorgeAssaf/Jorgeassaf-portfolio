'use client'

import { Suspense } from 'react'
import { Html, OrbitControls, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { Dog } from './Model'

const HomeSceneFallback = () => {
  const { progress } = useProgress()
  return (
    <Html className='w-[500px] text-foreground'>
      {progress.toFixed(1)}% loaded
    </Html>
  )
}

const HomeScene = () => {
  return (
    <Canvas
      className='size-full'
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [4, 3, 6],
      }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={1.8} />

      <Suspense fallback={<HomeSceneFallback />}>
        <Dog position={[-0.5, -0.9, 0]} scale={[0.67, 0.67, 0.67]} />
        <OrbitControls autoRotate autoRotateSpeed={0.5} />
      </Suspense>
    </Canvas>
  )
}

export default HomeScene
