import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Markdown from "react-markdown";
import moment from "moment";

/**
 * @typedef {Object} ArticleData
 * @property {number} id - ID unik artikel.
 * @property {string} title - Judul artikel.
 * @property {string} description - Deskripsi singkat artikel.
 * @property {string} descriptionDetail - Isi detail artikel dalam format Markdown.
 * @property {string} author - Nama penulis artikel.
 * @property {string} slug - Slug artikel untuk URL.
 * @property {string} image - URL gambar utama artikel.
 * @property {string} readTime - Estimasi waktu baca (misalnya: "7 min read").
 */

export const ArticleDetail = () => {
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
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <div className="flex flex-col gap-7 items-center my-7 md:flex-row">
          <p className="text-gray-500">By {article.author}</p>
          <button className="py-2 px-4 rounded-4xl bg-white text-black border">
            Follow
          </button>
          <p className="text-gray-400">
            {" "}
            {moment("02/10/2025", "DD/MM/YYYY").format("MMM D, YYYY")}
          </p>
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
          <Markdown
            components={{
              h1: ({ ...props }) => (
                <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />
              ),
              h2: ({ ...props }) => (
                <h2 className="text-3xl font-bold mt-6 mb-3" {...props} />
              ),
              h3: ({ ...props }) => (
                <h3 className="text-2xl font-bold mt-4 mb-2" {...props} />
              ),
              p: ({ ...props }) => (
                <p
                  className="mb-4 text-gray-800 leading-relaxed text-lg"
                  {...props}
                />
              ),
              a: ({ ...props }) => (
                <a className="text-blue-600 hover:underline" {...props} />
              ),
              ul: ({ ...props }) => (
                <ul className="list-disc ml-6 mb-4" {...props} />
              ),
              ol: ({ ...props }) => (
                <ol className="list-decimal ml-6 mb-4" {...props} />
              ),
              li: ({ ...props }) => <li className="mb-2" {...props} />,
              blockquote: ({ ...props }) => (
                <blockquote
                  className="border-l-4 border-gray-300 pl-4 italic my-4"
                  {...props}
                />
              ),
              code: ({ inline, ...props }) =>
                inline ? (
                  <code
                    className="bg-gray-100 px-2 py-1 rounded text-sm"
                    {...props}
                  />
                ) : (
                  <code
                    className="block bg-gray-100 p-4 rounded my-4 overflow-x-auto"
                    {...props}
                  />
                ),
            }}
          >
            {article.descriptionDetail}
          </Markdown>
        </p>
      </div>
    </>
  );
};

export default ArticleDetail;
