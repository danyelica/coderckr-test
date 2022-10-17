import "./style.css";

export default function Header({ setOpenArticle, setOpenContact }) {
  return (
    <section className='header'>
      <h2 className='header__title'>Rockr Blog</h2>

      <ul className='header__links'>
        <li onClick={() => setOpenArticle(null)}>Posts</li>
        <li onClick={() => setOpenContact(true)}>Contact</li>
      </ul>
    </section>
  );
}
