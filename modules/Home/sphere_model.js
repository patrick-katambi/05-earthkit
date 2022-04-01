import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CameraControls } from "./camera_controls";
import { Loading } from "./loading";
import { Sphere } from "./sphere";

export function SphereModel() {
  return (
    <Canvas>
      <CameraControls />
      <ambientLight />
      <Suspense fallback={<Loading />}>
        <Sphere position={[0, 0, 0]} />
      </Suspense>
    </Canvas>
  );
}
