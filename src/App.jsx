import { useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import {
  SectionOne,
  Gallery,
  OurPartners,
  SectionTwo,
  SectionFour,
  SectionThree,
} from './components';

function App() {
  const galleryHeaders = ['CITIZEN OF METAMAZE', 'SIX UNIQUE COMPANIONS'];
  const gallerySpans = [
    'Entering into Metaverse. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'Your companions are all set for the game. Six distinctive companions will help you fight all the challenges that might come your way.Fight like a team with some handpicked customized partners for you.',
  ];
  let test = [
    {
      h1: 'SIX UNIQUE COMPANIONS',
      span: 'Your companions are all set for the game. Six distinctive companions will help you fight all the challenges that might come your way. Fight like a team with some handpicked customized partners for you.',
    },
    {
      h1: 'SIX UNIQUE TERRAINSS',
      span: 'This game has six unique terrains, each with some exciting new features. Every terrain has its unique qualities and challenges to make your game more and more interesting.',
    },
  ];

  return (
    <div className="App">
      <Header />
      <SectionOne />
      <div className="aboutUs">
        <h2>About Us</h2>
        <div className="BoxAbout">
          <h1>WHAT IS CITIZEN OF METAMAZE?</h1>
          <a href="#" className="btn">
            know more
          </a>
        </div>
        <div className="subTxt">
          CoM has been created by extremely passionate developers, just like you! They are dying to
          show you what is in store! So hop on and get to our Get In Touch section to connect with
          us.
        </div>
      </div>
      {test.map((el) => {
        return <Gallery h1={`${el.h1}`} span={`${el.span}`} key={Math.random()} />;
      })}
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <OurPartners />
      <Footer />
    </div>
  );
}

export default App;
