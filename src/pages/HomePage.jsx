import { Link } from "react-router-dom";
import HomeImg from "/homepage.jpg";
import KodaImg from "/koda.png";
import { User } from "lucide-react";
import ApiCiImg from "/apiCi.webp";
import Article from "../components/Article";
import moment from "moment";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
      </Helmet>
      <main>
        <img
          src={HomeImg}
          alt="image-home"
          className="h-[200px] w-full object-cover"
        />
        <section className="py-7 px-4 md:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <img
                src={KodaImg}
                alt="koda-img"
                className="w-[90px] h-[90px] rounded-full object-cover"
              />
              <div className="text-center md:text-left">
                <h1 className="font-medium text-3xl">Fazztrack</h1>
                <p className="text-lg mt-2">
                  Belajar menjadi software engineer secara online/remote selama
                  3-6 bulan sampai diterima kerja, tanpa bayar di depan (ISA).
                </p>
                <div className="flex items-center gap-2 mt-2 justify-center md:justify-start text-gray-600 text-sm">
                  <p>9 followers</p>
                  <User
                    className="cursor-pointer hover:text-gray-700"
                    size={20}
                  />
                  <p>3 editor</p>
                </div>
              </div>
            </div>

            <button className="bg-black text-white px-4 py-2 rounded-lg shadow w-full md:w-auto">
              Follow
            </button>
          </div>
        </section>
        <section className="border-b border-gray-400">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-7 px-4 md:px-12 items-start md:items-center">
            <Link className="hover:underline">Tutorial</Link>
            <span className="hidden md:block h-6 border border-gray-400"></span>
            <Link className="hover:underline">Daftar Sekarang</Link>
          </div>
        </section>

        <Link
          to="/agoypra/bootstrapping-codeigniter4-docker"
          className="flex flex-col md:flex-row gap-6 md:gap-12 py-7 px-4 md:px-12 hover:bg-gray-50 rounded-lg transition"
        >
          <img
            src={ApiCiImg}
            alt="codeidniter-img"
            className="w-full md:w-1/2 h-auto object-cover rounded-lg"
          />
          <div className="flex flex-col gap-4 md:mt-0 mt-4 md:pr-9">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Bootstrapping Project Codeigniter 4 menggunakan Docker
            </h1>
            <p className="text-lg text-gray-700">
              Mengembangkan aplikasi Codeigniter 4 lebih mudah dengan
              menggunakan Docker, berikut caranya...
            </p>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
              <User className="cursor-pointer hover:text-gray-700" size={20} />
              <p>Fazztrack</p>
              <p className="before:content-['•'] before:mx-2">
                {moment("02/10/2025", "DD/MM/YYYY").format("MMM D, YYYY")}
              </p>
              <p className="before:content-['•'] before:mx-2">4 min read</p>
            </div>
          </div>
        </Link>

        <Article />
      </main>
    </>
  );
};

export default HomePage;
