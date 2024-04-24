'use client'

import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { Group } from 'three'

export interface DogProps {
  scale?: [number, number, number]
  position?: [number, number, number]
}
export function Dog({ ...props }: DogProps) {
  const group = useRef<Group>(null)
  const { scene } = useGLTF('/dog.glb')

  return (
    <group ref={group}>
      <primitive object={scene} {...props} />
    </group>
  )
}
