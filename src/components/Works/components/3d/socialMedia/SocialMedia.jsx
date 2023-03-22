import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function SocialMedia(props) {
  const { nodes, materials } = useGLTF("/linkedin-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.Material}
        position={[0, 0, 0.12]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-1.03, 1.09, 0.07]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials["Material.001"]}
        position={[-0.78, -0.7, 0.24]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.33, 0.79, 2.33]}
      />
    </group>
  );
}

useGLTF.preload("/linkedin-transformed.glb");
