export const baseURL = 'http://ws.audioscrobbler.com/2.0/';
export const apiKey = '&api_key=5270dace32df112768f6b728b525ce76&format=json';

export const tracksAPI = {
  getPopular: '?method=chart.gettoptracks',
  find: '?method=track.search&track=',
};
  
export const artistsAPI = {
  getAtrist: '?method=artist.getinfo&artist=',
};
