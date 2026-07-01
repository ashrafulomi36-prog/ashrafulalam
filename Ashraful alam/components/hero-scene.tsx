"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function WireframeIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.12;
    meshRef.current.rotation.x += delta * 0.04;
    // subtle parallax toward the cursor
    meshRef.current.rotation.y += (pointer.x * 0.3 - meshRef.current.rotation.y * 0.02) * delta;
    meshRef.current.rotation.x += (pointer.y * 0.15 - meshRef.current.rotation.x * 0.02) * delta;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.9, 1]} />
      <meshBasicMaterial color="#4f46e5" wireframe transparent opacity={0.35} />
    </mesh>
  );
}

function Particles() {
  const points = useRef<THREE.Points>(null);
  const count = 220;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
  }

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#8b7cf8" transparent opacity={0.5} />
    </points>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <WireframeIcosahedron />
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
}
