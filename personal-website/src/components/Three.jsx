import React, { Suspense } from "react";
import { useLoader, Canvas, useFrame } from "@react-three/fiber";
import { Model } from "./model/Laptop3d";
import Floor from "./3d-Handler/Floor";
import { softShadows, Loader, OrbitControls } from "@react-three/drei";

const Three = () => {
  const aspect = window.innerWidth / window.innerHeight;

  return (
    <Canvas
      colormangement="true"
      shadowmap="true "
      camera={{ position: [-5, 4, 4], fov: 50 }}
    >
      <Suspense fallback={null}>
        <Model />
        <Floor />
      </Suspense>
    </Canvas>
  );
};

export default Three;
