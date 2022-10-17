import { useEffect, useState } from "react";
import NextIcon from "../../assets/next-icon.svg";
import Header from "../../components/Header";
import api from "../../services/api";
import "./style.css";

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

  function handlePostClass(index) {
    if ((index + 1) % 3 !== 0) {
      return "posts__post";
    } else {
      if ((index + 1) % 2 === 0) {
        return "posts__post posts__alone posts--left";
      }
      return "posts__post posts__alone posts--right";
    }
  }

  function handlePostImage(index) {
    if ((index + 1) % 3 !== 0) {
      return "";
    }
    return "posts--large";
  }

  return (
    <div className='main'>
      <Header setOpenContact={setOpenContact} />
      <br />
      <section className='posts'>
        {articles.map((article, index) => {
          return (
            <div className={handlePostClass(index)}>
              <img
                src={article.imageUrl}
                className={"post__image" + handlePostImage(index)}
              />
              <div className='post__text'>
                <p className='post__author'>{article.author}</p>
                <h2 className='post__title'>{article.title}</h2>
                <section className='post__description'>
                  {article.article.slice(3)}
                </section>
                <img src={NextIcon} className='post__icon' />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
