import { useEffect } from 'react';
import s from './Gallery.module.css';
function Gallery(props) {
  return (
    <>
      <div className={s.container}>
        <div className={s.texts}>
          <h1>{props.h1}</h1>
          <span>{props.span}</span>
        </div>
        <div className={s.gallery}>
          <div className={s.item}>
            <div className={s.itemInnerBg1}></div>
          </div>
          <div className={s.item}>
            <div className={s.itemInnerBg2}></div>
          </div>
          <div className={s.item}>
            <div className={s.itemInnerBg3}></div>
          </div>
          <div className={s.item}>
            <div className={s.itemInnerBg4}></div>
          </div>
          <div className={s.item}>
            <div className={s.itemInnerBg5}></div>
          </div>
          <div className={s.item}>
            <div className={s.itemInnerBg6}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
