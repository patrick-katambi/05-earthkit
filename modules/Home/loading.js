export function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} scale={2}>
      <sphereGeometry attach="geometry" args={[1, 64, 64]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={1}
      />
    </mesh>
  );
}