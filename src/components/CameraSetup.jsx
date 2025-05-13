import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";

const CameraSetup = () => {
  const cameraRef = useRef();
  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[0, 1, 3]}
      fov={25}
    />
  );
};

export default CameraSetup;
