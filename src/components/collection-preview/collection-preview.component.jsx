import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ collection }) => {
  return (
    <div className="collection-preview">
      <h2 className="collection-preview__title">{collection.title}</h2>
      <div className="container-grid">
        {collection.items
          .filter((i, ind) => ind < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
