import { HiStar } from "react-icons/hi";

export default function Discover() {
  return (
    <div>
      <section className="bg-lightGray ralative">
        <div className="max-w-[1200px] mx-auto flex justify-between py-8 relative">
          <div className="lg:-ml-52 lg:block hidden ">
            <img
              src="/public/bg-discover.webp"
              width={600}
              // height={400}
              alt=""
              className="ml-40"
            />
          </div>
          <div className="flex flex-col items-center lg:w-1/2 relative z-10 ">
            <div className="flex items-center justify-between bg-gradient-to-r from-blue-400 to-teal-500 p-6 rounded-xl shadow-xl text-center space-x-6 cursor-pointer">
              <div className="flex-1 max-w-md">
                <h2 className="text-4xl font-extrabold text-white mb-4">
                  Discover
                </h2>
                <h2 className="text-2xl text-white mb-4 tracking-wider">
                  World Wide
                </h2>
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 rounded-lg shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Get 30% Off
                  </h2>
                  <p className="text-gray-800">
                    Enter voucher code{" "}
                    <strong className="font-semibold">travelsale12</strong>
                  </p>
                </div>
              </div>
              <div className="flex-none w-1/3">
                <img
                  src="/public/surf.png"
                  alt="Pantai"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            <p className="text-gray text-lg lg:w-full py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              atque, ea odit recusandae minus molestiae nostrum perferendis
              possimus accusamus porro, tenetur eligendi laboriosam laborum
              accusantium.
            </p>
            <div className="flex flex-1 gap-5 w-full">
              <button className="bg-primary rounded transition-bg shadow h-16 lg:px-10 lg:w-auto w-full whitespace-pre outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base hover:border hover:border-primary">
                Get Exploration
              </button>
              <button className="bg-white rounded transition-bg shadow h-16 lg:px-10 lg:w-auto w-full whitespace-pre outline-none text-primary hover:bg-primary hover:text-white cursor-pointer text-base hover:border hover:border-primary">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="lg:flex justify-between max-w-[1100px] mx-auto px-3">
          <div className="lg:w-1/2">
            <span className="flex flex-col">
              <p className="text-primary font-bold capitalize tracking-[0.15em]">
                Testimonial
              </p>
              <h2 className="text-2xl font-bold capitalize my-4 lg:w-4/5">
                What Our customers Say ABout Us
              </h2>
            </span>
            <p className="text-gray text-lg lg:w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              facilis provident dignissimos non similique hic quos veniam fugit
              voluptatibus magnam?
            </p>
            <span className="flex gap-1 items-baselinepy-4">
              <p className="font-bold text-xl">Sahjahan Sagor.</p>
              <p>Photographer</p>
            </span>
            <div className="flex items-center">
              {[...Array(5)].map((_, item) => (
                <HiStar key={item} size={24} className="text-orange"/>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="/public/map.jpg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
