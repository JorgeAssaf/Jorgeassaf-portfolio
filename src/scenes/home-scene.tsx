'use client'

import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

const HomeScene = () => {

  return (
    <Canvas className="w-[700px] h-[700px]">

      <Environment preset="sunset" />
      <OrbitControls />
      <ambientLight intensity={0.1} />
      <mesh>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color='red' />
      </mesh>
    </Canvas>
  )
}

export default HomeScene