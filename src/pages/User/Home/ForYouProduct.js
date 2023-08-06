import React, { useEffect, useState } from "react";
import { ContainerHeader } from "../../../components/user/ContainerHeader";
import { ProductCard } from "../../../components/user/ProductCard";

export const ForYouProduct = () => {
  const [product, setProudct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProudct(data));
  }, []);
  return (
    <div className="container mx-auto ">
      <ContainerHeader title="product for you!" />
      <div className=" mb-7 grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-5">
        {product?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
