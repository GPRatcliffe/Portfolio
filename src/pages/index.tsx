import { useMemo } from "react";
import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import {
  KeyboardControls,
  KeyboardControlsEntry,
  OrbitControls,
} from "@react-three/drei";
import { Model } from "@/components/layout/layout";
import User from "@/components/User/User";
import Lighting from "@/components/Lighting/Lighting";

import { Physics } from "@react-three/rapier";
import { Perf } from "r3f-perf";

enum Controls {
  forward = "forward",
  backward = "backward",
  left = "left",
  right = "right",
  jump = "jump",
}

const Home = () => {
  const map = useMemo<KeyboardControlsEntry<Controls>[]>(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.backward, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.jump, keys: ["Space"] },
    ],
    []
  );
  return (
    <>
      <Head>
        <title>Portfolio site of Gary Ratcliffe</title>
        <meta
          name="description"
          content="Gary Ratcliffe, Front End Software Engineer with over 12 years experience in the industry"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
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
      </main>
    </>
  );
};

export default Home;
