import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

const CountertopModel = ({ size, material }) => {
  const lengthSize = size.length.replace("m", "");
  const widthSize = size.width.replace("m", "");

  //* Set model path based on length and width
  const modelPath = `/assets/models/counter_top/countertop-${lengthSize}m-by-${widthSize}m.glb`;

  const { scene } = useGLTF(modelPath);
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  //* Get texture paths and material properties based on material
  const textureConfig = {
    "S034 - White": {
      path: "/assets/textures/Texture-S034.avif",
      roughness: 0.8,
      metalness: 0.6,
    },
    "G116 - Granite Walnut": {
      path: "/assets/textures/Texture-G116.jpg",
      roughness: 0.6,
      metalness: 0.8,
    },
    "VA023 - Vaesuvo": {
      path: "/assets/textures/Texture-VA023.avif",
      roughness: 0.6,
      metalness: 0.8,
    },
    "M201 - Marble": {
      path: "/assets/textures/Texture-M201.jpeg",
      roughness: 0.6,
      metalness: 0.8,
    },
    default: {
      path: "/assets/textures/Texture-S034.avif",
      roughness: 0.4,
      metalness: 0.1,
    },
  };

  const selectedConfig = textureConfig[material] || textureConfig.default;

  //* Load texture and apply to the model
  const texture = useTexture(selectedConfig.path);

  //* Configure texture properties
  useEffect(() => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(lengthSize / 1, widthSize / 0.6); // Scale texture based on model size
    texture.anisotropy = 4; // Improve texture sharpness
    texture.needsUpdate = true;
  }, [texture, lengthSize, widthSize]);

  //* Apply material to the model
  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        const material = new THREE.MeshStandardMaterial({
          map: texture,
          roughness: selectedConfig.roughness,
          metalness: selectedConfig.metalness,
          side: THREE.DoubleSide, // Ensure texture is visible from all angles
        });
        child.material = material;
        child.material.needsUpdate = true;
      }
    });
  }, [clonedScene, texture, selectedConfig]);

  let rotation;

  if (modelPath === "/assets/models/counter_top/countertop-1m-by-0.6m.glb") {
    rotation = [0, Math.PI / 2, 0];
  } else {
    rotation = [0, 0, 0];
  }

  return <primitive object={clonedScene} rotation={rotation} />;
};

export default CountertopModel;
