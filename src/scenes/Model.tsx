import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    main: THREE.Mesh
    Plane: THREE.Mesh
  }
  materials: {
    palette: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/dog.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.main.geometry}
        material={materials.palette}
        position={[3.686048, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials['Material.001']}
        position={[-3.398974, 0, -2.953872]}
        scale={[7.049901, 1, 7.049901]}
      />
    </group>
  )
}

useGLTF.preload('/dog.glb')
