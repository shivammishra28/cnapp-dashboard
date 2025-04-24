import React, { useState } from "react";
import { useDashboardStore } from "../store/useDashboardStore";

const AddWidgetModal = ({ categoryName, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const { addWidget } = useDashboardStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const imageUrl = image ? URL.createObjectURL(image) : null;
    addWidget(categoryName, title, content, imageUrl);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
        <h2 className="text-lg font-bold mb-4">Add Widget</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Widget Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-3"
          />
          <textarea
            placeholder="Widget Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-3"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full mb-3"
          />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="text-gray-500">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWidgetModal;
