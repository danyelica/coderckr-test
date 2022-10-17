import { useEffect, useState } from "react";
import "./style.css";

export default function Article({ articles, openArticle }) {
  const [chosenArticle, setChosenArticle] = useState({});

  useEffect(() => {
    setChosenArticle(articles.find((article) => article.id === openArticle));
  }, []);

  return (
    <section className='article'>
      <div className='article__post'>
        <div className='post__top'>
          <img src={chosenArticle.imageUrl} />
          <div className='top__text'>
            <p className='text__date'>
              {new Date(chosenArticle.date).toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <p>{chosenArticle.author}</p>
            <h2 className='post__title'>{chosenArticle.title}</h2>
          </div>
        </div>
        <section className='article__description'>
          {chosenArticle.article && chosenArticle.article.slice(3, -6)}
        </section>
      </div>
    </section>
  );
}
