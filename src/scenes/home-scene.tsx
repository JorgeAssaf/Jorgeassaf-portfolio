'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  Preload,
  useProgress,
} from '@react-three/drei'

import { Model } from '@/scenes/Model'

function LoaderModel() {
  const { progress } = useProgress()
  return (
    <Html center position={[-3, 4, -5]}>
      {progress} % loaded
    </Html>
  )
}

const HomeScene = () => {
  return (
    <Canvas
      style={{
        width: 500,
        height: 500,
      }}
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<LoaderModel />}>
        <Model position={[0, -1, 0]} scale={[0.6, 0.6, 0.6]} />
        <PerspectiveCamera position={[4, 3, 5]} />
        <OrbitControls autoRotate autoRotateSpeed={0.5} />
        <ambientLight intensity={1.8} />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default HomeScene
