import React, { useState } from "react"

interface FilterModalProps {
  onClose: () => void
  onApplyFilter: (filterOption: string) => void
}

const FilterModal: React.FC<FilterModalProps> = ({
  onClose,
  onApplyFilter,
}) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000])

  const handlePriceRangeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newRange = [...priceRange]
    newRange[index] = parseInt(event.target.value, 10)
    setPriceRange(newRange as [number, number])
  }

  const applyPriceFilter = () => {
    onApplyFilter(`price:${priceRange[0]}-${priceRange[1]}`)
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Filter Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => onApplyFilter("discounted")}
            className="bg-Golden text-white px-4 py-2 rounded-lg font-medium transition-all hover:opacity-80"
          >
            Show Discounted Products
          </button>
          <button
            onClick={() => onApplyFilter("new")}
            className="bg-Golden text-white px-4 py-2 rounded-lg font-medium transition-all hover:opacity-80"
          >
            Show New Products
          </button>
        </div>
        <div className="py-12">
          <div className="w-full flex flex-col items-center ">
            <p>Filter by Price Range</p>
            <div className="flex gap-2">
              <input
                type="number"
                value={priceRange[0]}
                onChange={e => handlePriceRangeChange(e, 0)}
                className="bg-gray-200 px-2 py-2 rounded-xl"
                min="0"
              />
              <span>to</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={e => handlePriceRangeChange(e, 1)}
                className="bg-gray-200 px-2 py-1 rounded-xl"
                min="0"
              />
            </div>
            <button
              onClick={applyPriceFilter}
              className="bg-Golden text-white px-4 py-2 rounded-lg font-medium mt-2 transition-all hover:opacity-80"
            >
              Apply Price Filter
            </button>
          </div>
        </div>
        <div className="flex gap-x-2 justify-center">
          <button
            onClick={() => onApplyFilter("reset")}
            className="bg-Golden text-white px-4 py-2 rounded-lg font-medium transition-all hover:opacity-80"
          >
            Reset Filters
          </button>
          <button
            onClick={onClose}
            className="bg-Golden text-white px-4 py-2 rounded-lg font-medium transition-all hover:opacity-80"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterModal
