import { useConfig } from "../context/ConfigContext";
import OptionCategory from "./OptionCategory";

const CustomizationDrawer = () => {
  const {
    counterSize,
    setCounterSize,
    basinType,
    setBasinType,
    tapType,
    setTapType,
    material,
    setMaterial,
    customizeOpen,
    setCustomizeOpen,
    prices,
  } = useConfig();

  //* Size Options
  const lengthOptions = [
    { name: "1m", price: "" },
    { name: "2m", price: "" },
    { name: "3m", price: "" },
  ];

  const widthOptions = [
    { name: "0.6m", price: "" },
    { name: "1.2m", price: "" },
  ];

  //* Basin options
  const basinOptions = [
    {
      name: "Basin 1",
      price: prices.basin,
    },
    {
      name: "Basin 2",
      price: prices.basin,
    },
  ];

  //* Tap options
  const tapOptions = [
    {
      name: "Tap 1",
      price: prices.tap,
      image: "/assets/icons/tap-chrome-8102-large.webp",
    },
    {
      name: "Tap 2",
      price: prices.tap,
      image: "/assets/icons/tap-chrome-8302-large.webp",
    },
  ];

  //* Function to calculate material price based on size and material
  const calculateMaterialPrice = (materialName) => {
    const lengthMeters = parseInt(counterSize.length.replace("m", ""));
    const isWider = counterSize.width === "1.2m";
    let materialPrice = 0;

    switch (materialName) {
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

    if (isWider) {
      materialPrice *= 2;
    }

    return materialPrice;
  };

  //* Material options with corresponding textures as previews
  const materialOptions = [
    {
      name: "S034 - White",
      price: calculateMaterialPrice("S034 - White"),
      image: "/assets/textures/Texture-S034.avif",
    },
    {
      name: "G116 - Granite Walnut",
      price: calculateMaterialPrice("G116 - Granite Walnut"),
      image: "/assets/textures/Texture-G116.jpg",
    },
    {
      name: "VA023 - Vaesuvo",
      price: calculateMaterialPrice("VA023 - Vaesuvo"),
      image: "/assets/textures/Texture-VA023.avif",
    },
    {
      name: "M201 - Marble",
      price: calculateMaterialPrice("M201 - Marble"),
      image: "/assets/textures/Texture-M201.jpeg",
    },
  ];

  //* Handle size selection
  const handleSizeChange = (dimension, value) => {
    setCounterSize((prev) => ({
      ...prev,
      [dimension]: value,
    }));
  };

  //* Handle close drawer
  const handleCloseDrawer = () => {
    setCustomizeOpen(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-100 shadow-lg transition-all duration-200 z-10 overflow-y-auto ${
        customizeOpen ? "w-96 p-5" : "w-0 p-0"
      }`}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {/* Sticky Header */}
      <div className="sticky top-0 bg-gray-100 z-10 pb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Customize the Countertop</h2>
          <button
            className="text-gray-600 hover:text-gray-800 focus:outline-none cursor-pointer"
            onClick={handleCloseDrawer}
            aria-label="Close customization drawer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div>
        {/* Countertop Sizes */}
        <h3 className="font-medium text-gray-700 mb-2">Countertop Sizes</h3>
        <OptionCategory
          title="Length"
          value={counterSize.length}
          options={lengthOptions}
          onSelect={(value) => handleSizeChange("length", value)}
        />
        <OptionCategory
          title="Width"
          value={counterSize.width}
          options={widthOptions}
          onSelect={(value) => handleSizeChange("width", value)}
        />

        {/* Basin Types */}
        <h3 className="font-medium text-gray-700 mb-2">Basin</h3>
        <OptionCategory
          title="Basin Type"
          value={basinType}
          options={basinOptions}
          onSelect={setBasinType}
        />

        {/* Tap Types */}
        <h3 className="font-medium text-gray-700 mb-2">Tap</h3>
        <OptionCategory
          title="Tap Type"
          value={tapType}
          options={tapOptions}
          onSelect={setTapType}
        />

        {/* Countertop Material Texture */}
        <h3 className="font-medium text-gray-700 mb-2 mt-6">Material</h3>
        <OptionCategory
          title="Countertop Material"
          value={material}
          options={materialOptions}
          onSelect={setMaterial}
        />
      </div>
    </div>
  );
};

export default CustomizationDrawer;
