import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tracksSelector } from '../../redux/appSelectors';
import { setTracksTh } from '../../redux/thunks';
import c from './Search.module.scss';
import TrackCard from './SearchCard/TrackCard';

const Search = () => {
  const traks = useSelector(tracksSelector);
  const dispatch = useDispatch();
  const [track, setTrack] = useState('');

  useEffect(() => {
    dispatch(setTracksTh(track));
  }, [dispatch, track]);

  if (!traks) {
    return <div>wait</div>
  }

  return (<div>
    <input 
      type='text' 
      value={track} 
      onChange={({ target }) => setTrack(target.value)} 
      className={c.inp}
      placeholder='Search track'
      />
    <div className={c.wrap}>
      {traks && traks.map(({ name, artist }, ind) => {
        return <TrackCard name={name} artist={artist} key={ind} />
      })
      }
    </div>
  </div>
  )
}

export default Search;
