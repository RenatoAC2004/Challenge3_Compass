import { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard";
import axios from "axios";
import ButtonBorder from "../../../components/ButtonBorder";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/cfa9cabe-0dcf-4cb0-aef1-0603244a224c"
        );
        setProducts(response.data["products"]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 8);

  return (
    <section className="h-fit flex flex-col items-center text-center font-poppins px-4 pb-14 sm:px-12 lg:px-16 xl:px-20">
      <h1 className="text-4xl font-bold text-TitlesColor pb-10">Our Products</h1>
      <div className="hidden 2xl:flex flex-col gap-y-8">
        <ProductCard data={firstRow} />
        <ProductCard data={secondRow} />
      </div>
      <div className="2xl:hidden flex flex-col gap-y-8 pb-8">
        <ProductCard data={products}/>
      </div>
      <ButtonBorder text="Show More"/>
    </section>
  );
};

export default ProductsSection;
