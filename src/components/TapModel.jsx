import { useGLTF } from "@react-three/drei";

const TapModel = ({ type, size }) => {
  const modelPath =
    type === "Tap 1"
      ? "/assets/models/taps/tap-8102.glb"
      : "/assets/models/taps/tap-8302.glb";

  const { scene } = useGLTF(modelPath);

  //* Position the tap on top of the countertop
  //* Adjust position based on countertop size
  const position = [0.05, 0.09, 0.01]; // Slightly towards the back of the sink
  const rotation = [0, -Math.PI / 2, 0];

  return <primitive object={scene} position={position} rotation={rotation} />;
};

export default TapModel;
