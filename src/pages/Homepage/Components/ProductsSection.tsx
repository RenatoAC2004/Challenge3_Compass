import ProductCard from '../../../components/ProductCard';
import ButtonBorder from '../../../components/ButtonBorder';
import { fetchProducts } from '../../../store/products/actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../store/products/reducer';
import { MyThunkDispatch } from '../../../store';


const ProductsSection = () => {
  const dispatch = useDispatch<MyThunkDispatch>()
  const {products} = useSelector(selectProducts)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  


  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 8);

  return (
    <section className="h-fit flex flex-col items-center text-center font-poppins px-4 pb-14 sm:px-12 lg:px-16 xl:px-20">
      <h1 className="text-4xl font-bold text-TitlesColor pb-10">Our Products</h1>
      <div className="hidden 2xl:flex flex-col gap-y-8 pb-8">
        <ProductCard data={firstRow} />
        <ProductCard data={secondRow} />
      </div>
      <div className="2xl:hidden flex flex-col gap-y-8 pb-8">
        <ProductCard data={products} />
      </div>
      <ButtonBorder text="Show More" />
    </section>
  );
};

export default ProductsSection;
