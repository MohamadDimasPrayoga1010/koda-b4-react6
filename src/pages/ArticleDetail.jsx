import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import Markdown from "react-markdown";
import moment from "moment";

const ArticleDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetch("/data/article.json")
      .then((res) => res.json())
      .then((data) => {
        const found = Array.isArray(data)
          ? data.find((a) => a.slug === slug)
          : [];
        setArticle(found);
      })
      .catch((err) => console.error(err));
  }, [slug]);

  if (!article) return <p className="p-8">Artikel tidak ditemukan</p>;

  return (
    <>
      <Navbar />
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <div className="flex flex-col gap-7 items-center my-7 md:flex-row">
          <p className="text-gray-500">By {article.author}</p>
          <button className="py-2 px-4 rounded-4xl bg-white text-black border">
            Follow
          </button>
          <p className="text-gray-400"> {moment("02/10/2025", "DD/MM/YYYY").format("MMM D, YYYY")}</p>
          <p>{article.readTime}</p>
        </div>
        <Helmet>
          <title>{article.slug}</title>
        </Helmet>
        <img
          src={article.image}
          alt={article.title}
          className="mb-4 w-full h-60 object-cover rounded-lg"
        />
        <p>
          <Markdown >
            {article.descriptionDetail}
          </Markdown>
        </p>
      </div>
    </>
  );
};

export default ArticleDetail;
