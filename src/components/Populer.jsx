import { useEffect, useRef } from "react";
import { HiLocationMarker, HiStar } from "react-icons/hi";

export default function Populer() {
  const images = [
    "./Bhutan City.jpg",
    "./Greece City.jpg",
    "./japan.jpg",
    "./Maldives beach.jpg",
    "./Paris City.jpg",
    "./Grece City.jpg",
    "./brazil.jpg",
  ];

  const Card = ({ image, text }) => {
    return (
      <div>
        <div className="overflow-hidden my-0 mx-auto rounded-t-2xl">
          <img
            src={image}
            alt=""
            className="rounded-t-2xl w-[300px] h-[225px] box-border hoverImg"
          />
        </div>
        <div className="bg-white shadow p-3 rounded-b-2xl">
          <h5 className="text-[23px] px-4 font-semibold">{text}</h5>
          <div className="flex items-center gap-2 py-3">
            <HiLocationMarker size={20} className="text-primary" />
            <p className="text-gray text-xl">Indonesia, Bali</p>
          </div>
          <span className="flex items-center justify-between">
            <div className="bg-white text-gray shadow rounded-sm w-16 flex items-center gap-1">
              <HiStar className="text-orange" /> 4.5
            </div>
            <p>(2.5k Review)</p>
            <div className="bg-primary text-white text-lg text-center w-20 p-1 rounded-md transition-bg hover:bg-white hover:text-primary">
              $1200
            </div>
          </span>
        </div>
      </div>
    );
  };

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const scrollInterval = setInterval(() => {
      if (
        container.scrollLeft + container.offsetwidth <
        container.scrollWidth
      ) {
        container.scrollLeft += container.offsetWidth;
      } else {
        container.scrollLeft = 0;
      }
    }, 3000);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div>
      <section className="bg-lightGray py-16">
        <div className="max-w-[1200px] mx-auto px-3">
          <span className="flex items-center flex-col">
            <p className="text-primary font-bold capitalize tracking-[0.15em]">
              Populer Hotel
            </p>
            <h2 className="text-4xl text-center font-bold capitaliza my-4">
              Most Populer Hotel
            </h2>
          </span>
          <div className="grid xl:gri-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-12 relative z-10 cursor-pointer">
            <Card
              image="./Greece City.jpg"
              text="Enjoy The Beauty Place In Greece City"
            />
            <Card
              image="./Maldive Beach.jpg"
              text="Enjoy The Beauty Place In Maldive Beach"
            />
            <Card
              image="./Bhutan City2.jpg"
              text="Enjoy The Beauty Place In Bhutan City"
            />
            <Card
              image="./Paris City2.jpg"
              text="Enjoy The Beauty Place In Paris City"
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-[1400px] mx-auto">
          <span className="flex flex-col items-center">
            <p className="text-primary font-bold capitalize tracking-[0.15em]">
              Our Gallery
            </p>
            <h2 className="text-4xl text-center font-bold capitalize my-4">
              Best Travel Share A Photo
            </h2>
          </span>
        </div>
        <div
          className="overflow-auto my-0 mx-auto flex rounded-2xl py-12 images cursor-pointer"
          ref={containerRef}>
          {images.map((image, id) => (
            <img key={id} src={image} alt="" width={300} height={300} className="flex-none w-[270px] rounded-2xl mr-8 "/>
          ))}
        </div>
      </section>
    </div>
  );
}
