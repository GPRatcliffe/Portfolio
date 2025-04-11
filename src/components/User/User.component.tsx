const User = () => {
  return (
    <group>
      <mesh position={[0, 0.9, 0]} scale={0.3} castShadow>
        <capsuleGeometry />
        <meshStandardMaterial color={0xff00ff} />
      </mesh>
    </group>
  );
};

export default User;
