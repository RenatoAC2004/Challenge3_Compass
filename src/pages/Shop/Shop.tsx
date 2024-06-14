import { useDispatch, useSelector } from "react-redux";
import PagesTitles from "../../components/PagesTitles"
import { selectProducts } from "../../store/products/reducer";
import { fetchProducts } from "../../store/products/actions";
import { useEffect } from "react";
import { UnknownAction } from "redux";
import ProductCard from "../../components/ProductCard";
import Services from "../../components/Services";

const Shop = () => {
  const dispatch = useDispatch()
  const {products} = useSelector(selectProducts)

  useEffect(() => {
    dispatch(fetchProducts() as unknown as UnknownAction );
  }, [dispatch]);
  return (
    <>
      <PagesTitles currentPage="Shop" />
      <div className="lg:h-[6.25rem] lg:flex-row lg:py-0 lg:gap-y-0 gap-y-6 py-6 h-fit 
      bg-LighterBeige flex flex-col justify-center items-center px-4 lg:px-[6.25rem] font-poppins">
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
          <p className="hidden sm:block">Showing 1–16 of 32 results</p>
        </div>
        <p className="sm:hidden">Showing 1–16 of 32 results</p>

        <div className="w-full flex justify-center items-center gap-x-7 lg:justify-end ">
          <div className="flex items-center gap-x-4 flex-col sm:flex-row">
            <p>Show</p>
            <div className="flex items-center justify-center px-4 py-3 bg-white lg:text-xl text-FooterLightGray">
              16
            </div>
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
      <ProductCard data={products}/>
      </section>
      
      <Services/>
    </>
  )
}

export default Shop
