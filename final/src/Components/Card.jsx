import React from 'react';
import { Link } from 'react-router-dom';
import { useDentistStates } from './utils/global.context';

const Card = ({ id, name, username }) => {
  const { favDispatch, apiState } = useDentistStates();

  const addFav = () => {
    favDispatch({ type: 'ADD_FAV', payload: apiState.dentistList.find((dentist) => dentist.id === id) });
  };

  return (
    <div className="card">
      <img className="doctor-img" src="./images/doctor.jpg" alt="DH-logo" />
      <h3>{id}</h3>
      <h2>{name}</h2>
      <h3>{username}</h3>
      <Link to={`/details/${id}`} className="details-link">Detalles</Link>
      <button onClick={addFav} className="favButton">
        <img className='favorito' src= "./images/fav.icon.png" alt="favorito" />
      </button>
    </div>
  );
};

export default Card;
