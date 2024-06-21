import { useDispatch, useSelector } from "react-redux"
import PagesTitles from "../../components/PagesTitles"
import { selectProducts } from "../../store/products/reducer"
import { fetchProducts } from "../../store/products/actions"
import { useEffect, useState } from "react"
import ProductCard from "../../components/ProductCard"
import Services from "../../components/Services"
import { MyThunkDispatch } from "../../store"
import { ProductType } from "../../types/ProductType"
import FilterModal from "./Components/FilterModal"

const Shop = () => {
  const dispatch = useDispatch<MyThunkDispatch>()
  const { products } = useSelector(selectProducts)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(16)
  const [sortOption, setSortOption] = useState("default")
  const [showFilterPopup, setShowFilterPopup] = useState(false)
  const [appliedFilter, setAppliedFilter] = useState<string | null>(null)

  const openFilterPopup = () => {
    setShowFilterPopup(true)
  }

  const closeFilterPopup = () => {
    setShowFilterPopup(false)
  }

  const applyFilter = (filterOption: string) => {
    setAppliedFilter(filterOption)
    closeFilterPopup()
  }

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const filterProducts = (
    products: ProductType[],
    filter: string | null
  ): ProductType[] => {
    if (!filter || filter === "reset") return products

    return products.filter(product => {
      switch (filter) {
        case "discounted":
          return product.discount > 0
        case "new":
          return product.new === true
        default:
          if (filter.startsWith("price:")) {
            const [minPrice, maxPrice] = filter
              .replace("price:", "")
              .split("-")
              .map(Number)
            return product.price >= minPrice && product.price <= maxPrice
          }
          return true
      }
    })
  }

  const sortProducts = (
    products: ProductType[],
    option: string
  ): ProductType[] => {
    switch (option) {
      case "alphabetical":
        return products.slice().sort((a, b) => a.name.localeCompare(b.name))
      case "price-high-to-low":
        return products.slice().sort((a, b) => b.price - a.price)
      case "price-low-to-high":
        return products.slice().sort((a, b) => a.price - b.price)
      default:
        return products
    }
  }

  const filteredProducts = filterProducts(products, appliedFilter)
  const sortedProducts = sortProducts(filteredProducts, sortOption)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem)
  const visiblePages = []
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage)

  const firstResult = (currentPage - 1) * itemsPerPage + 1
  const lastResult = Math.min(currentPage * itemsPerPage, sortedProducts.length)
  const totalResults = sortedProducts.length

  const nextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))
  }

  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1))
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(parseInt(e.target.value))
    setCurrentPage(1)
  }

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value)
  }

  for (let i = currentPage; i <= Math.min(currentPage + 2, totalPages); i++) {
    visiblePages.push(
      <button
        key={i}
        onClick={() => goToPage(i)}
        className={`w-16 h-16 mx-4 rounded-xl font-poppins text-xl transition-colors
          hover:bg-Golden hover:text-white 
          ${currentPage === i ? "bg-Golden text-white" : "bg-LighterBeige"}`}
      >
        {i}
      </button>
    )
  }

  return (
    <>
      <PagesTitles currentPage="Shop" />
      <div
        className="lg:h-[6.25rem] lg:flex-row lg:py-0 lg:gap-y-0 gap-y-6 py-6 h-fit 
      bg-LighterBeige flex flex-col justify-center items-center px-4 lg:px-[6.25rem] font-poppins"
      >
        <div className="w-full flex items-center justify-center lg:justify-normal">
          <button
            className="flex justify-center items-center"
            onClick={openFilterPopup}
          >
            <img
              src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/FilterIcon.svg"
              alt="Filter Icon"
              className="pr-3"
            />
            <p className="text-xl">Filter</p>
          </button>

          <img
            src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/GridCirclesIcon.svg"
            alt="Grid Circles Icon"
            className="px-8"
          />
          <img
            src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/ViewListIcon.svg"
            alt="View List Icon"
          />
          <div className="hidden h-8 w-0.5 bg-FooterLightGray mx-8 sm:block"></div>
          <p className="hidden sm:block">
            Showing {firstResult}–{lastResult} of {totalResults} results
          </p>
        </div>
        <p className="sm:hidden">
          Showing {firstResult}–{lastResult} of {totalResults} results
        </p>

        <div className="w-full flex justify-center items-center gap-x-7 lg:justify-end ">
          <div className="flex items-center gap-x-4 flex-col sm:flex-row">
            <p>Show</p>
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="flex items-center justify-center px-4 py-3 bg-white lg:text-xl text-FooterLightGray"
            >
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="16">16</option>
            </select>
          </div>

          <div className="flex items-center gap-x-4 flex-col sm:flex-row">
            <p>Sort by</p>
            <select
              id="sortOption"
              value={sortOption}
              onChange={handleSortChange}
              className="flex items-center justify-center px-4 py-3 bg-white lg:text-xl text-FooterLightGray"
            >
              <option value="default">Default</option>
              <option value="alphabetical">Alphabetical</option>
              <option value="price-high-to-low">Price: High to Low</option>
              <option value="price-low-to-high">Price: Low to High</option>
            </select>
          </div>
        </div>
      </div>

      <section className="h-full py-16">
        <ProductCard data={currentItems} />
      </section>

      <div className="flex justify-center pb-20">
        {currentPage > 1 && (
          <button
            onClick={prevPage}
            className="text-xl font-light font-poppins py-4 px-7 bg-LighterBeige rounded-xl mr-4
      transition-colors hover:bg-Golden hover:text-white hover:font-normal"
          >
            Previous
          </button>
        )}
        {visiblePages}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="text-xl font-light font-poppins py-4 px-7 bg-LighterBeige rounded-xl ml-4
          transition-colors hover:bg-Golden hover:text-white hover:font-normal"
        >
          Next
        </button>
      </div>

      {showFilterPopup && (
        <div className="filter-overlay">
          <FilterModal onClose={closeFilterPopup} onApplyFilter={applyFilter} />
        </div>
      )}

      <Services />
    </>
  )
}

export default Shop
