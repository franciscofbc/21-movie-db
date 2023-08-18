import React from 'react';
import Form from './SearchForm';
import Movies from './Movies';
const Home = () => {
  return (
    <main>
      <div className="title">
        <h1>search movies</h1>
        <div className="title-underline"></div>
      </div>
      <Form />
      <Movies />
    </main>
  );
};

export default Home;
