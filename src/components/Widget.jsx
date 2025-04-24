import React from "react";

const Widget = ({ widget, onRemove }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 relative">
      <button
        onClick={() => onRemove(widget.id)}
        className="absolute top-2 right-2 text-red-500 font-bold"
      >
        ✕
      </button>
      <h2 className="text-lg font-semibold">{widget.title}</h2>
      <p className="text-sm mt-2">{widget.content}</p>
      {widget.image && (
        <img src={widget.image} alt="widget" className="mt-2 rounded max-h-40 object-cover" />
      )}
    </div>
  );
};

export default Widget;
