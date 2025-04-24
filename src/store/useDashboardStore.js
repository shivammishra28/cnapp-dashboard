import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export const useDashboardStore = create((set) => ({
  categories: [
    {
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: uuidv4(), title: "Cloud Accounts", content: "Connected: 2, Not Connected: 0", image: null },
        { id: uuidv4(), title: "Cloud Risk Assessment", content: "Passed: 7253, Failed: 1989", image: null }
      ]
    },
    {
      name: "CWPP Dashboard",
      widgets: []
    },
    {
      name: "Registry Scan",
      widgets: []
    }
  ],
  searchQuery: "",
  setSearchQuery: (query) => set(() => ({ searchQuery: query })),
  addWidget: (categoryName, title, content, image) =>
    set((state) => ({
      categories: state.categories.map((cat) =>
        cat.name === categoryName
          ? {
              ...cat,
              widgets: [...cat.widgets, { id: uuidv4(), title, content, image }]
            }
          : cat
      )
    })),
  removeWidget: (categoryName, widgetId) =>
    set((state) => ({
      categories: state.categories.map((cat) =>
        cat.name === categoryName
          ? {
              ...cat,
              widgets: cat.widgets.filter((w) => w.id !== widgetId)
            }
          : cat
      )
    }))
}));
