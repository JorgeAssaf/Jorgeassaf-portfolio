'use client'

import { Suspense, useEffect } from 'react'
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
  useEffect(() => {
    // Obtenemos el elemento DOM del canvas
    const canvas = document.querySelector('canvas')
    if (!canvas) return

    // Configuramos el listener pasivo para el evento de rueda (wheel)
    canvas.addEventListener('wheel', (event) => event.preventDefault(), {
      passive: true,
    })

    // Configuramos los listeners pasivos para eventos táctiles (touch)
    canvas.addEventListener('touchstart', (event) => event.preventDefault(), {
      passive: true,
    })
    canvas.addEventListener('touchend', (event) => event.preventDefault(), {
      passive: true,
    })
    canvas.addEventListener('touchmove', (event) => event.preventDefault(), {
      passive: true,
    })
  }, [])
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
        <OrbitControls autoRotate autoRotateSpeed={0.5} />
        <ambientLight intensity={1.8} />
      </Suspense>
    </Canvas>
  )
}

export default HomeScene
