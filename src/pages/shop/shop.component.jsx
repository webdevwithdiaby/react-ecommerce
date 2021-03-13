import React from "react";
import { Route } from "react-router";
import CollectionItemList from "../../components/collection-item-list/collection-item-list.component";
import CollectionPreviewList from "../../components/collection-preview-list/collection-preview-list.component";

import CustomHeader from "../../components/custom-header/custom-header.component";

const ShopPage = ({ match }) => {
  const { path } = match;
  return (
    <div>
      <CustomHeader withBlackLink={true} />
      <main className="main">
        <div className="wrapper">
          <Route path={`${path}`} exact component={CollectionPreviewList} />
          <Route path={`${path}/:collectionId`} component={CollectionItemList} />
        </div>
      </main>
    </div>
  );
};

export default ShopPage;
