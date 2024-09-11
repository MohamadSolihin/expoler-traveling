export default function Hero() {
  return (
    <div className="bg-[url('/public/dd.webp')]  bg-no-repeat bg-cover bg-center z-10 pb-32 overflow-x-hidden ">
      <div className="lg:flex max-w-[1100px] mx-auto justify-between items-center px-3 pt-12">
        <div className="lg:2-/5">
          <h2 className="xl:text-[3rem] lg:text-5xl text-4xl lg:text-left text-center font-bold lg:leading-snug mb-5">
            It`s A Big World <br /> Out There, Go <br /> Explore
          </h2>
          <p className="text-gray text-sm leading-normal mb-8 w-96">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            provident aliquid inventore cumque esse tempora, aut error,
            adipisci, ipsum voluptas fuga suscipit sapiente corporis quis.
          </p>
          <div className="flex flex-1 gap-5">
            <button className="bg-primary rounded transition-bg shadow h-16 lg:px-10 lg:w-auto w-full outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base hover:border hover:border-primary">
              Get Exploration
            </button>
            <button className="bg-white rounded transition-bg shadow h-16 lg:px-10 lg:w-auto w-full outline-none text-primary hover:bg-primary hover:text-white cursor-pointer text-base hover:border hover:border-primary">
              Read More
            </button>
          </div>
        </div>
        <div className="lg:w-3/5 flex items-center justify-end lg:pt-0 pt-10">
          <div className=" overflow-hidden">
            <img
              src="/public/logo.png"
              alt="Deskripsi gambar"
              className="w-full h-full object-cover -mt-9"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
