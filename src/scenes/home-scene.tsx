'use client'

import { Suspense } from 'react'
import { Html, OrbitControls, Preload, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { Dog } from './Model'

const HomeSceneFallback = () => {
  const { progress } = useProgress()
  return (
    <Html className='flex items-center justify-center'>
      {progress.toFixed(1)}% loaded
    </Html>
  )
}

const HomeScene = () => {
  return (
    <Canvas
      className='size-full'
      camera={{
        fov: 47,
        near: 0.1,
        far: 200,
        position: [4, 3, 6],
      }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={2} />
      <Suspense fallback={<HomeSceneFallback />}>
        <Dog position={[0, -0.9, 0]} scale={[0.67, 0.67, 0.67]} />
        <OrbitControls autoRotate autoRotateSpeed={0.5} />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default HomeScene
