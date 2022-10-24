import React from 'react';

export const Content = () => {
  const contents = [
    {
      key: 1,
      name: 'About',
      value: `I'm a full-stack developer based in India with a passion for
      building digital services/stuff. I have a knack for all things starting
      from planning and designing and all the way to solving real-life
      problems with code. When not working I love to teach computer science
      and participate in coding contests. I also love to work on independent
      projects that help me learn new things and grow. When not online I love
      to go to mountains and forests. I also love to hang out with animals!`
    },
    {
      key: 2,
      name: 'Interests',
      value: [
        'Loves to make digital products, ',
        'Universe fantisizer, ',
        'Travels to forests and moutains, ',
        'Musician - loves to play drums, ',
        'Biking and Running, ',
        'Hanging out with animals.'
      ]
    }
  ];
  return (
    <div className="pt-8">
      {contents.map((content) => {
        return (
          <>
            <div
              key={content?.key}
              className={`text-sky-500 dark:text-sky-400 lg:text-lg ${
                content.key > 1 ? 'pt-4' : ''
              }`}
            >
              {content?.name}
            </div>
            <div className="text-slate-700 dark:text-slate-500 text-xs md:text-lg lg:text-lg xl:text-xl">
              {content?.value}
            </div>
          </>
        );
      })}
    </div>
  );
};
