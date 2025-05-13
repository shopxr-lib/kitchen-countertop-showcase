import { useGLTF } from "@react-three/drei";

const BasinModel = ({ type, size }) => {
  const modelPath =
    type === "Basin 1"
      ? "/assets/models/basin/basin-1.glb"
      : "/assets/models/basin/basin-2.glb";

  const { scene } = useGLTF(modelPath);

  //* Position the basin on top of countertop
  //* Adjust position based on countertop size
  const lengthValue = parseInt(size.length.replace("m", ""));
  const widthValue = parseFloat(size.width.replace("m", ""));

  let position;
  if (widthValue === 1.2) {
    position = [0, 0.04, 0.25];
  } else {
    position = [0, 0.04, 0];
  }

  return <primitive object={scene} position={position} />;
};

export default BasinModel;
