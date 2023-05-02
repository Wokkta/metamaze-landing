import s from './SectionFour.module.css';
import p1 from './Arrow 1.png';
function SectionFour() {
  return (
    <div className={s.container}>
      <div className={s.texts}>
        <h2>Blog</h2>
        <h1>STAY CONNECTED WITH OUR WORLD.</h1>
        <span>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
          Ipsum ha sido el texto de relleno estándar.
        </span>
        <button className={s.btn}>explore more</button>
      </div>
      <div className={s.item}>
        <div className={s.bgI}></div>

        <h2>Embracing BlockChain for Metaverse</h2>
        <span>Hey everyone. Ayan Bradmani here, CEO of ARxian. I wanted to...</span>
        <button className={s.btn1}>
          <span>Read More</span>

          <img src={p1} alt="arrow" className={s.arrow} />
        </button>
      </div>
    </div>
  );
}

export default SectionFour;
