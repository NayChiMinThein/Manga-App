import { Link } from "react-router-dom"
import CategoryBtn from "../components/CategoryBtn"
import MyCarousel from "../components/MyCarousel"
import Navbar from "../components/navbar/Navbar"
import PopularToday from "../components/PopularToday"
import "../App.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { Spinner } from 'flowbite-react';

function Home() {
  const url = 'https://api-core.bettereducation.school';
  const [categories, setCategories] = useState([]);
  const [comics, setComics] = useState([]);
  const [filteredComics, setFilteredComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url + '/api/v1/categories')
      .then(res => {
        setCategories(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 0);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get(url + '/api/v1/mangas?per_page=6')
      .then(res => {
        setComics(res.data.data);
        setTimeout(() => {
          setLoading(false);
        }, 0);
      })
      .catch(err => console.log(err));
  }, []);

  const selectCategory = (categoryId) => {
    axios.get(`${url}/api/v1/category/mangas/${categoryId}`)
      .then(res => {
        setFilteredComics(res.data.data);
        setComics([]);
      })
      .catch(err => console.log(err))
  }

  // console.log(filteredComics);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner size="xl"/>
        </div>
      ) : (
        <>
          <Navbar/>
          <MyCarousel/>
          <main>
            <section className="text-white mx-5 mt-8 md:mx-12 md:mt-12 lg:mx-16 xl:mx-24">
              <div className="overflow-x-auto hide-scrollbar flex items-center">
                {categories.map(category => (
                  <CategoryBtn btnText={category.title} key={category.id} handleClick={() => selectCategory(category.id)}/>
                ))}
                <Link className="font-semibold ms-2 whitespace-nowrap hover:text-red-500">
                  All Categories
                </Link>
              </div>

              <div className="mt-8 md:mt-12">
                <div className="grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6">
                  {comics.length !== 0 && comics.map(comic => (
                      <div className="" key={comic.id}>
                        <Link to={`/details/${comic.id}`}>
                          <img src={comic.photo} className="rounded-md h-40 object-cover md:h-64 xl:h-80 hover:brightness-75"/>
                        </Link>
                        <h1 className="text-center mt-1 md:mt-2 text-sm md:text-base">{comic.name}</h1>
                      </div>
                    )
                  )}

                  {/* filterComics */}
                  {filteredComics.length !== 0 && filteredComics.map(comic => (
                      <div className="" key={comic.id}>
                        <Link to={`/details/${comic.manga.id}`}>
                          <img src={comic.manga.photo} className="rounded-md h-40 object-cover md:h-64 xl:h-80 hover:brightness-75"/>
                        </Link>
                        <h1 className="text-center mt-1 md:mt-2 text-sm md:text-base">{comic.manga.name}</h1>
                      </div>
                    )
                  )}
                </div>
                <button className="mt-3 float-right font-semibold hover:text-red-500 text-sm">
                  See More...
                </button>
              </div>
            </section>
            <PopularToday/>
          </main>
        </>
      )}
    </div>
  )
}

export default Home