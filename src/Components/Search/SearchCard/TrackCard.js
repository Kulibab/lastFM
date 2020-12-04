import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../Constants/constants';
import c from './TrackCard.module.scss';

const TrackCard = ({ name, artist, artistId}) => {

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
    </div>
  )
}

export default TrackCard;
