'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'

const Dog = dynamic(() => import('@/scenes/Model').then((mod) => mod.Dog), {
  ssr: false,
  loading: () => {
    return (
      <Html>
        <span>Loading...</span>
      </Html>
    )
  },
})

const Common = dynamic(
  () => import('@/scenes/view').then((mod) => mod.Common),
  {
    ssr: false,
  },
)

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
      <Suspense fallback={null}>
        <Dog position={[-0.5, -0.9, 0]} scale={[0.67, 0.67, 0.67]} />
        <Common />
      </Suspense>
    </Canvas>
  )
}

export default HomeScene
