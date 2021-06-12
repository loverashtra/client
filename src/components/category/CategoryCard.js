import React from "react";
import "./category.scss";
function CategoryCard({ categoryName, img }) {
  return (
    <div className="love-category-card-parent">
      <p className="love-category-card-name">{categoryName}</p>
      <img className="love-category-card-image" alt={categoryName} src={img} />
    </div>
  );
}
export default CategoryCard;
