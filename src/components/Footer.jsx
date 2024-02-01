import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";



export function Footer() {
  return (
    <>
      <div className="bg-[#45595b] py-10">
        <div className="w-10/12 mx-auto">
          <div className="flex justify-between">
            <div>
              <h2 className="text-5xl text-rose-600">E-shop</h2>
              <p className="text-orange-400">Fresh products</p>
            </div>
            <div>
              <label className="bg-white rounded-full overflow-hidden">
                <input className="border-0 p-3"  type="email" placeholder="Your Email" />
                <button className="px-3 rounded-full bg-red-600 py-3 text-white font-semibold">Subscribe Now</button>
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <FaTwitter className="border-2 p-2 text-5xl rounded-full border-rose-600 text-orange-500" />
              <FaFacebook className="border-2 p-2 text-5xl rounded-full border-rose-600 text-orange-500" />
              <FaYoutube className="border-2 p-2 text-5xl rounded-full border-rose-600 text-orange-500" />
              <FaLinkedin className="border-2 p-2 text-5xl rounded-full border-rose-600 text-orange-500" />
            </div>
          </div>
          <hr className="my-3 bg-rose-500"/>
          <div className="grid grid-cols-4 gap-5">
                <div>
                    <h2 className="text-xl font-semibold mb-3 text-white">Why People Like us!</h2>
                    <p className="text-gray-400">typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                    <button className="border-2 py-2 px-3 mt-2 border-rose-500 text-rose-600 rounded-full">Read More</button>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-3 text-white">Shop Info</h2>
                    <ul>
                       <Link className="block mt-1 text-gray-300">About</Link>
                       <Link className="block mt-1 text-gray-300">About</Link>
                       <Link className="block mt-1 text-gray-300">About</Link>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-3 text-white">Shop Info</h2>
                    <ul>
                       <Link className="block mt-1 text-gray-300">About</Link>
                       <Link className="block mt-1 text-gray-300">About</Link>
                       <Link className="block mt-1 text-gray-300">About</Link>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-3 text-white">Contact</h2>
                    <div>
                        <h2 className="block mt-1 text-gray-300">Address: 1429 Netus Rd, NY 48247</h2>
                        <Link className="block mt-1 text-gray-300">Email: Example@gmail.com</Link>
                        <Link className="block mt-1 text-gray-300">Phone: +0123 4567 8910</Link>
                        <Link className="block mt-1 text-gray-300">Payment Accepted</Link>
                        <img className="mt-4" src="https://themewagon.github.io/fruitables/img/payment.png" alt="" />
                    </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}
