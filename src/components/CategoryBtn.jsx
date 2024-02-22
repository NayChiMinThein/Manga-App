/* eslint-disable react/prop-types */
function CategoryBtn({btnText, handleClick}) {
  return (
    <button onClick={handleClick} className="border-2 border-red-500 rounded-full me-4 py-2 px-3 text-sm whitespace-nowrap hover:bg-red-500">
      {btnText}
    </button>
  )
}

export default CategoryBtn