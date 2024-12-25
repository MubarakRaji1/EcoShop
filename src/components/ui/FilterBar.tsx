import React from 'react';

interface FilterBarProps {
  onFilterChange: (category: string) => void;
}

export function FilterBar({ onFilterChange }: FilterBarProps) {
  const categories = ['All', 'Electronics', 'Clothing', 'Books', 'Home & Garden'];

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className="px-4 py-2 bg-white rounded-full border border-gray-200 hover:bg-gray-50 whitespace-nowrap"
        >
          {category}
        </button>
      ))}
    </div>
  );
}