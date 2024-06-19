import { useDispatch, useSelector } from "react-redux"
import PagesTitles from "../../components/PagesTitles"
import { selectProducts } from "../../store/products/reducer"
import { fetchProducts } from "../../store/products/actions"
import { useEffect, useState } from "react"
import ProductCard from "../../components/ProductCard"
import Services from "../../components/Services"
import { MyThunkDispatch } from "../../store"

const Shop = () => {
  const dispatch = useDispatch<MyThunkDispatch>()
  const { products } = useSelector(selectProducts)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(16)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem)
  const visiblePages = []
  const totalPages = Math.ceil(products.length / itemsPerPage)

  const firstResult = (currentPage - 1) * itemsPerPage + 1
  const lastResult = Math.min(currentPage * itemsPerPage, products.length)
  const totalResults = products.length

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
          <img
            src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/FilterIcon.svg"
            alt="Filter Icon"
            className="pr-3"
          />
          <p className="text-xl">Filter</p>

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
            <div className="flex items-center justify-center pl-8 pr-20 lg:py-4 py-3 bg-white lg:text-xl text-FooterLightGray">
              Default
            </div>
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

      <Services />
    </>
  )
}

export default Shop
