import { useEffect, useState } from "react";
import "./style.css";
import api from "../../services/api";
import Header from "../../components/Header";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    loadArticles();
  }, []);

  async function loadArticles() {
    const { data } = await api.get("/articles");

    setArticles(data);
  }

  return (
    <div className='App'>
      <Header />
      {articles.map((article, index) => (
        <img
          key={article.id}
          src={article.imageUrl}
          style={{ display: (index + 1) % 3 !== 0 ? "inline" : "block" }}
        />
      ))}
    </div>
  );
}
