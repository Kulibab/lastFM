import { SET_ARTIST, SET_POPULAR, SET_TRACKS } from '../types';

export const initialState = {
  popular: null,
  artist: null,
  tracks: null,
}

const appStore = {
  [SET_POPULAR](state, {popular}) {
    return {
      ...state,
      popular
    };
  },
  [SET_ARTIST](state, {artist}) {
    return {
      ...state,
      artist
    };
  },
  [SET_TRACKS](state, {tracks}) {
    return {
      ...state,
      tracks
    };
  },
};

const createReducer = (defaultState, handlers) => (state = defaultState, action) => {
  if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
    return handlers[action.type](state, action);
  }

  return state;
}

export const appReducer = createReducer (initialState, appStore);
