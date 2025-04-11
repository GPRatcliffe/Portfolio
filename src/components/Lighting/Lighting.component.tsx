const Lighting = () => {
  return (
    <group name="Lighting">
      <ambientLight color={0xffffff} intensity={0.4} />
      <directionalLight
        color={0xffffff}
        intensity={1}
        position={[-40, 40, 0]}
      />
    </group>
  );
};

export default Lighting;
