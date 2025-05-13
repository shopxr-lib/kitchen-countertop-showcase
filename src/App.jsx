import { Canvas } from "@react-three/fiber";
import { useConfig } from "./context/ConfigContext";
import CameraSetup from "./components/CameraSetup";
import { Suspense } from "react";
import Scene3D from "./components/Scene3D";
import ControlButtons from "./components/ControlButtons";
import CustomizationDrawer from "./components/CustomizationDrawer";
import Branding from "./components/Branding";
import ShoppingCartDrawer from "./components/ShoppingCartDrawer";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function App() {
  //* Apply canvas adjustments for desktop/tablet when customization drawer is open
  const { customizeOpen } = useConfig();
  return (
    <div className="h-screen w-full bg-gray-400/90 overflow-hidden">
      <div
        className={`h-full transition-all duration-300 ${
          customizeOpen ? "ml-64 md:ml-64" : "ml-0"
        }`}
      >
        <Canvas
          shadows
          gl={{
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.1,
          }}
        >
          <CameraSetup />
          <Suspense fallback={null}>
            <Scene3D />
            <Environment preset="apartment" />
          </Suspense>
          <OrbitControls enablePan={false} minDistance={1} maxDistance={5} />
        </Canvas>
      </div>

      <ControlButtons />
      <CustomizationDrawer />
      <ShoppingCartDrawer />
      <Branding />
    </div>
  );
}

export default App;
