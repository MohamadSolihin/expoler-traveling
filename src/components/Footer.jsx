import {
  FaBehance,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaLocationPin,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <div className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 px-3">
          <div>
            <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              Explore
            </span>
            <p className="text-gray py-4 text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ad
              optio id incidunt repellendus beatae repellat magni ipsum omnis
              amet?
            </p>
            <h5 className="font-semibold text-2xl py-4">Fallow us on:</h5>
            <span className="flex items-center gap-4">
              <FaFacebookF
                size={20}
                className="hover:text-primary cursor-pointer"
              />
              <FaBehance
                size={20}
                className="hover:text-primary cursor-pointer"
              />
              <FaInstagram
                size={20}
                className="hover:text-primary cursor-pointer"
              />
              <FaWhatsapp
                size={20}
                className="hover:text-primary cursor-pointer"
              />
              <FaLinkedinIn
                size={20}
                className="hover:text-primary cursor-pointer"
              />
            </span>
          </div>
          <div>
            <h5 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              Tour Type
            </h5>
            <ul className="pt-2">
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Advanuture Tours
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Group Tours
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Seasonal Tours
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Relaxation Tours
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Family Firendly Tours
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              Contact Info
            </h5>
            <ul className="pt-2">
              <span className="text-gray flex items-center pb-2 gap-2 lg:w-4/5">
                <FaPhone size={30} />
                <li className="leading-8 ms-1">
                  62+ 8888-9999-0000 62+ 6666-5555-2222
                </li>
              </span>
              <span className="text-gray flex items-center pb-2 gap-2 lg:w-4/5">
                <FaClock size={30} />
                <li className="leading-8 ms-1">
                  Mon-Fri 09:00-18.00 (except public holiday)
                </li>
              </span>
              <span className="text-gray flex items-center pb-2 gap-2 lg:w-4/5">
                <FaLocationPin size={25} />
                <li className="leading-8 ms-1">
                  25/2 Vokte Street Buildind Melbron City
                </li>
              </span>
            </ul>
          </div>
          <div>
            <span>
              <h5 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                Gallery
              </h5>
              <div className="grid grid-cols-3 gap-2 pt-4 cursor-pointer">
                <div className="overflow-hidden my-0 mx-auto rounded-lg w-full">
                  <img
                    src="./Bhutan City.jpg"
                    alt=""
                    className="rounded-lg w-[90px] h-[90px] box-border hoverImg"
                  />
                </div>{" "}
                <div className="overflow-hidden my-0 mx-auto rounded-lg w-full">
                  <img
                    src="./Grece City.jpg"
                    alt=""
                    className="rounded-lg w-[90px] h-[90px] box-border hoverImg"
                  />
                </div>{" "}
                <div className="overflow-hidden my-0 mx-auto rounded-lg w-full">
                  <img
                    src="./Maldive Beach.jpg"
                    alt=""
                    className="rounded-lg w-[90px] h-[90px] box-border hoverImg"
                  />
                </div>{" "}
                <div className="overflow-hidden my-0 mx-auto rounded-lg w-full">
                  <img
                    src="./Paris City.jpg"
                    alt=""
                    className="rounded-lg w-[90px] h-[90px] box-border hoverImg"
                  />
                </div>{" "}
                <div className="overflow-hidden my-0 mx-auto rounded-lg w-full">
                  <img
                    src="./paris.jpg"
                    alt=""
                    className="rounded-lg w-[90px] h-[90px] box-border hoverImg"
                  />
                </div>{" "}
                <div className="overflow-hidden my-0 mx-auto rounded-lg w-full">
                  <img
                    src="./japan.jpg"
                    alt=""
                    className="rounded-lg w-[90px] h-[90px] box-border hoverImg"
                  />
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-lightGray py-10 flex items-center justify-center">
        <p className="px-3">
          @ Copyright 2024. All Rights Reserved by M.solihin
        </p>
      </div>
    </footer>
  );
}
