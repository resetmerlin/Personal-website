/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/retro_computer_setup_free.glb
Author: Brandon Westlake (https://sketchfab.com/dr.badass2142)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/retro-computer-setup-free-82eaf2047e0447a1bfea22482f1d1404
Title: Retro Computer Setup (FREE)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Lights from "../3d-Handler/Lights";
export function Model(props) {
  const { nodes, materials } = useGLTF("/retro_computer_setup_free.glb");
  return (
    <>
      <Lights />
      <group
        {...props}
        dispose={null}
        rotation={[-0.3, 0, -0.3]}
        position={[2, 0, -5]}
      >
        <mesh
          geometry={
            nodes.retro_computer_setup_retro_computer_setup_Mat_0.geometry
          }
          scale={0.08}
          material={materials.retro_computer_setup_Mat}
          rotation={[-Math.PI / 2.1, 0, -0.8]}
          position={[-Math.PI / 20, -4, 4]}
        />
      </group>
    </>
  );
}

useGLTF.preload("/retro_computer_setup_free.glb");