import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { getTexture, texturePaths } from "./textures";

export function Sphere(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.y += 0.002));

  window.addEventListener("resize", (event) => {
    console.log(event.target.screen.width);
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={2.95}
      roughness={0.3}
      metalness={0.3}
      onClick={(event) => {}}
      onPointerOver={(event) => {}}
      onPointerOut={(event) => {}}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        bumpScale={0.05}
        map={getTexture(texturePaths.colorMap)}
        normalMap={getTexture(texturePaths.bumpMap)}
      />
    </mesh>
  );
}
