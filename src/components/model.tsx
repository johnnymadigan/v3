/**
 * Auto-generated by: https://github.com/pmndrs/gltfjsx
 */

import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Object3D } from "three";
import { easing } from "maath";
import { Mesh } from "three";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
  };
  materials: {
    head: THREE.MeshPhysicalMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/hotline-miami.glb") as GLTFResult;

  // follow mouse technique
  // inspo: https://codesandbox.io/s/look-at-camera-with-vertex-shader-forked-ng6ozq?file=/src/App.js:299-351
  const modelRef = useRef<Mesh | null>(null);
  const [dummy] = useState(() => new Object3D());

  useFrame((state, dt) => {
    let x = (state.pointer.x * -1) / 2.5;
    let y = state.pointer.y / 2.5;
    dummy.lookAt(x, y, 1);
    if (modelRef && modelRef.current) {
      easing.dampQ(modelRef.current.quaternion, dummy.quaternion, 0.15, dt);
    }
  });

  return (
    <group {...props} dispose={null}>
      <group position={[2, -20, 0]} rotation={[4.5, -0.1, -0.1]}>
        <mesh
          ref={modelRef}
          geometry={nodes.Object_2.geometry}
          material={materials.head}
          position={[0.06, 0.35, 18.87]}
          rotation={[-0.01, -0.14, -0.09]}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.head}
          position={[0.06, 0.35, 18.87]}
          rotation={[-0.01, -0.14, -0.09]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/hotline-miami.glb");
