import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect, useMemo } from "react";

const CountertopModel = ({ size, material }) => {
  const lengthSize = size.length.replace("m", "");
  const widthSize = size.width.replace("m", "");

  //* Set model path based on length and width
  const modelPath = `/assets/models/counter_top/countertop-${lengthSize}m-by-${widthSize}m.glb`;

  const { scene } = useGLTF(modelPath);
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  //* Get texture paths based on material
  let texturePath;
  switch (material) {
    case "S034 - White":
      texturePath = "/assets/textures/Texture-S034.avif";
      break;
    case "G116 - Granite Walnut":
      texturePath = "/assets/textures/Texture-G116.jpg";
      break;
    case "VA023 - Vaesuvo":
      texturePath = "/assets/textures/Texture-VA023.avif";
      break;
    case "M201 - Marble":
      texturePath = "/assets/textures/Texture-M201.jpeg";
      break;
    default:
      texturePath = "/assets/textures/Texture-S034.avif";
  }

  //* Load texture and apply to the model
  const texture = useTexture(texturePath);

  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.material.map = texture;
        child.material.needsUpdate = true;
      }
    });
  }, [clonedScene, texture]);
  return <primitive object={clonedScene} />;
};

export default CountertopModel;
