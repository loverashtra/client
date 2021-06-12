import React from "react";
import "./category.scss";
import CategoryCard from "./CategoryCard";
import candle from "../../assets/category/candle.png";
import scrunchie from "../../assets/category/scrunchie.png";
import wax from "../../assets/category/wax.png";

function Category() {
  //category list
  const categoryList = [
    {
      name: "Candles",
      image: candle,
      bgColor: {
        background:
          "linear-gradient(36.63deg,#5c8258 10.42%, rgba(255, 255, 255, 0) 100%)",
      },
    },
    {
      name: "Scrunchies",
      image: scrunchie,
      bgColor: {
        background:
          "linear-gradient(36.63deg, rgba(186, 37, 66, 0.45) 2.42%, rgba(255, 255, 255, 0) 96.92%)",
      },
    },
    {
      name: "Wax melts & burner",
      image: wax,
      bgColor: {
        background:
          "linear-gradient(36.63deg, yellow 2.42%, rgba(255, 255, 255, 0) 96.92%)",
      },
      offset: 20,
    },
    {
      name: "Hampers",
      image: candle,
      bgColor: {
        background:
          "linear-gradient(36.63deg,#5c8258 2.42%, rgba(255, 255, 255, 0) 86.92%)",
      },
    },
    {
      name: "Doodles",
      image: candle,
      bgColor: {
        background:
          "linear-gradient(36.63deg,#5c8258 2.42%, rgba(255, 255, 255, 0) 86.92%)",
      },
    },
    {
      name: "Satins Cloths",
      image: candle,
      bgColor: {
        background:
          "linear-gradient(36.63deg,#5c8258 2.42%, rgba(255, 255, 255, 0) 86.92%)",
      },
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
              bgColor={category.bgColor}
            />
          ))}
      </div>
    </div>
  );
}

export default Category;
