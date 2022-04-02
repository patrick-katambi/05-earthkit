import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CameraControls } from "./camera_controls";
import { Loading } from "./loading";
import { Sphere } from "./sphere";
import { getTexture, texturePaths } from "./textures";

export function Earth() {
  return (
    <Canvas>
      <ambientLight intensity={0.05} />
      <pointLight intensity={0.3} position={[-1000, 10, 2000]} />
      <Stars
        radius={300}
        depth={50}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <Suspense fallback={<Loading />}>
        <Sphere position={[0, 0, 0]} />
      </Suspense>
    </Canvas>
  );
}
