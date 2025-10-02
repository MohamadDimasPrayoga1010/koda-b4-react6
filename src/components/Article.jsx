import React, { useEffect, useState } from "react";
import { User } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import moment from "moment";

/**
 * @typedef {Object} ArticleData
 * @property {number} id - ID unik artikel.
 * @property {string} title - Judul artikel.
 * @property {string} description - Deskripsi singkat artikel.
 * @property {string} descriptionDetail - Isi detail artikel dalam format Markdown.
 * @property {string} author - Nama penulis artikel.
 * @property {string} slug - Slug artikel untuk URL.
 * @property {string} image - URL gambar thumbnail artikel.
 * @property {string} readTime - Estimasi waktu baca (misalnya: "5 min read").
 */

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  useEffect(() => {
    fetch("/data/article.json")
      .then((res) => res.json())
      .then((data) => {
        let articlesArray = Array.isArray(data) ? data : [];
        articlesArray = articlesArray.filter((article) => article.id !== 1);
        setArticles(articlesArray);
      })
      .catch((err) => console.error("Gagal ambil data:", err));
  }, []);

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query) ||
      article.author.toLowerCase().includes(query)
  );

  if (!Array.isArray(articles)) return null;

  return (
    <div className="grid md:grid-cols-3 place-items-center gap-8 mx-9 my-9 cursor-pointer">
      {filteredArticles.length > 0 ? (
        filteredArticles.map((article) => (
          <Link
            key={article.id}
            to={`/${article.author}/${article.slug}`}
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
        ))
      ) : (
        <p className="col-span-3 text-gray-500">Tidak ada artikel ditemukan.</p>
      )}
    </div>
  );
};

export default Article;
