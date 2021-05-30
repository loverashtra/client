import React from "react";

function CategoryCard({ categoryName, img }) {
  return (
    <div
      style={{
        height: "180px",
        width: "150px",
        backgroundColor: "red",
        margin: "0 20px",
        borderRadius: "20px",
      }}
    >
      <img
        alt={categoryName}
        src={img}
        style={{
          height: "100px",
          objectFit: "contain",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      />
      <p style={{ textAlign: "center" }}>{categoryName}</p>
    </div>
  );
}

export default CategoryCard;
