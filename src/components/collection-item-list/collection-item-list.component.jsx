import React from "react";

import { connect } from "react-redux";

import { selectCollection } from "../../redux/collection/collection.selectors";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionItemList = ({ match, collection }) => {
  console.log(collection);
  return (
    <div className="collection-item-list">
      <h2 className="collection-item-list__title">{collection.title}</h2>
      <div className="container-grid">
          {
              collection.items.map( item => <CollectionItem key={item.id} {...item} /> )
          }
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionItemList);
