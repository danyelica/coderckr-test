import { useEffect, useRef, useState } from "react";
import NextIcon from "../../assets/next-icon.svg";
import Article from "../../components/Article";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import api from "../../services/api";
import "./style.css";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [openArticle, setOpenArticle] = useState(null);
  const [openContact, setOpenContact] = useState(false);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    infinityScroll();
  }, [openArticle]);

  useEffect(() => {
    loadArticles();
  }, [currentPage]);

  async function loadArticles() {
    const { data } = await api.get(`/articles?_page=${currentPage}`);

    setArticles([...articles, ...data]);
  }

  function infinityScroll() {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      if (target.isIntersecting) {
        setCurrentPage((old) => old + 1);
      }
    }, options);

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
  }

  function handlePostClass(index) {
    if ((index + 1) % 3 === 0) {
      if ((index + 1) % 2 === 0) {
        return "posts__alone posts--left";
      }
      return "posts__alone posts--right";
    }
    return "";
  }

  function handleOpenArticle(id) {
    setOpenArticle(id);
  }

  function handlePostImage(index) {
    if (window.screen.width > 768) {
      if ((index + 1) % 3 !== 0) {
        return "";
      }
      return "posts--large";
    }
    return "";
  }

  return (
    <div className='main'>
      <Header setOpenArticle={setOpenArticle} setOpenContact={setOpenContact} />
      <br />
      {!openArticle ? (
        <section className='posts'>
          {articles.map((article, index) => {
            return (
              <div
                className={"posts__post " + handlePostClass(index)}
                key={article.id}
                onClick={() => handleOpenArticle(article.id)}
              >
                <img
                  src={article.imageUrl}
                  className={"post__image " + handlePostImage(index)}
                />
                <div className='post__text'>
                  <p>{article.author}</p>
                  <h2 className='post__title'>{article.title}</h2>
                  <section className='post__description'>
                    {article.article && article.article.slice(3)}
                  </section>
                  <img src={NextIcon} className='post__icon' />
                </div>
              </div>
            );
          })}
          <p ref={loadMoreRef}></p>
        </section>
      ) : (
        <Article articles={articles} openArticle={openArticle} />
      )}

      {openContact && <Contact setOpenContact={setOpenContact} />}
    </div>
  );
}
