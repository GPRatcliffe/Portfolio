import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { RigidBody } from "@react-three/rapier";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cube009: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube011: THREE.Mesh;
    Cube012: THREE.Mesh;
    Cube013: THREE.Mesh;
    Cube014: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export function Model() {
  // @ts-ignore
  const { nodes, materials } = useGLTF(
    "/portfolioSiteOutline.glb"
  ) as GLTFResult;
  return (
    <RigidBody type="fixed">
      <mesh
        name="Cube"
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        scale={[4.945, 0.451, 4.341]}
      />
      <mesh
        name="Cube001"
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[2.323, 0, -8.666]}
        scale={[1.242, 0.451, 4.341]}
      />
      <mesh
        name="Cube002"
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[8.288, 0, -22.764]}
        scale={[10.318, 0.451, 9.768]}
      />
      <mesh
        name="Cube003"
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[14.357, 0, -36.768]}
        scale={[1.242, 0.451, 4.341]}
      />
      <mesh
        name="Cube004"
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[22.858, 0, -16.272]}
        rotation={[0, -1.571, 0]}
        scale={[1.242, 0.451, 4.341]}
      />
      <mesh
        name="Cube005"
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[14.41, 0, -50.88]}
        scale={[10.318, 0.451, 9.768]}
      />
      <mesh
        name="Cube006"
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[-6.161, 0, -22.432]}
        rotation={[0, -1.571, 0]}
        scale={[1.242, 0.451, 4.341]}
      />
      <mesh
        name="Cube007"
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
        position={[-16.442, 0, -22.764]}
        rotation={[0, 0, -Math.PI]}
        scale={[-6.019, -0.451, -5.446]}
      />
      <mesh
        name="Cube008"
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={nodes.Cube008.material}
        position={[37.557, 0, -17.831]}
        scale={[10.318, 0.451, 3.352]}
      />
      <mesh
        name="Cube009"
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={nodes.Cube009.material}
        position={[-16.363, 0, -39.626]}
        rotation={[0, 0, -Math.PI]}
        scale={[-6.019, -0.451, -5.446]}
      />
      <mesh
        name="Cube010"
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={nodes.Cube010.material}
        position={[-32.967, 0, -12.032]}
        rotation={[0, 0, -Math.PI]}
        scale={[-6.019, -0.451, -14.556]}
      />
      <mesh
        name="Cube011"
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={nodes.Cube011.material}
        position={[-16.363, 0, -8.092]}
        rotation={[0, 0, -Math.PI]}
        scale={[-6.019, -0.451, -5.446]}
      />
      <mesh
        name="Cube012"
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={nodes.Cube012.material}
        position={[-24.959, 0, -22.432]}
        rotation={[0, -1.571, 0]}
        scale={[1.242, 0.451, 4.341]}
      />
      <mesh
        name="Cube013"
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={nodes.Cube013.material}
        position={[-19.893, 0, -29.977]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.242, 0.451, 4.341]}
      />
      <mesh
        name="Cube014"
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={nodes.Cube014.material}
        position={[-15.888, 0, -15.551]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.242, 0.451, 4.341]}
      />
    </RigidBody>
  );
}

useGLTF.preload("/portfolioSiteOutline.glb");
