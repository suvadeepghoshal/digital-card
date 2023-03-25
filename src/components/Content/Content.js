import React from 'react';

export const Content = () => {
  const contents = [
    {
      key: 1,
      name: 'About',
      value: `Hello, I'm a full-stack developer based in India with a passion for building digital services/stuff. 
      I have a knack for all things starting from planning and designing and all the way to solving real-life problems with code. 
      I've been successfully delivering digital services to my clients on enterprise applications over the past two years; ranging from front-end to back-end applications. 
      I'm currently employed as a software engineer at LTIMindtree for two years. 
      I'm hands-on in all stages of the software development cycle, from planning and design to development, build and deployment. 
      Every day brings new diversity to my role. My day-to-day activities involve analysing algorithms, writing code, fixing bugs, brainstorming ideas or integrating new systems. 
      Something that I love about software development is the opportunity to work with people from a wide range of disciplines. 
      The software development lifecycle involves working with so many different people and departments and, as a people person and someone who loves to build new relationships, it's great to be able to come together with other professionals who are striving towards the same goal. 
      When I am not online, I'm an educator; I love to teach enthusiastic minds about computer science and algorithms. I am an avid mountain lover and bike rider. I leave no opportunity to get on a bike and ride towards the hills!`
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
            <div className="text-slate-700 dark:text-slate-500 text-xs sm:text-base md:text-lg lg:text-lg xl:text-xl">
              {content?.value}
            </div>
          </>
        );
      })}
    </div>
  );
};
