import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const OptionCategory = ({ title, value, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4">
      <div
        className="flex justify-between items-center bg-white p-3 rounded shadow cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{title}</span>
        <div className="flex items-center">
          <span>{value}</span>
          {isOpen ? (
            <MdExpandLess className="ml-2" />
          ) : (
            <MdExpandMore className="ml-2" />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="bg-gray-100 rounded-b shadow-inner p-3">
          {options.map((option) => (
            <div
              key={option.name}
              className={`flex justify-between items-center p-2 my-1 rounded hover:bg-gray-200 cursor-pointer ${
                option.name === value ? "bg-blue-200" : ""
              }`}
              onClick={() => {
                onSelect(option.name);
                setIsOpen(false);
              }}
            >
              <div>
                {option.image && (
                  <div className="w-12 h-12 mr-3 bg-white rounded flex items-center justify-center overflow-hidden">
                    <img
                      src={option.image}
                      alt={option.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <span>{option.name}</span>
              </div>
              {title === "Length" || title === "Width" ? null : (
                <span className="text-gray-500 text-sm">
                  ${option.name === "None" ? 0 : option.price}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OptionCategory;
