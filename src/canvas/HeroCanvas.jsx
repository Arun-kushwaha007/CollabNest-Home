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

// Custom component for animated network nodes
function Network() {
  const group = useRef();
  // Example node positions (could be randomized or more elaborate)
  const nodes = [
    [1.5, 0, 0],
    [2.5, 1.5, -1],
    [-1.2, 2.2, 0.8],
    [-1.5, -1.5, -0.5],
    [1, -1.3, 1.5],
    [.8, 2.5, -1.2],
  ];
  // Pairs of indices to connect with lines
  const connections = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
    [1, 2], [2, 3], [3, 4], [4, 5], [5, 1]
  ];

  // Animate the group for a subtle floating effect
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.15;
      group.current.position.y = Math.sin(clock.getElapsedTime() * 0.7) * 0.2;
    }
  });

  

  return (
    <group ref={group}>
      {/* Render nodes */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={0.7}
            roughness={0.2}
            metalness={0.6}
          />
        </mesh>
      ))}
      {/* Render connections */}
      {connections.map(([a, b], i) => (
        <line key={i}>
          <bufferGeometry
            attach="geometry"
            setFromPoints={
              [new THREE.Vector3(...nodes[a]), new THREE.Vector3(...nodes[b])]
            }
          />
          <lineBasicMaterial color="#38bdf8" linewidth={2} />
        </line>
      ))}
    </group>
  );
}

function CollaborationNetwork() {
  const group = useRef();
  // Card positions (could be randomized or more elaborate)
  const cards = [
    [2.6, 1.6, 2],
    [1.6, 0.6, -1],
    [-1.4, 1.2, 0.8],
    [-1.7, -1, -0.5],
    [1.2, -1.3, 1],
    [0.9, 1.7, -1.2],
  ];
  // Connections between cards
  const connections = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
    [1, 2], [2, 3], [3, 4], [4, 5], [5, 1]
  ];

  // Animate the group for a subtle floating effect
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.15;
      group.current.position.y = Math.sin(clock.getElapsedTime() * 0.7) * 0.2;
    }
  });

  return (
    <group ref={group}>
      {/* Render cards */}
      {cards.map((pos, i) => (
        <mesh key={i} position={pos} rotation={[0.2, 0.2, 0]}>
          <boxGeometry args={[0.5, 0.32, 0.05]} />
          <meshStandardMaterial
            color="#fff"
            emissive="#38bdf8"
            emissiveIntensity={0.25}
            roughness={0.3}
            metalness={0.2}
          />
          {/* Card accent line (top edge) */}
          <mesh position={[0, 0.18, 0.028]}>
            <boxGeometry args={[0.48, 0.04, 0.01]} />
            <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.7} />
          </mesh>
        </mesh>
      ))}
      {/* Render connections */}
      {connections.map(([a, b], i) => (
        <line key={i}>
          <bufferGeometry
            setFromPoints={[
              new THREE.Vector3(...cards[a]),
              new THREE.Vector3(...cards[b])
            ]}
          />
          <lineBasicMaterial color="#384df8" linewidth={2} />
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
         <color attach="background" args={["#0e1726"]} /> 

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <Stars
        radius={100}
        depth={60}
        count={7000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Suspense fallback={null}>
        <Network />
        <CollaborationNetwork/>
        <Environment preset="sunset" />
        <EffectComposer>
          <Bloom intensity={0.3} luminanceThreshold={0.2} />
        </EffectComposer>
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  );
};

export default HeroCanvas;