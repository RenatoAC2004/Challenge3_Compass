import React from "react";
import { ProductTypeProps } from "../types/ProductTypeProps";
import ButtonBorder from "./ButtonBorder";
import { ProductType } from "../types/ProductType";
import { useNavigate } from "react-router-dom";

const ProductCard: React.FC<ProductTypeProps> = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = (product: ProductType) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };
  

  const handleAddToCartClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
  };

  return (
    <div className="flex flex-wrap gap-x-8 gap-y-8 justify-center">
      {data.map((product) => (
        <div
          key={product.id}
          className="relative w-[17.813rem] h-[27.813rem] bg-CardBackground transition-all overflow-hidden group cursor-pointer"
          onClick={() => handleClick(product)}
        >
          {product.new && (
            <div className="absolute top-2 right-2 w-12 h-12 bg-NewTag rounded-full">
              <div className="flex w-full h-full justify-center items-center text-white font-medium">
                New
              </div>
            </div>
          )}
          {!product.new && product.discount !== 0 && (
            <div className="flex justify-center items-center text-white absolute top-2 right-2 w-12 h-12 bg-DiscountTag rounded-full">
              <p className="font-medium">
                -{Math.round((product.discount / (product.discount + product.price)) * 100)}%
              </p>
            </div>
          )}
          <img className="mb-4" src={product.imageUrl} alt={product.name} />
          <div className="flex flex-col gap-y-2 px-4 text-left">
            <p className="font-semibold text-2xl text-CardTitleColor">{product.name}</p>
            <p className="text-CardTextColor">{product.description}</p>
            <p className="flex gap-x-4 items-center text-CardTitleColor font-semibold text-xl">
              Rp {product.price.toLocaleString()}
              {product.discount !== 0 ? (
                <span className="font-normal text-base text-[#B0B0B0] line-through">
                  Rp{(product.discount + product.price).toLocaleString()}
                </span>
              ) : (
                ""
              )}
            </p>
          </div>

          <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-75"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 z-10">
            <div className="flex flex-col gap-y-6">
              <ButtonBorder text="Add to cart" onClick={handleAddToCartClick} />
              <div className="flex justify-between">
                <button className="flex items-center text-white font-semibold gap-x-1 hover:underline">
                  <img
                    src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/ShareIcon.svg"
                    alt="Share Icon"
                  />
                  <p>Share</p>
                </button>
                <button className="flex items-center text-white font-semibold gap-x-1 hover:underline">
                  <img
                    src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/CompareIcon.svg"
                    alt="Compare Icon"
                  />
                  <p>Compare</p>
                </button>
                <button className="flex items-center text-white font-semibold gap-x-1 hover:underline">
                  <img
                    src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/HeartIcon.svg"
                    alt="Heart Icon"
                  />
                  <p>Like</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
