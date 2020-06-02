import React from "react";
import CategoryTile from "./CategoryTile";

const CategoryTiles = (props) => {
  const renderTiles = props.tiles.map((tile) => (
    <CategoryTile tile={tile} onclick={props.getResult} />
  ));
  return (
    <div className="ui container">
      <div className="five ui buttons">{renderTiles}</div>
    </div>
  );
};

export default CategoryTiles;
