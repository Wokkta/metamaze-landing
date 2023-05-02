import s from './SectionOne.module.css';
function SectionOne() {
  return (
    <div className={s.content}>
      <div className={s.texts}>
        <h1>CITIZEN OF METAMAZE</h1>
        <span>
          Entering into Metaverse. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </span>
        <a href="#" className={s.getTokens}>
          <div className={s.btnImg}></div>
          <span>Get Tokens</span>
        </a>
      </div>
      <div className={s.imgs}>
        <div className={s.bg}></div>
        <div className={s.donats}></div>
        <div className={s.donats}></div>
      </div>

      <div className={s.freespace}></div>
    </div>
  );
}

export default SectionOne;
