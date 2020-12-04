import Axios from "axios"
import { apiKey, artistsAPI, baseURL, tracksAPI } from "../Constants/apiConstants";
import { setArtistAC, setPopularAC, setTracksAC } from './actions';

export const setPopularTh = () => async (dispatch) => {
  let { data } = await Axios.get(`${baseURL}${tracksAPI.getPopular}${apiKey}`);

  dispatch(setPopularAC(data.tracks.track));
}

export const setArtistTh = (id) => async (dispatch) => {
  let { data } = await Axios.get(`${baseURL}${artistsAPI.getAtrist}${id}${apiKey}`);
  dispatch(setArtistAC(data.artist));
}

export const setTracksTh = (name) => async (dispatch) => {
  let { data } = await Axios.get(`${baseURL}${tracksAPI.find}${name}${apiKey}`);
  console.log(data);
  dispatch(setTracksAC(data.results?.trackmatches.track || []));
}
