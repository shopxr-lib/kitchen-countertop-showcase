import { useState, createContext, useContext } from "react";

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  //* Initial States
  const [counterSize, setCounterSize] = useState({
    length: "1m",
    width: "0.6m",
  });
  const [basinType, setBasinType] = useState("Basin 1");
  const [tapType, setTapType] = useState("Tap 1");
  const [material, setMaterial] = useState("S034 - White");
  const [showDimensions, setShowDimensions] = useState(false);
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [additionalServices, setAdditionalServices] = useState({
    dismantling: false,
    throwAway: false,
  });

  //* Calculate prices based on the configuration
  const calculatePrice = () => {
    //* Base prices for components
    const basinPrice = 300;
    const tapPrice = 250;

    //* Calculate countertop material price based on size and material
    let materialPrice = 0;
    const lengthMeters = parseInt(counterSize.length.replace("m", ""));
    const isWider = counterSize.width === "1.2m";

    switch (material) {
      case "S034 - White":
        materialPrice =
          lengthMeters === 1 ? 500 : lengthMeters === 2 ? 680 : 880;
        break;
      case "G116 - Granite Walnut":
        materialPrice =
          lengthMeters === 1 ? 600 : lengthMeters === 2 ? 880 : 1080;
        break;
      case "VA023 - Vaesuvo":
        materialPrice =
          lengthMeters === 1 ? 700 : lengthMeters === 2 ? 980 : 1180;
        break;
      case "M201 - Marble":
        materialPrice =
          lengthMeters === 1 ? 800 : lengthMeters === 2 ? 1080 : 1280;
        break;
      default:
        materialPrice = 500;
    }

    //* Double material price for wider countertops
    if (isWider) {
      materialPrice *= 2;
    }

    //* Calculate additional services prices
    const additionalServicesPrice =
      (additionalServices.dismantling ? 300 : 0) +
      (additionalServices.throwAway ? 200 : 0);

    //* Calculate individual prices and total
    const prices = {
      basin: basinPrice,
      tap: tapPrice,
      material: materialPrice,
      additionalServices: additionalServicesPrice,
      total: basinPrice + tapPrice + materialPrice + additionalServicesPrice,
    };

    return prices;
  };

  const prices = calculatePrice();

  return (
    <ConfigContext.Provider
      value={{
        counterSize,
        setCounterSize,
        basinType,
        setBasinType,
        tapType,
        setTapType,
        material,
        setMaterial,
        showDimensions,
        setShowDimensions,
        customizeOpen,
        setCustomizeOpen,
        cartOpen,
        setCartOpen,
        additionalServices,
        setAdditionalServices,
        prices,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

//* Custom hook to use the config context
export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error("useConfig must be used within ConfigProvider");
  }

  return context;
};
