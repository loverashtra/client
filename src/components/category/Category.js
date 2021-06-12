import React from "react";
import "./category.scss";
import CategoryCard from "./CategoryCard";
import Candles from "../../assets/category/candles.svg";

function Category() {
  //category list
  const categoryList = [
    {
      name: "Candles",
      image: Candles,
    },
    {
      name: "Wax melts & burner",
      image: Candles,
    },
    {
      name: "Scrunchies",
      image: Candles,
    },
    {
      name: "Hampers",
      image: Candles,
    },
    {
      name: "Doodles",
      image: Candles,
    },
    {
      name: "Satins Cloths",
      image: Candles,
    },
  ];

  return (
    <div className="love-category-parent">
      <h2>Category</h2>
      <div className="love-category-wrap">
        {categoryList &&
          categoryList.map((category, index) => (
            <CategoryCard
              key={index}
              categoryName={category.name}
              img={category.image}
            />
          ))}
      </div>
    </div>
  );
}

export default Category;
