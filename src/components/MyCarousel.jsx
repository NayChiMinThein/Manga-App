import { Carousel } from "flowbite-react"
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

function MyCarousel() {
  return (
    <div className="">
        <Carousel className="hidden md:block md:h-96 xl:h-[26rem]">
            <div className="relative w-full h-full">
                <img src="/slCover.jpg" alt="..." className="w-full h-full object-cover" />
                <div className="absolute top-36 left-24 p-4 max-w-lg backdrop-blur-md bg-white/5 rounded-md xl:left-32 xl:top-40">
                    <h1 className="text-white text-3xl lg:text-4xl font-bold">Solo Leveling</h1>
                    <p className="text-white mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempora aliquid nulla beatae corrupti dolorum dignissimos blanditiis delectus saepe. Tenetur maxime dolor deleniti distinctio earum facilis perferendis suscipit aliquid aspernatur...
                    </p>
                </div>
            </div>

            <div className="relative w-full h-full">
                <img src="/bgcover.jpg" alt="..." className="w-full h-full object-cover" />
                <div className="absolute top-36 left-24 p-4 max-w-lg backdrop-blur-md bg-white/5 rounded-md xl:left-32 xl:top-40">
                    <h1 className="text-white text-3xl lg:text-4xl font-bold">Solo Leveling</h1>
                    <p className="text-white mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempora aliquid nulla beatae corrupti dolorum dignissimos blanditiis delectus saepe. Tenetur maxime dolor deleniti distinctio earum facilis perferendis suscipit aliquid aspernatur...
                    </p>
                </div>
            </div>
        </Carousel>

        {/* Small Devices */}
        <Carousel 
            indicators={false} 
            leftControl={<GoChevronLeft className="text-blue-500 text-6xl absolute -left-24 top-1/3"/>} 
            rightControl={<GoChevronRight className="text-blue-500 text-6xl absolute -right-24 top-1/3"/>}
            className="h-96 w-48 mx-auto mt-4 relative md:hidden"
        >
            <figure>
                <img src="/cover.jpg" alt="..." className="rounded-lg object-cover" />
                <figcaption className="text-white text-center mt-2">
                    <h1 className="text-xl font-bold">Solo Levling</h1>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                </figcaption>
            </figure>

            <figure>
                <img src="/sl.jpg" alt="..." className="rounded-lg object-cover" />
                <figcaption className="text-white text-center mt-2">
                    <h1 className="text-xl font-bold">Solo Levling</h1>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                </figcaption>
            </figure>
        </Carousel>
    </div>

  )
}

export default MyCarousel