import { useGLTF } from "@react-three/drei";

const TapModel = ({ type, size }) => {
  const modelPath =
    type === "Tap 1"
      ? "/assets/models/taps/tap-8102.glb"
      : "/assets/models/taps/tap-8302.glb";

  const { scene } = useGLTF(modelPath);

  const widthValue = parseFloat(size.width.replace("m", ""));

  //* Position the tap on top of the countertop
  let position;
  if (widthValue === 1.2) {
    position = [0, 0.04, 0.08];
  } else {
    position = [0, 0.04, -0.16];
  }

  return <primitive object={scene} position={position} />;
};

export default TapModel;
