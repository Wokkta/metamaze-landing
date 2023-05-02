import React from 'react';
import s from './OurPartners.module.css';
const OurPartners = () => {
  return (
    <div className={s.box}>
      <h1>OUR PARTNERS</h1>

      <div className={s.runningStr2}>
        {renderPartnerImages([
          1, 2, 3, 4, 5, 3, 4, 1, 5, 3, 2, 4, 5, 4, 3, 1, 2, 3, 4, 5, 3, 4, 5, 1, 2, 3, 4, 5, 3, 4,
          5, 1, 5, 3, 4, 5, 2, 3,
        ])}
      </div>
      <div className={s.runningStr1}>
        {renderPartnerImages([2, 3, 5, 3, 4, 4, 5, 3, 4, 5, 1, 2, 4, 5, 3, 4, 1, 5, 3, 2])}
      </div>
      <div className={s.runningStr}>
        {renderPartnerImages([
          1, 2, 3, 4, 5, 3, 4, 1, 5, 3, 2, 4, 5, 4, 3, 1, 2, 3, 4, 5, 3, 4, 5, 1, 2, 3, 4, 5, 3, 4,
          5, 1, 5, 3, 4, 5, 2, 3,
        ])}
      </div>
    </div>
  );
};

export default OurPartners;

function renderPartnerImages(partnerImages) {
  return partnerImages.map((image, index) => (
    <img key={index} src={`src\\components\\OurPartners\\imgs\\${image}.png`} alt="company" />
  ));
}
