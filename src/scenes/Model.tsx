import { useGLTF } from "@react-three/drei"

export function Dog(props: JSX.IntrinsicElements['group']) {
  const { scene } = useGLTF('/dog.glb')

  return <primitive object={scene} {...props} />
}