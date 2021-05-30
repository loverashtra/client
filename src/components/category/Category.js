import React from "react";
import "./category.scss";
import CategoryCard from "./CategoryCard";

function Category() {
  //category list
  const categoryList = [
    {
      name: "Candles",
      image:
        "https://m.media-amazon.com/images/S/aplus-seller-content-images-us-east-1/A21TJRUUN4KGV/A82SOUTM340QI/B01HBUMV3U/hYVLOUFQyWz._UX900_TTW__.jpg",
    },
    {
      name: "Wax melts & burner",
      image:
        "https://thumbs.dreamstime.com/b/using-homemade-mini-wax-melts-aromatherapy-lamp-diffuser-home-interior-concept-making-ingredients-table-unbleached-204418170.jpg",
    },
    {
      name: "Scrunchies",
      image:
        "https://maneaddicts.com/wp-content/uploads/2021/04/curling-hair-with-scrunchies-tiktok-article-040821.jpg",
    },
    {
      name: "Hampers",
      image:
        "https://img.etimg.com/thumb/msid-71700421,width-640,resizemode-4,imgsize-3434301/handcrafted-artisanal-and-decadent-hampers.jpg",
    },
    {
      name: "Doodles",
      image: "https://adijha.com/dp.jpg",
    },
    {
      name: "Satins Cloths",
      image: "https://adijha.com/dp.jpg",
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
