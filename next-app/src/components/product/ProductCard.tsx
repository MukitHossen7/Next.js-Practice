import { IProduct } from "@/type";
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Image
        src={product.image}
        alt={product.product_name}
        width={500}
        height={500}
        className="object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-100">
          {product.product_name}
        </h2>
        <p className="text-sm text-gray-200">Category: {product.category}</p>
        <p className="text-sm text-gray-200">Brand: {product.brand}</p>
        <p className="text-xl font-bold text-blue-600 mt-2">${product.price}</p>
        <div className="flex items-center gap-6">
          <button className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-200">
            Buy Now
          </button>
          <button className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
