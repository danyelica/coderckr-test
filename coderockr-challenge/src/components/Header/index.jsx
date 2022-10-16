import "./style.css";

export default function Header({ setOpenContact }) {
  return (
    <section className='header'>
      <h2 className='header__title'>Rockr Blog</h2>

      <ul className='header__links'>
        <li>Posts</li>
        <li onClick={() => setOpenContact(true)}>Contact</li>
      </ul>
    </section>
  );
}
