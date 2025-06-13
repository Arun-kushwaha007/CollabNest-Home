import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars ,MeshDistortMaterial, Sphere} from '@react-three/drei';

const HeroCanvas = () => {
  return (
    <Canvas className="absolute top-0 left-0 z-0" camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      {/* <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade /> */}
      <Sphere args={[1.5, 64, 64]} scale={2}>
  <MeshDistortMaterial color="#38bdf8" distort={0.5} speed={1.5} />
</Sphere>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  );
};

export default HeroCanvas;
