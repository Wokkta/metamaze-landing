import React from 'react';
import s from './SectionTwo.module.css';
const SectionTwo = () => {
  return (
    <div className={s.container}>
      <h1>HOW DOES THIS WORK?</h1>
      <div className={s.item}>
        <h2>PLAY, SLAY, EVERY DAY!</h2>
        <span>
          Play our terrific games to create and acquire completely customizable and progressive game
          character NFTs. Employ them in PvP games, story-based AI combat, Ir custom campaigns to
          gain $CoM, new pieces, and weapons developed by our highly skilled developers. You get the
          freedom to select or even design your gaming 3D avatar.{' '}
        </span>
      </div>
      <div className={s.item}>
        <h2>BE A METAVERSE LANDLORD</h2>
        <span>
          Acquire and manage estates in the metaverse. Develop your assets such as hotels, pubs, and
          stores, which players and creators can rent. Design and manage the assets based on your
          preferences. You can also engage architects and engineers to help design and construct.
        </span>
      </div>
      <div className={s.item}>
        <h2>YOU EARNED IT</h2>
        <span>
          Accepting requests in the Metaverse, adventuring dungeons with friends, and beating
          formidable foes to get valuable assets in the game are all ways for players to earn
          through NFT sales and game money. Players can earn money even when new users/guests help
          increase their assets. The time is coming when an entire virtual community will elicit
          their assets and benefit themselves with a wide range of gaming features, using our
          effective virtual interaction strategies and planning.
        </span>
      </div>
      <div className={s.after}></div>
    </div>
  );
};

export default SectionTwo;
