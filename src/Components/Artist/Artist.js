import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { artistSelector } from '../../redux/appSelectors';
import { setArtistTh } from '../../redux/thunks';
import c from './Artist.module.scss';

const Artist = ({ match }) => {
  const artist = useSelector(artistSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setArtistTh(match.params.id));
    window.scrollTo(0, 0);
  }, [dispatch, match.params.id]);

  if (!artist) {
    return <div>wait</div>
  }

  return (<div className={c.wrap}>
    {artist
      && <div className={c.artist}>
        <div className={c.headerWrap}>
          <div className={c.image}>
            <img src={artist.image[3]['#text']} alt='artist' />
          </div>
          <div className={c.contentWrap}>
            <div className={c.content}>
              <p>Name: </p>
              <p>{artist.name}</p>
            </div>
            <div className={c.content}>
              <p>Tags:</p>
              <div className={c.tags}>
              {artist.tags.tag.map((el, ind) => <span className={c.tag} key={ind}>{el.name}</span>)}
              </div>
            </div>
          </div>
        </div>
        <div className={c.about}>
          <p className={c.title}>About:</p>
          <p className={c.bio}>{artist.bio.content}</p>
        </div>

      </div>}
  </div>
  )
}

export default Artist;
