import { Link } from "react-router-dom"
import { MdBookmarkAdd } from "react-icons/md";

function Card() {
  return (
    <div className="grid md:grid-cols-2 md:gap-3 xl:grid-cols-3 xl:gap-4">
      <Link to="/details/1" className="flex items-center relative gap-2 bg-white border border-gray-200 rounded-lg shadow p-2 mb-3 xl:gap-3 xl:p-3 hover:bg-gray-200">
        <img className="object-cover h-32 xl:h-52" src="/cover.jpg" alt="..."/>
        <div>
          <h5 className="text-lg font-bold text-gray-900 mb-1 max-w-40 xl:text-xl xl:mb-2">
            Solo Leveling
          </h5>
          <MdBookmarkAdd className="absolute top-3 right-3 text-xl text-red-500 xl:text-2xl hover:text-red-600"/>
          <span className="bg-slate-500 text-white text-sm xl:text-base py-1 px-2 rounded-full">
            Adventure
          </span>
          <p className="mb-3 text-gray-700 text-sm xl:text-base mt-2 xl:mt-3">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </div>
      </Link>

      <Link to="#" className="flex items-center relative gap-2 bg-white border border-gray-200 rounded-lg shadow p-2 mb-3 xl:gap-3 xl:p-3">
        <img className="object-cover h-32 xl:h-52" src="/sl.jpg" alt=""/>
        <div>
          <h5 className="text-lg font-bold text-gray-900 mb-2 max-w-40 xl:text-xl">Solo Leveling</h5>
          <MdBookmarkAdd className="absolute top-3 right-3 text-xl text-red-500 xl:text-2xl"/>
          <span className="bg-slate-500 text-white text-sm xl:text-base py-1 px-2 rounded-full">
            Adventure
          </span>
          <p className="mb-3 text-gray-700 text-sm xl:text-base mt-2 xl:mt-3">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </div>
      </Link>

      <Link to="#" className="flex items-center relative gap-2 bg-white border border-gray-200 rounded-lg shadow p-2 mb-3 xl:gap-3 xl:p-3">
        <img className="object-cover h-32 xl:h-52" src="/cover.jpg" alt=""/>
        <div>
          <h5 className="text-lg font-bold text-gray-900 mb-2 max-w-40 xl:text-xl">Solo Leveling</h5>
          <MdBookmarkAdd className="absolute top-3 right-3 text-xl text-red-500 xl:text-2xl"/>
          <span className="bg-slate-500 text-white text-sm xl:text-base py-1 px-2 rounded-full">
            Adventure
          </span>
          <p className="mb-3 text-gray-700 text-sm xl:text-base mt-2 xl:mt-3">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Card