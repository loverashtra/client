import React from "react";
import "./category.scss";
function CategoryCard({ categoryName, img, bgColor }) {
  return (
    <div className="love-category-card-parent" style={bgColor}>
      <p className="love-category-card-name">{categoryName}</p>
      <img className="love-category-card-image" alt={categoryName} src={img} />
    </div>
  );
}
export default CategoryCard;
