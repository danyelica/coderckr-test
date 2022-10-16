import { useEffect, useState } from "react";
import "./App.css";
import api from "./services/api";

export default function App() {
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
