"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { IdentityObject } from "./IdentityObject";
import { MousePosition } from "@/lib/useMousePosition";

interface HeroSceneProps {
  mouse: MousePosition;
  isTransitioning: boolean;
  prefersReducedMotion: boolean;
  onSceneReady?: () => void;
}

// Camera controller for smooth parallax and cinematic dolly-in
const CameraRig: React.FC<{
  mouse: MousePosition;
  isTransitioning: boolean;
  prefersReducedMotion: boolean;
}> = ({ mouse, isTransitioning, prefersReducedMotion }) => {
  const initialZ = 5.0;

  useFrame((state, delta) => {
    const camera = state.camera;

    // Cinematic zoom dolly
    if (isTransitioning) {
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 2.0, delta * 2.8);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0, delta * 2);
    } else {
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, initialZ, delta * 2.5);

      if (!prefersReducedMotion) {
        // Subtly parallax camera position with smooth damping
        const targetX = mouse.x * 0.35;
        const targetY = mouse.y * 0.25;
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.04);
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.04);
      }
    }

    camera.lookAt(0, 0.1, 0);
  });

  return null;
};

export const HeroScene: React.FC<HeroSceneProps> = ({
  mouse,
  isTransitioning,
  prefersReducedMotion,
  onSceneReady,
}) => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        dpr={[1, 1.8]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.15,
        }}
        onCreated={() => {
          if (onSceneReady) {
            onSceneReady();
          }
        }}
      >
        <CameraRig
          mouse={mouse}
          isTransitioning={isTransitioning}
          prefersReducedMotion={prefersReducedMotion}
        />

        {/* Ambient base lighting */}
        <ambientLight intensity={0.7} color="#151922" />

        {/* Primary Key Light */}
        <directionalLight
          position={[4, 5, 4]}
          intensity={2.8}
          color="#f8fafc"
        />

        {/* Subtle Rim Light (Silvery backlight for edge definition) */}
        <directionalLight
          position={[-4, -3, -3]}
          intensity={2.2}
          color="#94a3b8"
        />

        {/* Overhead Spot for Crystalline Highlights */}
        <spotLight
          position={[0, 6, 2]}
          intensity={1.5}
          angle={0.6}
          penumbra={0.8}
          color="#e2e8f0"
        />

        {/* Soft Point fill from underneath */}
        <pointLight position={[0, -3, 2]} intensity={0.6} color="#38bdf8" />

        <Suspense fallback={null}>
          <IdentityObject
            mouse={mouse}
            isTransitioning={isTransitioning}
            prefersReducedMotion={prefersReducedMotion}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
