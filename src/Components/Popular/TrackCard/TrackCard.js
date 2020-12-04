import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../Constants/constants';
import c from './TrackCard.module.scss';

const TrackCard = ({ name, artist, artistId}) => {
  const artistRef = artist.split(' ').join('+');

  return (
    <div className={c.wrap}>
      <div className={c.content}>
        <p>Track:</p>
        <p>{name}</p>
      </div>
      <div className={c.content}>
        <p>Artist:</p>
        <p>{artist}</p>
      </div>
      <div className={c.link}>
        <NavLink to={`${routes.ARTIST}${artistRef}`}>About artist</NavLink>
      </div>
    </div>
  )
}

export default TrackCard;
