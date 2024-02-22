import Card from "./Card"

function PopularToday() {
  return (
    <section className="bg-gray-600 mt-14 px-5 pt-4 pb-24 md:px-12 md:py-5 lg:px-16 xl:px-24 xl:py-6">
      <h1 className="text-white text-lg md:text-xl font-semibold mb-4 ">Popular Today</h1>
      <Card/>
    </section>
  )
}

export default PopularToday