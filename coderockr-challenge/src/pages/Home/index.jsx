import { useEffect, useState } from "react";
import Header from "../../components/Header";
import api from "../../services/api";
import "./style.css";
import NextIcon from "../../assets/next-icon.svg";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [openArticle, setOpenArticle] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  useEffect(() => {
    loadArticles();
  }, []);

  async function loadArticles() {
    const { data } = await api.get("/articles");

    setArticles(data);
  }

  function formatatingDescription(text) {
    const dotIndex = text.indexOf(".");
    console.log(text.slice(3, dotIndex));
  }

  return (
    <div className='main'>
      <Header setOpenContact={setOpenContact} />
      <br />
      <section className='posts'>
        <div className='posts__row'>
          <div className='posts__post'>
            <img
              src={articles[0] && articles[0].imageUrl}
              className='post__image'
            />
            <div className='post__text'>
              <p className='post__author'>
                {articles[0] && articles[0].author}
              </p>
              <h1 className='post__title'>
                {articles[0] && articles[0].title}
              </h1>
              <section className='post__description'>
                {articles[0] && articles[0].article.slice(3)}
              </section>
              <img src={NextIcon} className='post__icon' />
            </div>
          </div>
          <div className='posts__post'>
            <img
              src={articles[1] && articles[1].imageUrl}
              className='post__image'
            />
            <div className='post__text'>
              <p className='post__author'>
                {articles[1] && articles[1].author}
              </p>
              <h1 className='post__title'>
                {articles[1] && articles[1].title}
              </h1>
              <section className='post__description'>
                {articles[1] && articles[1].article.slice(3)}
              </section>
              <img src={NextIcon} className='post__icon' />
            </div>
          </div>
        </div>

        <div className='posts__post posts__alone posts__left'>
          <img
            src={articles[3] && articles[3].imageUrl}
            className='post__image posts__large'
          />
          <div className='post__text'>
            <p className='post__author'>{articles[3] && articles[3].author}</p>
            <h2 className='post__title'>{articles[3] && articles[3].title}</h2>
            <section className='post__description'>
              {articles[3] && articles[3].article.slice(3)}
            </section>
            <img src={NextIcon} className='post__icon' />
          </div>
        </div>

        <div className='posts__post posts__alone posts__right'>
          <img
            src={articles[2] && articles[2].imageUrl}
            className='post__image posts__large'
          />
          <div className='post__text'>
            <p className='post__author'>{articles[2] && articles[2].author}</p>
            <h2 className='post__title'>{articles[2] && articles[2].title}</h2>
            <section className='post__description'>
              {articles[2] && articles[2].article.slice(3)}
            </section>
            <img src={NextIcon} className='post__icon' />
          </div>
        </div>

        {articles.map((article, index) => (
          <img
            key={article.id}
            src={article.imageUrl}
            style={{ display: (index + 1) % 3 !== 0 ? "inline" : "block" }}
          />
        ))}
      </section>
    </div>
  );
}
