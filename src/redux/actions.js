import { SET_ARTIST, SET_POPULAR, SET_TRACKS } from './types';

export const setPopularAC = (popular) => {
  return {
  type: SET_POPULAR,
  popular,
}};

export const setArtistAC = (artist) => {
  return {
  type: SET_ARTIST,
  artist,
}};

export const setTracksAC = (tracks) => {
  return {
  type: SET_TRACKS,
  tracks,
}};
