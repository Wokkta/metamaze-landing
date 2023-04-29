import s from './Footer.module.css';
import { useState } from 'react';
function Footer() {
  return (
    <footer>
      <h2>Let's Connect</h2>
      <h1 className={s.slogan}> STAY IN TOUCH WITH US!</h1>
      <div className={s.content}>
        <div className={s.info}>
          <div className={s.adress}>
            <span>Metamaze Technologies</span>
            <span>AB7/846-124, Dubai, UAE.</span>
            <span className={s.toMap}>
              <a href="/">View on Map</a>
              <div className={s.arrow}></div>
            </span>
          </div>
          <a href="tel+917415875215" className={s.phone}>
            <span>+91 741 587 5215</span>
          </a>
          <a href="mailto:info@metamaze.space" className={s.mail}>
            <span>info@metamaze.space</span>
          </a>
          <div className={s.media}>
            <a href="/" className={s.mediaLink}></a>
            <a href="/" className={s.mediaLink}></a>
            <a href="/" className={s.mediaLink}></a>
            <a href="/" className={s.mediaLink}></a>
            <a href="/" className={s.mediaLink}></a>
            <a href="/" className={s.mediaLink}></a>
            <a href="/" className={s.mediaLink}></a>
          </div>
        </div>
        <Form />
      </div>
      <div className={s.terms}>
        <a href="#">Terms & Conditions</a>
        <a href="#">Citizen of METAMAZE - All Rights Reserved</a>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
}
export default Footer;

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    country: '',
    phone: '',
    organization: '',
    description: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    // Отправьте данные формы здесь
    // ...

    // Сбросьте значения полей формы
    setFormData({
      name: '',
      email: '',
      inquiryType: '',
      country: '',
      phone: '',
      organization: '',
      description: '',
    });
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label htmlFor="name">
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="email">
        <input
          type="text"
          id="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="inquiryType">
        <input
          type="text"
          id="inquiryType"
          placeholder="Inquiry Type"
          value={formData.inquiryType}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="country">
        <input
          type="text"
          id="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="phone">
        <input
          type="text"
          id="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="organization">
        <input
          type="text"
          id="organization"
          placeholder="Organization"
          value={formData.organization}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="description">
        <input
          type="text"
          id="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="submit" className={s.submit}>
        <button type="submit">SUBMIT DETAILS</button>
      </label>
    </form>
  );
}
