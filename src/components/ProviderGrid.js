import React from 'react';
import PropTypes from 'prop-types';
import ProviderCard from './ProviderCard';

const Grid = ({ items }) => (
  <div className="grid">
    {items.length === 0 ? (
      <div className="center" style={{ width: '100%' }}>
        <p>No Items Found.</p>
      </div>
    )
      : items.map(provider => (
        <ProviderCard
          key={provider.id}
          imageUrl={provider.imageUrl}
          address={provider.location.address}
          name={provider.name}
          rating={provider.rating}
          providerType={provider.type}
          cardType="bg"
        />
      ))
    }
  </div>
);

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    address: PropTypes.string,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    rating: PropTypes.number,
    type: PropTypes.string
  })).isRequired,
  onClick: PropTypes.instanceOf(Function)
};

export default Grid;
