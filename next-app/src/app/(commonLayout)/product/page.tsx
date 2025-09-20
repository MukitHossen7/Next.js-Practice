import ProductCard from "@/components/product/ProductCard";
import { IProduct } from "@/type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next App - Product",
  description: "This is Product page",
};

const ProductPage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();

  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-center text-3xl">All Products</h2>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {products.map((product: IProduct) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
