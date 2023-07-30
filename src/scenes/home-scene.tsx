'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Html,
  OrbitControls,
  PerspectiveCamera,
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
    >
      <Suspense fallback={<LoaderModel />}>
        <Model position={[0, -1, 0]} scale={[0.6, 0.6, 0.6]} />
        <PerspectiveCamera position={[4, 3, 5]} makeDefault />
        <OrbitControls />
        <ambientLight intensity={1.8} />
      </Suspense>
    </Canvas>
  )
}

export default HomeScene
