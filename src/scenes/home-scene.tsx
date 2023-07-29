'use client'
import { useLoader } from '@react-three/fiber'

import { Suspense } from 'react'
import { CameraControls, Environment, Html, OrbitControls, PerspectiveCamera, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { Model } from '@/scenes/Model'

function Loader() {
  const { progress } = useProgress()
  return <Html position={[-3, 4, -5]}>{progress} % loaded</Html>
}


const HomeScene = () => {
  return (
    <Canvas

      style={{
        width: 500,
        height: 500,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        top: 70,
      }}
    >
      <Suspense fallback={<Loader />}>
        <Model position={[0, 0, 0]} scale={[0.6, 0.6, 0.6]} />
        <PerspectiveCamera position={[4, 3, 5]} makeDefault />
        <OrbitControls />
        <Environment preset='sunset' />
      </Suspense>
    </Canvas>
  )
}

export default HomeScene
