import React from "react";

const Lights = () => {
  return (
    <>
      <fog attach="fog" args={["black", 0, 30]} />
      <ambientLight intensity={1} />
      <directionalLight
        position={[-0.5, 1, 0]}
        intensity={4}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      ></directionalLight>
    </>
  );
};

export default Lights;
