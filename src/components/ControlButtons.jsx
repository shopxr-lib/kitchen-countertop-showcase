import { FaRuler } from "react-icons/fa";
import { useConfig } from "../context/ConfigContext";
import { IoSettingsOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

const ControlButtons = () => {
  const {
    showDimensions,
    setShowDimensions,
    customizeOpen,
    setCustomizeOpen,
    cartOpen,
    setCartOpen,
    prices,
  } = useConfig();
  return (
    <>
      {/* Dimensions Toggle Button */}
      <button
        className="fixed top-5 left-5 bg-white p-3 rounded-md shadow-md z-10 cursor-pointer "
        onClick={() => setShowDimensions(!showDimensions)}
      >
        <FaRuler size={30} color={showDimensions ? "#10B981" : "#4B5563"} />
      </button>

      {/* Customization Drawer Button */}
      <button
        className="fixed bottom-5 left-5 bg-white shadow-md p-3 rounded-md cursor-pointer z-10"
        onClick={() => {
          setCustomizeOpen(!customizeOpen);
          if (cartOpen) setCartOpen(false);
        }}
      >
        <IoSettingsOutline
          size={30}
          color={customizeOpen ? "#10B981" : "#4B5563"}
        />
      </button>

      {/* Shopping cart button */}
      <button
        className="fixed top-5 right-5 py-3 px-4 bg-teal-500 text-white rounded-full shadow-md z-10 flex items-center cursor-pointer"
        onClick={() => {
          setCartOpen(!cartOpen);
          if (customizeOpen) setCustomizeOpen(false);
        }}
      >
        <FiShoppingCart size={26} className="mr-2" />
        <span className="font-medium text-lg tracking-wide">
          ${prices.total}
        </span>
      </button>
    </>
  );
};

export default ControlButtons;
