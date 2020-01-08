import React from 'react';

import './CollectionItemStyles.scss';

const CollectionItem = ({ id, name, price, imageUrl}) => (
  <div className='collection-item'>
    <div className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
    />

        <div className='collection-footer' ></div>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
    
  </div>
);

export default CollectionItem;