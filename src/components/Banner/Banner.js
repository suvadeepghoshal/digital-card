import React from 'react';

import bannerImage from '../../images/suvadeep-potrait.jpeg';
import { Content } from '../Content/Content';

export const Banner = () => {
  return (
    <figure>
      <img
        className="w-24 h-24 md:w-48 md:h-auto rounded-full mx-auto"
        src={bannerImage}
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote></blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400 sm:text-lg lg:text-xl xl:text-2xl">
            Suvadeep Ghoshal
          </div>
          <div className="text-slate-700 dark:text-slate-500 text-xs sm:text-base md:text-lg lg:text-lg xl:text-xl">
            Digital Craftsman ( Entrepreneur / Developer / Designer )
          </div>
          <Content />
        </figcaption>
      </div>
    </figure>
  );
};
