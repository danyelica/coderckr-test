import CloseIcon from "../../assets/close-icon.svg";
import SubmitIcon from "../../assets/submit-icon.svg";
import "./style.css";

export default function Contact({ setOpenContact }) {
  return (
    <section className='contact'>
      <div className='contact__container'>
        <img
          src={CloseIcon}
          className='contact__close'
          onClick={() => setOpenContact(false)}
        />
        <h2 className='post__title'>Contact</h2>
        <form className='contact__form'>
          <label className='form__label'>Name</label>
          <input
            type='text'
            placeholder='Fill your full name'
            className='form__input'
          />
          <label className='form__label'>E-mail</label>
          <input
            type='email'
            placeholder='Fill with a valid e-mail'
            className='form__input'
          />
          <label className='form__label'>Phone</label>
          <input
            type='text'
            placeholder='Fill your phone'
            className='form__input'
          />
          <label className='form__label'>Post</label>
          <textarea
            type='text'
            rows='7'
            cols='50'
            placeholder='Hello...'
            className='form__input'
          />
          <button className='contact__button'>
            <img src={SubmitIcon} />
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
