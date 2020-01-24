import React from 'react';
import PropTypes from 'prop-types';
import ProviderCard from './ProviderCard';

const List = ({ items }) => (
  <ul className="list">
    {items.length === 0 ? (
      <li>
        <p>No Providers Found.</p>
      </li>
    )
      : items.map(provider => (
        <ProviderCard
          key={provider.id}
          address={provider.location.address}
          imageUrl={provider.imageUrl}
          name={provider.name}
          rating={provider.rating}
          providerType={provider.type}
          cardType="sm"
        />
      ))
    }
  </ul>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    address: PropTypes.string,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    rating: PropTypes.number,
    providerType: PropTypes.string
  })).isRequired,
  onClick: PropTypes.instanceOf(Function)
};

export default List;
