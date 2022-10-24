import React from 'react';

import bannerImage from '../../images/suvadeep-potrait.jpeg';

export const Banner = () => {
  return (
    <div className="banner">
      <img
        className="banner--image"
        src={bannerImage}
      />
    </div>
  );
};
