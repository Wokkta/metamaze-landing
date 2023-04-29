import React from 'react';
import s from './SectionThree.module.css';
const SectionThree = () => {
  return (
    <div className={s.container}>
      <div className={s.aboutUs}>
        <h2>A Note To The Visitors</h2>
        <div className={s.BoxAbout}>
          <h1>ATTENTION, CITIZENS OF METAMAZE!</h1>
          <button className={s.btn}>know more</button>
        </div>
      </div>
      <div className={s.item}>
        <h2>This is your creator speaking:</h2>
        <span>
          <p>
            It’s time to suit up and explore the Meta-Exciting world of Metamaze. Pick up your
            customized maps and get to work as new adventures await at every nook and corner.
          </p>
          <br />
          <p>
            You know that no adventure is complete without its hurdles, not one, not two, but six.
            Metaland puts you through six unique terrains to rise above all and conquer the winning
            circles.
          </p>
          <br />
          <p>
            Every Maverick needs a Goose, you will too! We have companions to back you up through
            every challenge.
          </p>
          <br />
          <p>Experience THRILL, ADVENTURE, and…. PROFITS! How, you ask? Let us explain.</p>
          <p>
            You, the Citizens of Metaland must advance and create customizable NFTs and gain a lot
            more progressive and profitable attributes in time. FIGHT, BEAT, &amp; WIN to gain more
            game money and valuable NFT avatars, sellable- Best of both worlds indeed!
          </p>
          <br />
          <p>
            New Citizens can also contribute to expanding your treasures. Contribute in each other’s
            growth and create a self-sustaining profit-making virtual community.
          </p>
          <br />
          <p>So, CITIZENS OF METALAND, ready or not? Your 3D Avatar awaits!</p>
        </span>
      </div>
    </div>
  );
};

export default SectionThree;
