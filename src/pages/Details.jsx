import Navbar from "../components/navbar/Navbar"
import CategoryBtn from "../components/CategoryBtn"
import { GiBookmarklet } from "react-icons/gi";
import { IoIosArrowDropright } from "react-icons/io";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Details() {
  const { comicId } = useParams();
  const [comicDetail, setComicDetail] = useState({});
  const [genres, setGenres] = useState([]);
  const [chapters, setChapters] = useState([]);
  // const firstChapter = chapters[0].title;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    const url = 'https://api-core.bettereducation.school/api/v1/mangas/' + comicId;

    axios.get(url)
      .then(res => {
        setComicDetail(res.data);
        if(res.data.genres){
          setGenres(res.data.genres);
        }
        if(res.data.genres){
          setChapters(res.data.chapters);
        }
      })
      .catch(err => console.log(err));
  }, [comicId]);

  // console.log(chapters[chapters.length - 1]);

  return (
    <>
      <nav className="hidden md:block"><Navbar/></nav>
      {/* Small Devices */}
      <Link to="/" className="text-white bg-slate-950 flex items-center p-5 fixed w-full top-0 z-10 md:hidden">
        <FiArrowLeft className="text-xl"/>
        <h3 className="mx-auto text-lg">{comicDetail.name}</h3>
      </Link>

      <section className="text-white">
        <img src={comicDetail.photo} className="h-[38rem] w-full object-cover" />

        <div className="grid backdrop-blur-md bg-white/15 w-full h-[38rem] absolute top-0 left-0 md:grid-cols-2">
          <img src={comicDetail.photo} className="rounded-lg w-72 h-[27rem] object-cover mx-auto mt-24 md:mt-28 xl:ms-24 xl:mt-32 xl:w-80" />
        
          <div className="mx-5 md:ms-0 md:mt-28 lg:-ms-9 xl:-ms-40 xl:mt-32 2xl:-ms-72">
            <h3 className="text-2xl font-semibold text-center mt-3 mb-16 md:text-left md:text-3xl md:mb-4">
              {comicDetail.name}
            </h3>
            {genres.length !== 0 && genres.map(genre => (
              <CategoryBtn btnText={genre.title} key={genre.id}/>
            ))}

            {/* Details */}
            <div className="flex justify-between mt-4 me-6 md:me-8 md:max-w-72 lg:max-w-80">
              <div className="">
                <div className="tracking-wide">
                  <h4 className="font-bold mb-1">Status</h4>
                  <span className="">{comicDetail.status}</span>
                </div>
              </div>
              <div className="">
                <div className="tracking-wide">
                  <h4 className="font-bold mb-1">Author</h4>
                  <span className="">{comicDetail.author}</span>
                </div>
              </div>
            </div>
            <hr className="border-red-500 mt-5 md:hidden" /> 
          </div>
        </div>

        <div className="mx-5 mt-44 md:my-6 md:mx-14 lg:mx-16 xl:mx-24">
          <h3 className="text-xl md:text-2xl mb-4 tracking-wide">
            Synopsis Of
            <span className="font-semibold"> {comicDetail.name}</span>
          </h3>
          <p className="tracking-wide md:leading-7">
            {comicDetail.description}
          </p>

          <hr className="border-red-500 my-5" />

          <h3 className="text-xl md:text-2xl font-semibold mb-4 uppercase">Chapters</h3>
          <h5 className="font-semibold mb-3 text-right">
            {/* {`${firstChapter} ~`} */}
          </h5>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {chapters.length !== 0 && chapters.map(chapter => (
              <Link to={`/details/${comicId}/chapter/${chapter.id}`} className="flex items-center justify-between border-2 border-red-500 rounded-md shadow-md shadow-slate-500/50 p-2 whitespace-nowrap hover:bg-red-500" key={chapter.id}>
                <GiBookmarklet/>
                <span className="mx-3">{chapter.title}</span>
                <IoIosArrowDropright/>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Details