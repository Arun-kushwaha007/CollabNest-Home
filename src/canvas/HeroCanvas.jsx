import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, MeshDistortMaterial, Sphere } from '@react-three/drei';
import useResponsiveScale from '../hooks/useResponsiveScale'; // Import the hook

const HeroCanvas = () => {
  const sphereScale = useResponsiveScale(); // Use the hook

  return (
    <Canvas className="absolute top-0 left-0 z-0" camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sphere args={[1.5, 64, 64]} scale={sphereScale}> {/* Apply responsive scale */}
        <MeshDistortMaterial color="#38bdf8" distort={0.6} speed={1.2} />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  );
};

export default HeroCanvas;
