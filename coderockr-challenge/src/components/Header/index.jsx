import "./style.css";

export default function Header() {
  return (
    <section className='header'>
      <h2 className='header__title'>Rockr Blog</h2>

      <ul className='header__links'>
        <li>
          <a href='/'>Posts</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    </section>
  );
}
