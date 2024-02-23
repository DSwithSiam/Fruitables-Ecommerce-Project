import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";

export function Footer() {
  return (
    <>
      <div className="bg-[#002A32] py-10">
        <div className="w-10/12 mx-auto">
          <div className="flex flex-col gap-2 md:flex-row flex-wrap items-center justify-between">
            <div className="mb-4">
              <h2 className="text-5xl text-rose-600">FruitAbles</h2>
              <p className="text-orange-400">Fresh products</p>
            </div>
            <div>
              <label className="bg-white lg:rounded-full overflow-hidden ">
                <input
                  className="border-0 w-auto p-3"
                  type="email"
                  placeholder="Your Email"
                />
                <button className="px-3 w-full lg:w-auto lg:rounded-full bg-red-600 py-3 text-white font-semibold">
                  Subscribe Now
                </button>
              </label>
            </div>
            <div className="flex gap-2 items-center mt-4 sm:mt-0">
              <Link target="_blank" to={"https://github.com/DSwithSiam"}>
                <FaGithub className="border-2 cursor-pointer hover:text-rose-600 p-2 text-5xl rounded-full text-gray-50" />
              </Link>
              <Link target="_blank" to={"https://www.facebook.com/DSwithSiam"}>
                <FaFacebook className="border-2 cursor-pointer hover:text-rose-600 p-2 text-5xl rounded-full text-gray-50" />
              </Link>
              <Link
                target="_blank"
                to={"https://www.linkedin.com/in/dswithsiam/"}
              >
                <FaLinkedin className="border-2 cursor-pointer hover:text-rose-600 p-2 text-5xl rounded-full text-gray-50" />
              </Link>
              <Link
                target="_blank"
                to={"https://www.youtube.com/channel/UCsBfRBeee13hzWW3uZP_EjA"}
              >
                <FaYoutube className="border-2 cursor-pointer hover:text-rose-600 p-2 text-5xl rounded-full text-gray-50" />
              </Link>
            </div>
          </div>
          <hr className="my-3 bg-rose-500" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div className="">
              <h2 className="text-xl font-semibold mb-3 text-white">
                Why People Like us!
              </h2>
              <p className="text-gray-400">
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the like Aldus PageMaker including of Lorem
                Ipsum.
              </p>
              <button className="border-2 py-2 px-3 mt-2 border-rose-500 text-white rounded-full">
                Read More
              </button>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                Shop Info
              </h2>
              <ul>
                <Link to={"/"} className="block mt-1 text-gray-300">
                  Home
                </Link>
                <Link to={"/about"} className="block mt-1 text-gray-300">
                  About
                </Link>
                <Link to={"/contact"} className="block mt-1 text-gray-300">
                  Contact
                </Link>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">Contact</h2>
              <div>
                <h2 className="block mt-1 text-gray-300">
                  Address: Dhaka , Bangladesh
                </h2>
                <Link className="block mt-1 text-gray-300">
                  Email: info@fruitables.com
                </Link>
                <Link className="block mt-1 text-gray-300">
                  Phone: +88 01751379009
                </Link>
                <Link className="block mt-1 text-gray-300">
                  Payment Accepted
                </Link>
                <img
                  className="mt-4"
                  src="https://themewagon.github.io/fruitables/img/payment.png"
                  alt=""
                />
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                className="w-full"
                src="https://i.ibb.co/zhDG79t/Screenshot-2024-02-24-003856-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
