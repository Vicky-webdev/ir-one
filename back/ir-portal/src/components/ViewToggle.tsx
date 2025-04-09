import React from "react";

export interface ViewToggleProps {
  selectedView: "grid" | "list" | "map";
  onChange: (view: "grid" | "list" | "map") => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ selectedView, onChange }) => {
  return (
    <div className="flex space-x-2 my-4">
      {["grid", "list", "map"].map((view) => (
        <button
          key={view}
          className={`px-4 py-2 rounded ${
            selectedView === view ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => onChange(view as "grid" | "list" | "map")}
        >
          {view.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default ViewToggle;
