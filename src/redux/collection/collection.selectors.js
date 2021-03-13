import { createSelector } from "reselect";

const selectCollectionReducer = (state) => state.collectionReducer;

const selectCollections = createSelector(
  [selectCollectionReducer],
  (collectionReducer) => collectionReducer.collections
);

export const selectCollectionsForDisplay = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionId) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionId]
  );
