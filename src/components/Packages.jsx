import { HiStar } from "react-icons/hi";

export default function Packages() {
  const Card = ({ image, text }) => {
    return (
      <div>
        <div className="overflow-hidden my-0 mx-auto rounded-2xl">
          <img
            src={image}
            alt=""
            className="rounded-2xl w-[300px] h-[300px] hoverImg"
          />
        </div>
        <h5 className="text-2xl font-semibold py-4">{text}</h5>
        <span className="flex items-center justify-between">
          <div className="bg-white text-gray shadow rounded-sm w-16 p-2 flex items-center gap-1">
            <HiStar className="text-orange" /> 4.8
          </div>
          <p>(2.5k Review)</p>
          <div className="bg-primary text-white text-lg text-center w-20 p-1 rounded-md transition-bg hover:bg-white hover:text-primary">
            $1200
          </div>
        </span>
      </div>
    );
  };

  return (
    <div>
      <div className="bg-lightGray my-16 py-16 relative">
        <div className="max-w-[1300px] mx-auto px-3">
          <span className="flex flex-col items-center">
            <p className="text-primary font-bold capitaliza tracking-[0.15em]">
              Populer Packages
            </p>
            <h2 className="text-4xl text-center font-bold capitiliza my-4">
              Checkout our packages
            </h2>
          </span>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-12 relative z-10 cursor-pointer">
            <Card
              image="/public/Grece City.jpg"
              text="Enjoy The Beauty Place In Grece City"
            />
            <Card
              image="/public/Maldives beach.jpg"
              text="Enjoy The Beauty Place In Maldives beach"
            />
            <Card
              image="/public/Bhutan City.jpg"
              text="Enjoy The Beauty Place In Bhutan City"
            />
            <Card
              image="/public/Paris City.jpg"
              text="Enjoy The Beauty Place In Paris City"
            />
          </div>
        </div>
        <img
          src="/public/aa.png"
          alt=""
          width={100}
          height={100}
          className="lg:block hidden absolute -top-12 left-0"
        />
        {/* <img
          src="/public/swimming.png"
          alt=""
          width={150}
          height={150}
          className="lg:block hidden absolute -bottom- left-0"
        /> */}
        <img
          src="/public/surf.png"
          alt=""
          width={300}
          height={300}
          className="lg:block hidden absolute -top-10 right-0"
        />
      </div>
      <section className="max-w-[1100px] mx-auto relative px-3 py-12">
        <div className="xl:text-[20rem] lg:text-[20rem] leading[.5] -mt-5 absolute left-0 w-full h-full text-center z-[1] text-gray font-semibold opacity-10">
          Travel
        </div>
        <div>
          <span className="flex flex-col items-center">
            <p className="text-primary font-bold capitalize tracking-[0.15em]">
              Inventore Veriatis
            </p>
            <h2 className="text-4xl text-center font-bold capitalize my-4">
              Select Offers For Traveling
            </h2>
          </span>
        </div>
        <div className="flex lg:flex-row flex-col gap-y-8 items-center justify-between my-12">
          <span className="flex flex-col items-center">
            <img src="/public/big-ben.png" alt="" width={100} height={100} />
            <p>Different Coutries</p>
          </span>
          <span className="flex flex-col items-center">
            <img src="/public/bus.png" alt="" width={100} height={100} />
            <p>Bus Tours</p>
          </span>
          <span className="flex flex-col items-center">
            <img src="/public/food.png" alt="" width={145} height={145} />
            <p>Food Tours</p>
          </span>
          <span className="flex flex-col items-center">
            <img src="/public/sunrise.png" alt="" width={100} height={100} />
            <p>Summer Rest</p>
          </span>
          <span className="flex flex-col items-center">
            <img src="/public/boat.png" alt="" width={100} height={100} />
            <p>Ship Cruises</p>
          </span>
          <span className="flex flex-col items-center pt-5">
            <img src="/public/mountain.png" alt="" width={120} height={100} />
            <p>Mountain Tours</p>
          </span>
        </div>
      </section>
    </div>
  );
}
