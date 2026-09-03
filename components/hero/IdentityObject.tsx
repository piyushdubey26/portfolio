"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { MousePosition } from "@/lib/useMousePosition";

interface IdentityObjectProps {
  mouse: MousePosition;
  isTransitioning: boolean;
  prefersReducedMotion: boolean;
}

export const IdentityObject: React.FC<IdentityObjectProps> = ({
  mouse,
  isTransitioning,
  prefersReducedMotion,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Group>(null);
  const dustRef = useRef<THREE.Points>(null);

  // Titanium/Dark Metal Shaders & Materials
  const titaniumMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#181b22"),
        emissive: new THREE.Color("#050811"),
        metalness: 0.92,
        roughness: 0.18,
        clearcoat: 0.6,
        clearcoatRoughness: 0.1,
        reflectivity: 0.9,
      }),
    []
  );

  const obsidianMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#0d0e12"),
        metalness: 0.8,
        roughness: 0.25,
        clearcoat: 0.9,
        clearcoatRoughness: 0.08,
        transmission: 0.15,
        ior: 1.5,
      }),
    []
  );

  const accentMetalMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#e2e8f0"),
        metalness: 0.95,
        roughness: 0.12,
      }),
    []
  );

  // Sparse atmospheric dust particles (ambient depth)
  const particleCount = 60;
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.2 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = (radius * Math.sin(phi) * Math.sin(theta)) * 0.7;
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();

    // 1. Continuous Slow & Smooth Ambient Motion
    if (!prefersReducedMotion) {
      // Slow rotation around Y axis
      groupRef.current.rotation.y += delta * 0.18;

      // Subtle breathing float on Y axis
      groupRef.current.position.y = Math.sin(time * 0.8) * 0.08;

      // Internal counter-rotations
      if (innerRingRef.current) {
        innerRingRef.current.rotation.x = Math.sin(time * 0.4) * 0.2 + 0.3;
        innerRingRef.current.rotation.z += delta * 0.08;
      }
      if (outerRingRef.current) {
        outerRingRef.current.rotation.y -= delta * 0.12;
        outerRingRef.current.rotation.x = Math.cos(time * 0.35) * 0.15 - 0.2;
      }
      if (coreRef.current) {
        coreRef.current.rotation.y += delta * 0.1;
        coreRef.current.rotation.x = Math.sin(time * 0.6) * 0.1;
      }
      if (dustRef.current) {
        dustRef.current.rotation.y += delta * 0.03;
      }
    }

    // 2. Mouse Parallax with Damped Easing
    if (!prefersReducedMotion) {
      const targetRotX = -mouse.y * 0.25;
      const targetRotZ = mouse.x * 0.2;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotX,
        0.04
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        targetRotZ,
        0.04
      );
    }

    // 3. Cinematic ENTER Transition Animation
    if (isTransitioning) {
      groupRef.current.scale.lerp(new THREE.Vector3(2.5, 2.5, 2.5), delta * 2.2);
      groupRef.current.position.z = THREE.MathUtils.lerp(
        groupRef.current.position.z,
        2.0,
        delta * 2.5
      );
      if (coreRef.current) {
        coreRef.current.rotation.y += delta * 1.5;
      }
    } else {
      groupRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), delta * 3);
      groupRef.current.position.z = THREE.MathUtils.lerp(
        groupRef.current.position.z,
        0,
        delta * 3
      );
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.1, 0]}>
      {/* Central Faceted Identity Polyhedron (Monogram Core) */}
      <mesh ref={coreRef} material={titaniumMaterial}>
        <octahedronGeometry args={[0.92, 0]} />
      </mesh>

      {/* Embedded Secondary Crystal Facet with Obsidian Glass */}
      <mesh material={obsidianMaterial} scale={[0.75, 0.75, 0.75]} rotation={[0.4, 0.4, 0]}>
        <dodecahedronGeometry args={[0.78, 0]} />
      </mesh>

      {/* Inner Precision Orbital Axis (Precision Monogram Spine & Arc) */}
      <group ref={innerRingRef}>
        {/* Orbital Ring 1 - Slender precision torus */}
        <mesh material={titaniumMaterial}>
          <torusGeometry args={[1.35, 0.018, 16, 80]} />
        </mesh>
        {/* Subtle accent clips on the ring */}
        <mesh position={[1.35, 0, 0]} material={accentMetalMaterial}>
          <boxGeometry args={[0.06, 0.08, 0.06]} />
        </mesh>
        <mesh position={[-1.35, 0, 0]} material={accentMetalMaterial}>
          <boxGeometry args={[0.06, 0.08, 0.06]} />
        </mesh>
      </group>

      {/* Outer Gyroscopic Ring */}
      <group ref={outerRingRef} rotation={[Math.PI / 3, 0, Math.PI / 6]}>
        <mesh material={titaniumMaterial}>
          <torusGeometry args={[1.75, 0.014, 16, 96]} />
        </mesh>
        {/* Geometric datum notches */}
        <mesh position={[0, 1.75, 0]} material={accentMetalMaterial}>
          <cylinderGeometry args={[0.03, 0.03, 0.1, 8]} />
        </mesh>
        <mesh position={[0, -1.75, 0]} material={accentMetalMaterial}>
          <cylinderGeometry args={[0.03, 0.03, 0.1, 8]} />
        </mesh>
      </group>

      {/* Subtle Axial Fin / Architectural Monogram Element */}
      <mesh position={[0, 0, 0]} material={accentMetalMaterial}>
        <cylinderGeometry args={[0.015, 0.015, 2.3, 16]} />
      </mesh>

      {/* Sparse Atmospheric Dust Motes */}
      <points ref={dustRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#cbd5e1"
          transparent
          opacity={0.35}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
};
