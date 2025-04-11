import { OrthographicCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const OrthoCamera = () => {
  const { size } = useThree();
  useThree(({ camera }) => {
    camera.rotation.set(
      THREE.MathUtils.degToRad(90),
      THREE.MathUtils.degToRad(0),
      THREE.MathUtils.degToRad(-205)
    );
  });
  return (
    <OrthographicCamera
      makeDefault
      zoom={120}
      near={0.1}
      far={800}
      position={[10, 8, 10]}
    />
  );
};

export default OrthoCamera;
