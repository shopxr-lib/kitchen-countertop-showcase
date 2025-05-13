import { useConfig } from "../context/ConfigContext";
const ShoppingCartDrawer = () => {
  const {
    counterSize,
    basinType,
    tapType,
    material,
    cartOpen,
    setCartOpen,
    additionalServices,
    setAdditionalServices,
    prices,
  } = useConfig();

  //* Handle additional services changes
  const handleServiceChange = (service, checked) => {
    setAdditionalServices((prev) => ({
      ...prev,
      [service]: checked,
    }));
  };

  //* Handle close drawer
  const handleCloseDrawer = () => {
    setCartOpen(false);
  };

  //* Display the full size length x width
  const sizeDisplay = `${counterSize.length} x ${counterSize.width}`;
  return (
    <div
      className={`bg-gray-100 fixed top-0 right-0 h-full shadow-lg transition-all duration-200 z-10 overflow-y-auto
        ${cartOpen ? "w-96 p-5" : "w-0 p-0"}`}
    >
      {/* Sticky Header */}
      <div className="sticky top-0 bg-gray-100 z-10 pb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button
            className="text-gray-600 hover:text-gray-800 focus:outline-none cursor-pointer"
            onClick={handleCloseDrawer}
            aria-label="Close cart drawer"
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
        <div className="flex justify-between">
          <h3 className="font-medium text-gray-900 mb-4">Items</h3>
          <h3 className="font-medium text-gray-900 mb-4">Price</h3>
        </div>

        <div className="flex justify-between my-2">
          <span>Countertop ({sizeDisplay})</span>
          <span>${prices.material}</span>
        </div>
        <div className="text-[16px] text-gray-600 ml-4 my-4">
          Material: {material}
        </div>

        <div className="flex justify-between mb-2">
          <span>{basinType}</span>
          <span>${prices.basin}</span>
        </div>

        <div className="border-b-2 border-b-gray-300 pb-4 mb-4">
          <div className="flex justify-between mb-2">
            <span>{tapType}</span>
            <span>${prices.tap}</span>
          </div>
        </div>

        <div className="border-b-2 border-b-gray-300 pb-4 mb-4">
          <div className="flex items-center mb-3">
            <input
              type="checkbox"
              id="dismantlingService"
              className="mr-2"
              checked={additionalServices.dismantling}
              onChange={(e) =>
                handleServiceChange("dismantling", e.target.checked)
              }
            />
            <label htmlFor="dismantlingService" className="cursor-pointer">
              Dismantling service ($300)
            </label>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="throwAwayService"
              className="mr-2"
              checked={additionalServices.throwAway}
              onChange={(e) =>
                handleServiceChange("throwAway", e.target.checked)
              }
            />
            <label htmlFor="throwAwayService" className="cursor-pointer">
              Throw away service ($200)
            </label>
          </div>
          <span className="text-gray-600 text-sm">
            * Terms and conditions apply
          </span>
        </div>

        <div className="flex justify-between items-center text-lg font-bold mb-8">
          <span>Total</span>
          <span>${prices.total}</span>
        </div>
      </div>

      <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded cursor-pointer">
        Save Configuration
      </button>
    </div>
  );
};

export default ShoppingCartDrawer;
