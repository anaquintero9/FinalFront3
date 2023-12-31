import React from 'react';
import Card from '../Components/Card';
import { useDentistStates } from '../Components/utils/global.context';

const Favs = () => {
  const { favState, themeState } = useDentistStates();
  console.log("favState:", favState);
 

  return (
    
    <div className={themeState.theme ? 'App' : 'dark'}>
      <h1>Favoritos</h1>
      <div className="card-grid">
        {favState.map((dentist) => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;