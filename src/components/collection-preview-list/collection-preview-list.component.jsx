import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForDisplay } from "../../redux/collection/collection.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionPreviewList = ({ collections }) => {
  return (
    <div className="collection-preview-list">
      {collections.map((col) => (
        <CollectionPreview key={col.id} collection={col} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForDisplay,
});

export default connect(mapStateToProps)(CollectionPreviewList);
