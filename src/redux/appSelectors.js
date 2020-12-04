import { createSelector } from "reselect";

const createAppSelector = (state) => state;

export const popularSelector = createSelector(createAppSelector, ({app}) => app.popular);
export const artistSelector = createSelector(createAppSelector, ({app}) => app.artist);
export const tracksSelector = createSelector(createAppSelector, ({app}) => app.tracks);
