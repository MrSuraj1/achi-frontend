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
              src="https://as2.ftcdn.net/jpg/03/64/77/41/1000_F_364774110_jT8aIxPfIT6QOMngnpm9qHDxfoJebfMB.jpg"
              alt="Design 1"
              className="transition-transform duration-300 hover:scale-110 hover:animate-pulse rounded"
            />
            <p className="mt-2 text-center">Celebrate fashion</p>
          </div>

          <div className="flex-1 bg-pink-50 border p-4">
            <img
              src="https://as2.ftcdn.net/jpg/03/64/77/41/1000_F_364774110_jT8aIxPfIT6QOMngnpm9qHDxfoJebfMB.jpg"
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
