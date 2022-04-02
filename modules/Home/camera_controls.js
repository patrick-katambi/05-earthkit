import {OrbitControls} from '@react-three/drei'

export const CameraControls = () => {
  return <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} rotateSpeed={0.4} />
};
