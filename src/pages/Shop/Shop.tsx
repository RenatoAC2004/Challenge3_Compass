import { useDispatch, useSelector } from "react-redux";
import PagesTitles from "../../components/PagesTitles"
import { selectProducts } from "../../store/products/reducer";
import { fetchProducts } from "../../store/products/actions";
import { useEffect } from "react";
import { UnknownAction } from "redux";
import ProductCard from "../../components/ProductCard";

const Shop = () => {
  const dispatch = useDispatch()
  const {products} = useSelector(selectProducts)

  useEffect(() => {
    dispatch(fetchProducts() as unknown as UnknownAction );
  }, [dispatch]);
  return (
    <>
      <PagesTitles currentPage="Shop" />
      <div className="h-[6.25rem] bg-LighterBeige flex items-center px-[6.25rem] font-poppins">
        <div className="w-full flex items-center">
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
          <div className="h-8 w-0.5 bg-FooterLightGray mx-8"></div>
          <p>Showing 1–16 of 32 results</p>
        </div>

        <div className="w-full flex justify-end items-center gap-x-7">
          <div className="flex items-center gap-x-4">
            <p>Show</p>
            <div className="flex items-center justify-center px-4 py-3 bg-white text-xl text-FooterLightGray">
              16
            </div>
          </div>

          <div className="flex items-center gap-x-4">
            <p>Sort by</p>
            <div className="flex items-center justify-center pl-8 pr-20 py-4 bg-white text-xl text-FooterLightGray">
              Default
            </div>
          </div>
        </div>
      </div>

      <section className="h-full py-16">
      <ProductCard data={products}/>
      </section>
    </>
  )
}

export default Shop
