import React from 'react';

export const Content = () => {
  const interests = [
    'Loves to make digital products',
    'Universe fantisizer',
    'Travels to forests and moutains',
    'Musician - loves to play drums',
    'Biking and Running',
    'Hanging out with animals'
  ];
  return (
    <div className="content">
      <div className="content--intro">
        <h2 className="content--intro--name">Suvadeep Ghoshal</h2>
        <h4 className="content--intro--designation">
          {' '}
          Digital Craftsman ( Entrepreneur / Developer / Designer )
        </h4>
        <a
          className="content--intro--btn_email"
          href="mailto: ghoshalsuvadeep594@gmail.com"
        >
          Email
        </a>
      </div>
      <div className="content--text_content">
        <div className="content--text_content--about">
          <h5 className="content--text_content--about--title">About</h5>
          <p className="content--text_content--about--content">
            I&apos;m a full-stack developer based in India with a passion for
            building digital services/stuff. I have a knack for all things
            starting from planning and designing and all the way to solving
            real-life problems with code. When not working I love to teach
            computer science and participate in coding contests. I also love to
            work on independent projects that help me learn new things and grow.
            When not online I love to go to mountains and forests. I also love
            to hang out with animals!
          </p>
        </div>
        <div className="content--text_content--interests">
          <h5 className="content--text_content--interests--title">Interests</h5>
          <p className="content--text_content--interests--content">
            {interests.map((interest) => {
              return <span key="interest">{interest}. </span>;
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
