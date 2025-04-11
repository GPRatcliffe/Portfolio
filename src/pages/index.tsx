import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Canvas, useThree } from "@react-three/fiber";
import {
  ContactShadows,
  OrbitControls,
  OrthographicCamera,
} from "@react-three/drei";
import { Model } from "@/components/layout/layout.component";
import * as THREE from "three";
import OrthoCamera from "@/components/OrthoCamera/OrthoCamera.component";
import User from "@/components/User/User.component";
import Lighting from "@/components/Lighting/Lighting.component";

export default function Home() {
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
        <Canvas shadows>
          <OrthoCamera />
          <OrbitControls enableRotate={false} enableZoom={false} />
          <gridHelper />

          <Lighting />

          <Model />
          <User />
        </Canvas>
      </main>
    </>
  );
}
