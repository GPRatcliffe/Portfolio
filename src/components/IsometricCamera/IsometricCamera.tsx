import { OrthographicCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

const OrthoCamera = ({ targetRef }: { targetRef: React.RefObject<any> }) => {
  const cameraRef = useRef(null);
  const { camera } = useThree();

  const desiredPos = new Vector3();
  const smoothPos = new Vector3();
  const prevPos = useRef(new Vector3());
  const velocity = new Vector3();
  const offset = new Vector3(4, 6, 10); // isometric angle offset

  useFrame((_, delta) => {
    if (!targetRef.current || !cameraRef.current) return;

    // Get current position from Rapier
    const t = targetRef.current.translation();
    const currentPos = new Vector3(t.x, t.y, t.z);

    // Compute velocity vector
    velocity.subVectors(currentPos, prevPos.current).divideScalar(delta);

    // --- Update previous position for next frame
    prevPos.current.copy(currentPos);

    // --- Apply trailing offset based on velocity
    const trailOffset = velocity.clone().normalize().multiplyScalar(0); // trail distance
    if (velocity.lengthSq() < 0.001) trailOffset.set(0, 0, 0); // don’t offset if stationary

    // --- Final camera target = playerPos + isometricOffset + trailingOffset
    desiredPos.copy(currentPos).add(offset).add(trailOffset);

    // --- Smooth follow
    smoothPos.lerpVectors(
      camera.position,
      desiredPos,
      1 - Math.pow(0.1, delta * 60)
    );
    camera.position.copy(smoothPos);
    camera.lookAt(currentPos);
  });

  return (
    <OrthographicCamera
      ref={cameraRef}
      makeDefault
      zoom={120}
      near={0.1}
      far={800}
      position={[4, 6, 10]}
    />
  );
};

export default OrthoCamera;
