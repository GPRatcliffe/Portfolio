import {
  KeyboardControls,
  KeyboardControlsEntry,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lighting from "../Lighting/Lighting";
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import { Model } from "../layout/layout";
import User from "../User/User";
import { useMemo } from "react";
import { CONTROLS } from "@/constants";

const Experience = () => {
  const map = useMemo<KeyboardControlsEntry<CONTROLS>[]>(
    () => [
      { name: CONTROLS.forward, keys: ["ArrowUp", "KeyW"] },
      { name: CONTROLS.backward, keys: ["ArrowDown", "KeyS"] },
      { name: CONTROLS.left, keys: ["ArrowLeft", "KeyA"] },
      { name: CONTROLS.right, keys: ["ArrowRight", "KeyD"] },
      { name: CONTROLS.jump, keys: ["Space"] },
    ],
    []
  );
  return (
    <KeyboardControls map={map}>
      <Canvas shadows>
        <OrbitControls enableRotate={false} enableZoom={false} />

        <Lighting />

        <Perf />

        <Physics gravity={[0, -30, 0]}>
          <Model />
          <User />
        </Physics>
      </Canvas>
    </KeyboardControls>
  );
};

export default Experience;
