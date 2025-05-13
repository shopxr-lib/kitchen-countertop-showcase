import React from "react";

const Branding = () => {
  return (
    <div className="fixed bottom-3 w-full flex justify-center items-center">
      <div className="text-gray-800 text-sm flex items-center">
        <span className="mr-1">Powered by</span>
        <img
          src="/assets/icons/ShopXRLogo.png"
          alt="ShopXR Logo"
          className="h-4"
        />
      </div>
    </div>
  );
};

export default Branding;
