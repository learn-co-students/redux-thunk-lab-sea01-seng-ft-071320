import React from "react";

export default function CatList({ catPics }) {
  return (
    <div>
      {catPics.map((cat) => (
        <img key={cat} alt="cat" src={cat} />
      ))}
    </div>
  );
}
