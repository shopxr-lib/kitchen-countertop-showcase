import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";

const CameraSetup = () => {
  const cameraRef = useRef();
  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[-2, 1, 0]}
      fov={30}
    />
  );
};

export default CameraSetup;
