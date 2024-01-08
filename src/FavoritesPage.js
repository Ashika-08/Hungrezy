import React from 'react';

const FavoritesPage = ({ favorites }) => {
  return (
    <div>
      <h1>Favorites</h1>
      {favorites.map((favItem, index) => (
        <div key={index} className="favorite-item">
          <img src={favItem.image} alt={favItem.name} />
          <h3>{favItem.name}</h3>
          <p>{favItem.price}</p>
          {/* Add more details or actions for favorite items if needed */}
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;