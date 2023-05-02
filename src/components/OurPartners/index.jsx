import React from 'react';
import s from './OurPartners.module.css';

import p1 from './imgs/1.png';
import p2 from './imgs/2.png';
import p3 from './imgs/3.png';
import p4 from './imgs/4.png';
import p5 from './imgs/5.png';

const OurPartners = () => {
  return (
    <div className={s.box}>
      <h1>OUR PARTNERS</h1>

      <div className={s.runningStr2}>
        {renderPartnerImages([
          p1,
          p2,
          p3,
          p4,
          p5,
          p3,
          p4,
          p1,
          p5,
          p3,
          p2,
          p4,
          p5,
          p4,
          p3,
          p1,
          p2,
          p3,
          p4,
          p5,
          p3,
          p4,
          p5,
          p1,
          p2,
          p3,
          p4,
          p5,
          p3,
          p4,
          p5,
          p1,
          p5,
          p3,
          p4,
          p5,
          p2,
          p3,
        ])}
      </div>
      <div className={s.runningStr1}>
        {renderPartnerImages([
          p4,
          p5,
          p4,
          p3,
          p1,
          p2,
          p3,
          p4,
          p5,
          p3,
          p2,
          p3,
          p5,
          p3,
          p4,
          p4,
          p5,
          p3,
          p4,
          p5,
          p1,
          p2,
          p4,
          p5,
          p3,
          p4,
          p1,
          p5,
          p3,
          p2,
        ])}
      </div>
      <div className={s.runningStr}>
        {renderPartnerImages([
          p1,
          p2,
          p3,
          p4,
          p5,
          p3,
          p4,
          p1,
          p5,
          p3,
          p2,
          p4,
          p5,
          p4,
          p3,
          p1,
          p2,
          p3,
          p4,
          p5,
          p3,
          p4,
          p5,
          p1,
          p2,
          p3,
          p4,
          p5,
          p3,
          p4,
          p5,
          p1,
          p5,
          p3,
          p4,
          p5,
          p2,
          p3,
        ])}
      </div>
    </div>
  );
};

export default OurPartners;

function renderPartnerImages(partnerImages) {
  return partnerImages.map((image, index) => <img key={index} src={image} alt="company" />);
}
