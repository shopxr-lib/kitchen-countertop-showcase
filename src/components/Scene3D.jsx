import React from "react";
import { useConfig } from "../context/ConfigContext";
import CountertopModel from "./CountertopModel";
import BasinModel from "./BasinModel";
import TapModel from "./TapModel";
import DimensionLines from "./DimensionLines";

const Scene3D = () => {
  const { counterSize, basinType, material, tapType, showDimensions } =
    useConfig();
  return (
    <group>
      <CountertopModel size={counterSize} material={material} />
      <BasinModel size={counterSize} type={basinType} />
      <TapModel size={counterSize} type={tapType} />
      {showDimensions && <DimensionLines size={counterSize} />}

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <spotLight position={[-5, 5, 2]} intensity={0.8} castShadow />
    </group>
  );
};

export default Scene3D;
