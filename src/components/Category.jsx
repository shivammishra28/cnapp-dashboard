import React, { useState } from "react";
import Widget from "./Widget";
import AddWidgetModal from "./AddWidgetModal";
import { useDashboardStore } from "../store/useDashboardStore";

const Category = ({ category }) => {
  const [showModal, setShowModal] = useState(false);
  const { removeWidget, searchQuery } = useDashboardStore();

  const filteredWidgets = category.widgets.filter((widget) =>
    widget.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mb-6">
      <h1 className="text-xl font-bold mb-4">{category.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredWidgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            onRemove={(id) => removeWidget(category.name, id)}
          />
        ))}
        <div
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center bg-gray-100 rounded-2xl cursor-pointer h-40"
        >
          + Add Widget
        </div>
      </div>
      {showModal && (
        <AddWidgetModal categoryName={category.name} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Category;
