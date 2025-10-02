import React, { useEffect, useState } from "react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import moment from "moment";


const Article = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/data/article.json")
      .then((res) => res.json())
      .then((data) => {
        const articlesArray = Array.isArray(data) ? data : [];
        setArticles(articlesArray);
      })
      .catch((err) => console.error("Gagal ambil data:", err));
  }, []);

  if (!Array.isArray(articles)) return null;

  return (
    <div className="grid md:grid-cols-3 place-items-center gap-8 mx-9 my-9 cursor-pointer">
      {articles.map((article) => (
        <Link
          key={article.id}
          to={`/${article.author}/${article.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
        >
          <img
            src={article.image}
            alt={article.title}
            className="h-60 w-full object-cover mb-4"
          />
          <h2 className="text-lg font-semibold mb-2 line-clamp-2">
            {article.title}
          </h2>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {article.description}
          </p>
          <div className="flex items-center text-xs text-gray-500 gap-2 mt-auto">
            <User size={16} className="text-gray-500" />
            <span>{article.author}</span>
            <span className="before:content-['•'] before:mx-1">
              {moment("02/10/2025", "DD/MM/YYYY").format("MMM D, YYYY")}
            </span>
            <span className="before:content-['•'] before:mx-1">
              {article.readTime}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Article;
