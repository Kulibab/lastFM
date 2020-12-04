import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popularSelector } from '../../redux/appSelectors';
import { setPopularTh } from '../../redux/thunks';
import c from './Popular.module.scss';
import TrackCard from './TrackCard/TrackCard';

const Popular = () => {
  const popular = useSelector(popularSelector);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setPopularTh());
  }, [dispatch]);

  if (!popular) {
    return <div>wait</div>
  }

  return ( <div className={c.wrap}>
    {popular && popular.map(({ name, artist }, ind) => {
      return <TrackCard name={name} artist={artist.name} artistId={artist.mbid} key={ind} />
      })
    }
  </div>
  )
}

export default Popular;
