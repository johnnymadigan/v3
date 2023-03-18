/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Urpo (https://sketchfab.com/Urpo)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/hello-my-friends-9c20a10f2352406fa90485fafc531fa9
title: Hello my friends
*/

import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh, Object3D } from "three";
import { easing } from "maath";

type GLTFResult = GLTF & {
  nodes: {
    ["hahmo_01_-_Default_0"]: THREE.Mesh;
    ["silm��t_03_-_Default_0"]: THREE.Mesh;
    ["jalat_07_-_Default_0"]: THREE.Mesh;
    ["Cylinder004_08_-_Default_0"]: THREE.Mesh;
    ["Plane001_02_-_Default_0"]: THREE.Mesh;
    ["suu_03_-_Default_0"]: THREE.Mesh;
    ["hahmo_reunat_09_-_Default_0"]: THREE.Mesh;
    ["jalat_reunat_09_-_Default_0"]: THREE.Mesh;
    Object_7: THREE.SkinnedMesh;
    Object_9: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    ["01_-_Default"]: THREE.MeshStandardMaterial;
    ["03_-_Default"]: THREE.MeshStandardMaterial;
    ["07_-_Default"]: THREE.MeshStandardMaterial;
    ["08_-_Default"]: THREE.MeshStandardMaterial;
    ["02_-_Default"]: THREE.MeshStandardMaterial;
    ["09_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export const Model = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>(null);
  const avatarRef = useRef<Group | null>(null);
  const { nodes, materials, animations } = useGLTF(
    "/hello_my_friends.glb"
  ) as GLTFResult;
  const { actions, names } = useAnimations(animations, group);

  // follow mouse
  // inspo: https://codesandbox.io/s/look-at-camera-with-vertex-shader-forked-ng6ozq?file=/src/App.js:299-351
  const [dummy] = useState(() => new THREE.Object3D());

  useFrame((state, dt) => {
    let x = state.pointer.x / 2.5;
    let y = state.pointer.y / 2.5;
    dummy.lookAt(x, y, 1);
    if (avatarRef && avatarRef.current) {
      easing.dampQ(avatarRef.current.quaternion, dummy.quaternion, 0.15, dt);
    }
  });

  // trigger animation
  useEffect(() => {
    if (actions.twitch_char6) actions.twitch_char6.play();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[0, 0, -2]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.04}
        >
          <group
            name="71befc7a795942eda13c8625345d5dbbfbx"
            rotation={[-Math.PI, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  {/* avatar to follow mouse */}
                  <group ref={avatarRef}>
                    <group name="hahmo" position={[-0.23, -1.16, 0]}>
                      <mesh
                        name="hahmo_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["hahmo_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                    <group
                      name="silm��t"
                      position={[-6.24, -10.22, 8.23]}
                      rotation={[Math.PI / 2, 0, 0]}
                    >
                      <mesh
                        name="silm��t_03_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["silm��t_03_-_Default_0"].geometry}
                        material={materials["03_-_Default"]}
                      />
                    </group>
                    <group
                      name="suu"
                      position={[-0.34, -10.9, 5.5]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={[1, 1, 0.24]}
                    >
                      <mesh
                        name="suu_03_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["suu_03_-_Default_0"].geometry}
                        material={materials["03_-_Default"]}
                      />
                    </group>
                    <skinnedMesh
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={materials["07_-_Default"]}
                      skeleton={nodes.Object_7.skeleton}
                    />
                  </group>
                  {/* legs */}
                  <group
                    name="jalat"
                    position={[-4.32, -1.25, -4.64]}
                    scale={[0.9, 0.9, 1]}
                  >
                    <mesh
                      name="jalat_07_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["jalat_07_-_Default_0"].geometry}
                      material={materials["07_-_Default"]}
                    />
                  </group>
                  <group
                    name="Object_6"
                    position={[-19.16, -1.25, 4.84]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[0.56, 0.56, 1]}
                  />
                  <group
                    name="Object_8"
                    position={[-19.16, -1.25, 4.84]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[0.56, 0.56, 1]}
                  />
                  {/* shadow */}
                  <group name="Cylinder004" position={[0.16, -1.67, -5.12]}>
                    <mesh
                      name="Cylinder004_08_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Cylinder004_08_-_Default_0"].geometry}
                      material={materials["08_-_Default"]}
                    />
                  </group>
                  {/* speech bubble */}
                  <group
                    name="Plane001"
                    position={[21.58, 0, 24.97]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Plane001_02_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Plane001_02_-_Default_0"].geometry}
                      material={materials["02_-_Default"]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/hello_my_friends.glb");
