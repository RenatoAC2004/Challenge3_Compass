import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../../store/products/actions"
import { selectProducts } from "../../../store/products/reducer"
import { MyThunkDispatch } from "../../../store"
import ProductCard from "../../../components/ProductCard"
import ButtonBorder from "../../../components/ButtonBorder"

const RelatedProductsSection = () => {
  const dispatch = useDispatch<MyThunkDispatch>()
  const { products } = useSelector(selectProducts)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const row = products.slice(0, 4)
  return (
    <section className="h-fit text-center pt-14 pb-[5.75rem]">
        <h1 className="font-medium text-4xl pb-[1.625rem]">Related Products</h1>
      <div className="flex flex-wrap justify-center gap-8 pb-11 px-4 sm:px-20 lg:px-44 xl:px-0">
        {row.map(product => (
          <ProductCard key={product.id} data={[product]} />
        ))}
      </div>
      <ButtonBorder text="Show More" />
    </section>
  )
}

export default RelatedProductsSection
