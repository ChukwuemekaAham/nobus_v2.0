import React from "react";

const productList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <a href={`/products/detail?id=${product._id}`}>
            <p>{product.name}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default productList;
