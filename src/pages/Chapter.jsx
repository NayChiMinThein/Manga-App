import Navbar from "../components/navbar/Navbar"
import { GiBookmarklet } from "react-icons/gi";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Chapter() {
  const { chapterId, comicId } = useParams();
  const [chapter, setChapter] = useState([]);
  const [images, setImages] = useState([]);
  const [comicDetail, setComicDetail] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    const url = 'https://api-core.bettereducation.school/api/v1/chapter/' + chapterId;

    axios.get(url)
      .then(res => {
        setChapter(res.data);
        if(res.data.media){
          setImages(res.data.media);
        }
      })
      .catch(err => console.log(err));
  }, [chapterId]);

  useEffect(() => {
    const url = 'https://api-core.bettereducation.school/api/v1/mangas/' + comicId;

    axios.get(url)
      .then(res => {
        setComicDetail(res.data);
      })
      .catch(err => console.log(err));
  }, [comicId]);

  // console.log(comicDetail);

  return (
    <>
      <nav className="hidden md:block"><Navbar/></nav>
      {/* Small Devices */}
      <Link to={`/details/${comicId}`} className="text-white bg-slate-950 flex items-center p-5 md:hidden">
        <FiArrowLeft className="text-xl"/>
        <h3 className="mx-auto text-lg">{comicDetail.name}</h3>
      </Link>

      <section className="text-white mx-5 my-7 md:pt-24 md:mx-14 lg:mx-20 xl:pt-28">
        <h3 className="text-center text-2xl font-bold mb-1 md:text-3xl md:mb-2 xl:text-4xl xl:mb-3">
          {comicDetail.name}
        </h3>
        <p className="text-center mb-6 text-sm md:mb-8 lg:text-base xl:text-lg xl:mb-10">
          All Chapters are in 
          <Link to={`/details/${comicId}`} className="text-red-500 font-semibold tracking-wide"> {comicDetail.name}</Link>
        </p>

        <div className="max-w-fit mx-auto">
          <div className="flex items-center justify-between mb-8 md:mb-10 xl:mb-12">
            <button className="border-2 border-red-500 rounded-full me-3 py-1 px-2 flex items-center md:py-2 md:px-3">
              <GiBookmarklet className="md:text-lg me-2"/>
              <span className="text-sm md:text-base">{chapter.title}</span>
            </button>

            <div className="flex items-center gap-3 text-xl md:text-2xl md:gap-4">
              <button className="">
                <FaCircleChevronLeft/>
              </button>
              <button className="">
                <FaCircleChevronRight/>
              </button>
            </div>
          </div>
          {images.length !== 0 && images.map(img => (
            <img src={img.original_url} key={img.id} className="" />
          ))}
        </div>
      </section>
    </>
  )
}

export default Chapter