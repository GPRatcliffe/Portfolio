import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { useRef } from "react";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import OrthoCamera from "../IsometricCamera/IsometricCamera";
import { MOVEMENT_SPEED } from "@/constants";

const User = () => {
  const rigidBodyRef = useRef(null);
  const [, get] = useKeyboardControls();

  const targetDirection = new Vector3();

  useFrame((_, delta) => {
    if (!rigidBodyRef.current) return;

    const body: any = rigidBodyRef.current;
    const pos = body.translation();
    const direction = get();

    targetDirection.set(0, 0, 0);
    if (direction.forward) targetDirection.z -= 1;
    if (direction.backward) targetDirection.z += 1;
    if (direction.left) targetDirection.x -= 1;
    if (direction.right) targetDirection.x += 1;

    // Move if movement triggered
    if (targetDirection.lengthSq() > 0) {
      targetDirection.normalize().multiplyScalar(MOVEMENT_SPEED * delta);

      const nextPosition = new Vector3(pos.x, pos.y, pos.z).add(
        targetDirection
      );
      body.setNextKinematicTranslation(nextPosition);
    }
  });

  return (
    <>
      <RigidBody
        ref={rigidBodyRef}
        colliders={false}
        mass={1}
        type="kinematicPosition"
        position={[0, 0.8, 0]}
        enabledRotations={[false, false, false]}
        scale={0.2}
      >
        <CapsuleCollider args={[1, 1]} />
        <group>
          <mesh position={[0, 0, 0]} castShadow>
            <capsuleGeometry />
            <meshStandardMaterial color={0xff00ff} />
          </mesh>
        </group>
      </RigidBody>

      <OrthoCamera targetRef={rigidBodyRef} />
    </>
  );
};

export default User;
