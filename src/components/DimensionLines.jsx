import { Html } from "@react-three/drei";
import React from "react";

const DimensionLines = ({ size }) => {
  const lengthValue = parseInt(size.length.replace("m", ""));
  const widthValue = parseFloat(size.width.replace("m", ""));

  //* Dimension Line postions based on countertop size
  const lengthHalf = lengthValue / 2;
  const widthHalf = widthValue / 2;

  return (
    <group>
      {/* Length Dimension Line */}
      <group position={[0, 0, widthHalf + 0.1]}>
        <mesh position={[0, -0.1, 0]}>
          <boxGeometry args={[lengthValue, 0.005, 0.005]} />
          <meshBasicMaterial color="black" />
        </mesh>

        {/* Left Line Caps */}
        <mesh
          position={[-lengthValue / 2, -0.1, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <boxGeometry args={[0.02, 0.004, 0.005]} />
          <meshBasicMaterial color="black" />
        </mesh>
        {/* Right Line Caps */}
        <mesh position={[lengthHalf, -0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.02, 0.004, 0.005]} />
          <meshBasicMaterial color="black" />
        </mesh>

        {/* Text to display length dimension value */}
        <Html position={[0, -0.17, 0]} center>
          <div className="text-black text-lg font-medium bg-white px-2 py-0.5 shadow-md rounded">
            {size.length}
          </div>
        </Html>
      </group>

      {/* Width Dimension Line */}
      <group position={[lengthHalf + 0.1, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <mesh position={[0, -0.1, 0]}>
          <boxGeometry args={[widthValue, 0.005, 0.005]} />
          <meshBasicMaterial color="black" />
        </mesh>

        {/* Left Line Caps */}
        <mesh position={[-widthHalf, -0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.02, 0.004, 0.005]} />
          <meshBasicMaterial color="black" />
        </mesh>
        {/* Right Line Caps */}
        <mesh position={[widthHalf, -0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.02, 0.004, 0.005]} />
          <meshBasicMaterial color="black" />
        </mesh>

        {/* Text to display length dimension value */}
        <Html position={[0, -0.17, 0]} center>
          <div className="text-black text-lg font-medium bg-white px-2 py-0.5 shadow-md rounded">
            {size.width}
          </div>
        </Html>
      </group>
    </group>
  );
};

export default DimensionLines;
