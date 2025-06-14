import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Stars,
  Environment,
} from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import useResponsiveScale from '../hooks/useResponsiveScale';

// Nodes with glowing effect
function Network() {
  const group = useRef();
  const nodes = [
    [1.5, 0, 0],
    [2.5, 1.5, -1],
    [-1.2, 2.2, 0.8],
    [-1.5, -1.5, -0.5],
    [1, -1.3, 1.5],
    [0.8, 2.5, -1.2],
  ];
  const connections = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
    [1, 2], [2, 3], [3, 4], [4, 5], [5, 1]
  ];

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.15;
      group.current.position.y = Math.sin(clock.getElapsedTime() * 0.7) * 0.2;
    }
  });

  return (
    <group ref={group}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={0.9}
            roughness={0.1}
            metalness={0.7}
          />
        </mesh>
      ))}
      {connections.map(([a, b], i) => (
        <line key={i}>
          <bufferGeometry
            setFromPoints={[
              new THREE.Vector3(...nodes[a]),
              new THREE.Vector3(...nodes[b])
            ]}
          />
          <lineBasicMaterial color="#38bdf8" linewidth={1.5} />
        </line>
      ))}
    </group>
  );
}

// Animated glowing cards
function CollaborationNetwork() {
  const group = useRef();
  const cards = [
    [2.6, 1.6, 2],
    [1.6, 0.6, -1],
    [-1.4, 1.2, 0.8],
    [-1.7, -1, -0.5],
    [1.2, -1.3, 1],
    [0.9, 1.7, -1.2],
  ];
  const connections = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
    [1, 2], [2, 3], [3, 4], [4, 5], [5, 1]
  ];

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.12;
      group.current.position.y = Math.sin(clock.getElapsedTime() * 0.6) * 0.15;
    }
  });

  return (
    <group ref={group}>
      {cards.map((pos, i) => (
        <mesh key={i} position={pos} rotation={[0.2, 0.2, 0]}>
          <boxGeometry args={[0.5, 0.32, 0.05]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#60a5fa"
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.4}
          />
          {/* Top accent stripe */}
          <mesh position={[0, 0.18, 0.028]}>
            <boxGeometry args={[0.48, 0.04, 0.01]} />
            <meshStandardMaterial
              color="#60a5fa"
              emissive="#60a5fa"
              emissiveIntensity={0.8}
            />
          </mesh>
        </mesh>
      ))}
      {connections.map(([a, b], i) => (
        <line key={i}>
          <bufferGeometry
            setFromPoints={[
              new THREE.Vector3(...cards[a]),
              new THREE.Vector3(...cards[b])
            ]}
          />
          <lineBasicMaterial color="#60a5fa" linewidth={1.2} />
        </line>
      ))}
    </group>
  );
}

const HeroCanvas = () => {
  const sphereScale = useResponsiveScale();

  return (
    <Canvas
      className="absolute top-0 left-0 z-0"
      camera={{ position: [0, 0, 5], fov: 70 }}
    >
      {/* Background color */}
      <color attach="background" args={["#0f172a"]} />

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />

      {/* Twinkling stars */}
      <Stars
        radius={100}
        depth={80}
        count={8000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      {/* Main content */}
      <Suspense fallback={null}>
        <Network />
        <CollaborationNetwork />
        <Environment preset="sunset" />
        <EffectComposer>
          <Bloom intensity={0.4} luminanceThreshold={0.2} />
        </EffectComposer>
      </Suspense>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  );
};

export default HeroCanvas;
