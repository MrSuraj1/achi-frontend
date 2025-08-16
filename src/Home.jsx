import ChildrenProducts from "./childDiv";
import Slider from "./slider";

function Home() {
  return (
    <>
      <div className="mt-[1%]">
        {/* Slider without extra spacing */}
        <div className="mb-10">
          <Slider />
        </div>

        {/* Image Grid */}
        <div className="flex flex-col md:flex-row gap-1 ">
          <div className="flex-1 bg-blue-100 border p-4 " >
            <img
              src="https://chombooka.com/cdn/shop/collections/Christmas_Sale.png?v=1742820638&width=750"
              alt="Design 1"
              className="transition-transform duration-300 hover:scale-110 hover:animate-pulse rounded"
            />
            <p className="mt-2 text-center">Celebrate fashion</p>
          </div>

          <div className="flex-1 bg-pink-50 border p-4">
            <img
              src="https://chombooka.com/cdn/shop/collections/Banner_2000_by_600_winter_collection.webp?v=1751954022&width=750"
              alt="Design 2"
              className="transition-transform duration-300 hover:scale-110 hover:animate-pulse rounded"
            />
             <p className="mt-2 text-center">Celebrate fashion</p>
          </div>
          
        </div>
        <ChildrenProducts />
      </div>
    </>
  );
}

export default Home;
