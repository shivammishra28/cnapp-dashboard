import React from "react";
import { useDashboardStore } from "./store/useDashboardStore";
import Category from "./components/Category";

function App() {
  const { categories, searchQuery, setSearchQuery } = useDashboardStore();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">CNAPP Dashboard</h1>
      <input
        type="text"
        placeholder="Search widgets..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-6 p-2 border border-gray-300 rounded w-full max-w-md"
      />
      {categories.map((category) => (
        <Category key={category.name} category={category} />
      ))}
    </div>
  );
}

export default App;
