import React from 'react';

const Landing = () => {
  return (
    <section
      id="landing"
      className="h-screen bg-black text-white flex flex-col justify-center items-center text-center px-4"
    >
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">
        Hi, I'm Alwin Tomy
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl">
        I build clean and functional web applications with a focus on user experience and performance.
      </p>
      <a
        href="#about"
        className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
      >
        Learn More
      </a>
    </section>
  );
};

export default Landing;
