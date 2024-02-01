import { FaCarSide } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { IoCallSharp } from "react-icons/io5";
import { Tabs } from "flowbite-react";
import { FaStar } from "react-icons/fa";

// import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import {Swiper ,SwiperSlide} from "swiper";

export function HomePage() {
  return (
    <>
      <div className="w-10/12 mx-auto">
        {/* hero section  */}
        <div className=" grid grid-cols-2 my-20">
          <div>
            <h3 className="text-rose-600 font-semibold text-xl ">
              100% Organic Foods
            </h3>
            <h2 className="my-4 text-6xl leading-snug font-semibold">
              Organic Veggies & Fruits Foods
            </h2>
            <label className="border-2 border-rose-600 overflow-hidden rounded-full">
              <input
                className="border-0 outline-none focus:border-0"
                type="text"
                placeholder="Search..."
              />
              <button className="py-2 px-3 text-white font-semibold bg-rose-600 h-full">
                Search
              </button>
            </label>
          </div>
          <div>
            <img
              src="https://themewagon.github.io/fruitables/img/hero-img-1.png"
              alt=""
            />
          </div>
        </div>

        {/* services home page  */}
        <div className="my-32">
          <div className="flex justify-between flex-wrap">
            <div>
              <div className="bg-rose-500 mx-auto w-20 h-20 flex justify-center items-center rounded-full relative">
                <FaCarSide className="text-5xl rounded-full text-white" />
                <span className="h-5 w-5 bg-rose-500 block absolute -bottom-2 rotate-45"></span>
              </div>
              <h3 className="text-2xl text-gray-600 my-1 mt-4 font-semibold">
                Free Shipping
              </h3>
              <p className="text-gray-400">Free on order over $300</p>
            </div>

            <div>
              <div className="bg-rose-500 mx-auto w-20 h-20 flex justify-center items-center rounded-full relative">
                <FaUserShield className="text-5xl rounded-full text-white" />
                <span className="h-5 w-5 bg-rose-500 block absolute -bottom-2 rotate-45"></span>
              </div>
              <h3 className="text-2xl text-gray-600 my-1 mt-4 font-semibold">
                Free Shipping
              </h3>
              <p className="text-gray-400">Free on order over $300</p>
            </div>
            <div>
              <div className="bg-rose-500 mx-auto w-20 h-20 flex justify-center items-center rounded-full relative">
                <GrTransaction className="text-5xl rounded-full text-white" />
                <span className="h-5 w-5 bg-rose-500 block absolute -bottom-2 rotate-45"></span>
              </div>
              <h3 className="text-2xl text-gray-600 my-1 mt-4 font-semibold">
                Free Shipping
              </h3>
              <p className="text-gray-400">Free on order over $300</p>
            </div>
            <div>
              <div className="bg-rose-500 mx-auto w-20 h-20 flex justify-center items-center rounded-full relative">
                <IoCallSharp className="text-5xl rounded-full text-white" />
                <span className="h-5 w-5 bg-rose-500 block absolute -bottom-2 rotate-45"></span>
              </div>
              <h3 className="text-2xl text-gray-600 my-1 mt-4 font-semibold">
                Free Shipping
              </h3>
              <p className="text-gray-400">Free on order over $300</p>
            </div>
          </div>
        </div>

        {/* category Prorducts  */}
        <div className="my-20">
          <Tabs aria-label="Default tabs">
            <Tabs.Item active title="All Products">
              <div className="grid grid-cols-4 gap-y-4 gap-x-2">
                <div className="border-2 border-rose-600 rounded-md overflow-hidden">
                  <img
                    src="https://themewagon.github.io/fruitables/img/fruite-item-5.jpg"
                    alt=""
                  />
                  <div className="p-3">
                    <h2 className="text-center text-2xl font-semibold">
                      Grapes
                    </h2>
                    <p className="text-center my-2 text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <h3 className="text-xl font-semibold">$4.99 / kg</h3>
                    <button className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="border-2 border-rose-600 rounded-md overflow-hidden">
                  <img
                    src="https://themewagon.github.io/fruitables/img/fruite-item-5.jpg"
                    alt=""
                  />
                  <div className="p-3">
                    <h2 className="text-center text-2xl font-semibold">
                      Grapes
                    </h2>
                    <p className="text-center my-2 text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <h3 className="text-xl font-semibold">$4.99 / kg</h3>
                    <button className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2">
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div className="border-2 border-rose-600 rounded-md overflow-hidden">
                  <img
                    src="https://themewagon.github.io/fruitables/img/fruite-item-5.jpg"
                    alt=""
                  />
                  <div className="p-3">
                    <h2 className="text-center text-2xl font-semibold">
                      Grapes
                    </h2>
                    <p className="text-center my-2 text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <h3 className="text-xl font-semibold">$4.99 / kg</h3>
                    <button className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2">
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div className="border-2 border-rose-600 rounded-md overflow-hidden">
                  <img
                    src="https://themewagon.github.io/fruitables/img/fruite-item-5.jpg"
                    alt=""
                  />
                  <div className="p-3">
                    <h2 className="text-center text-2xl font-semibold">
                      Grapes
                    </h2>
                    <p className="text-center my-2 text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <h3 className="text-xl font-semibold">$4.99 / kg</h3>
                    <button className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2">
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div className="border-2 border-rose-600 rounded-md overflow-hidden">
                  <img
                    src="https://themewagon.github.io/fruitables/img/fruite-item-5.jpg"
                    alt=""
                  />
                  <div className="p-3">
                    <h2 className="text-center text-2xl font-semibold">
                      Grapes
                    </h2>
                    <p className="text-center my-2 text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <h3 className="text-xl font-semibold">$4.99 / kg</h3>
                    <button className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2">
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div className="border-2 border-rose-600 rounded-md overflow-hidden">
                  <img
                    src="https://themewagon.github.io/fruitables/img/fruite-item-5.jpg"
                    alt=""
                  />
                  <div className="p-3">
                    <h2 className="text-center text-2xl font-semibold">
                      Grapes
                    </h2>
                    <p className="text-center my-2 text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <h3 className="text-xl font-semibold">$4.99 / kg</h3>
                    <button className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Tabs.Item>

            <Tabs.Item title="Vegetables">
              <div className="grid grid-cols-4 gap-y-4 gap-x-2">
                <div className="border-2 border-rose-600 rounded-md overflow-hidden">
                  <img
                    src="https://themewagon.github.io/fruitables/img/fruite-item-5.jpg"
                    alt=""
                  />
                  <div className="p-3">
                    <h2 className="text-center text-2xl font-semibold">
                      Grapes
                    </h2>
                    <p className="text-center my-2 text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <h3 className="text-xl font-semibold">$4.99 / kg</h3>
                    <button className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2">
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div className="border-2 border-rose-600 rounded-md overflow-hidden">
                  <img
                    src="https://themewagon.github.io/fruitables/img/fruite-item-5.jpg"
                    alt=""
                  />
                  <div className="p-3">
                    <h2 className="text-center text-2xl font-semibold">
                      Grapes
                    </h2>
                    <p className="text-center my-2 text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <h3 className="text-xl font-semibold">$4.99 / kg</h3>
                    <button className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Tabs.Item>

            <Tabs.Item title="Fruits">
              <div className="grid grid-cols-4 gap-y-4 gap-x-2">
                <div className="border-2 border-rose-600 rounded-md overflow-hidden">
                  <img
                    src="https://themewagon.github.io/fruitables/img/fruite-item-5.jpg"
                    alt=""
                  />
                  <div className="p-3">
                    <h2 className="text-center text-2xl font-semibold">
                      Grapes
                    </h2>
                    <p className="text-center my-2 text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <h3 className="text-xl font-semibold">$4.99 / kg</h3>
                    <button className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2">
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div className="border-2 border-rose-600 rounded-md overflow-hidden">
                  <img
                    src="https://themewagon.github.io/fruitables/img/fruite-item-5.jpg"
                    alt=""
                  />
                  <div className="p-3">
                    <h2 className="text-center text-2xl font-semibold">
                      Grapes
                    </h2>
                    <p className="text-center my-2 text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <h3 className="text-xl font-semibold">$4.99 / kg</h3>
                    <button className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="border-2 border-rose-600 rounded-md overflow-hidden">
                  <img
                    src="https://themewagon.github.io/fruitables/img/fruite-item-5.jpg"
                    alt=""
                  />
                  <div className="p-3">
                    <h2 className="text-center text-2xl font-semibold">
                      Grapes
                    </h2>
                    <p className="text-center my-2 text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <h3 className="text-xl font-semibold">$4.99 / kg</h3>
                    <button className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Tabs.Item>

            <Tabs.Item title="Bread">
              <div className="grid grid-cols-4 gap-y-4 gap-x-2">
                <div className="border-2 border-rose-600 rounded-md overflow-hidden">
                  <img
                    src="https://themewagon.github.io/fruitables/img/fruite-item-5.jpg"
                    alt=""
                  />
                  <div className="p-3">
                    <h2 className="text-center text-2xl font-semibold">
                      Grapes
                    </h2>
                    <p className="text-center my-2 text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <h3 className="text-xl font-semibold">$4.99 / kg</h3>
                    <button className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2">
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div className="border-2 border-rose-600 rounded-md overflow-hidden">
                  <img
                    src="https://themewagon.github.io/fruitables/img/fruite-item-5.jpg"
                    alt=""
                  />
                  <div className="p-3">
                    <h2 className="text-center text-2xl font-semibold">
                      Grapes
                    </h2>
                    <p className="text-center my-2 text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <h3 className="text-xl font-semibold">$4.99 / kg</h3>
                    <button className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Tabs.Item>

            <Tabs.Item title="Meat">
              <div className="grid grid-cols-4 gap-y-4 gap-x-2">
                <div className="border-2 border-rose-600 rounded-md overflow-hidden">
                  <img
                    src="https://themewagon.github.io/fruitables/img/fruite-item-5.jpg"
                    alt=""
                  />
                  <div className="p-3">
                    <h2 className="text-center text-2xl font-semibold">
                      Grapes
                    </h2>
                    <p className="text-center my-2 text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <h3 className="text-xl font-semibold">$4.99 / kg</h3>
                    <button className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2">
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div className="border-2 border-rose-600 rounded-md overflow-hidden">
                  <img
                    src="https://themewagon.github.io/fruitables/img/fruite-item-5.jpg"
                    alt=""
                  />
                  <div className="p-3">
                    <h2 className="text-center text-2xl font-semibold">
                      Grapes
                    </h2>
                    <p className="text-center my-2 text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <h3 className="text-xl font-semibold">$4.99 / kg</h3>
                    <button className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="border-2 border-rose-600 rounded-md overflow-hidden">
                  <img
                    src="https://themewagon.github.io/fruitables/img/fruite-item-5.jpg"
                    alt=""
                  />
                  <div className="p-3">
                    <h2 className="text-center text-2xl font-semibold">
                      Grapes
                    </h2>
                    <p className="text-center my-2 text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <h3 className="text-xl font-semibold">$4.99 / kg</h3>
                    <button className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Tabs.Item>
          </Tabs>
        </div>

        {/* food items  */}
        <div className="my-32 grid grid-cols-3 gap-3">
          <div className="border-2 border-rose-600 rounded relative">
            <img
              src="https://themewagon.github.io/fruitables/img/featur-1.jpg"
              alt=""
            />
            <div className="absolute -bottom-10 left-14 w-8/12 h-24 flex items-center px-2 rounded-md justify-center bg-red-600">
              <div>
                <h2 className="text-white">Fresh Apples</h2>
                <h3 className="text-white font-bold text-2xl text-center">
                  20% OFF
                </h3>
              </div>
            </div>
          </div>
          <div className="border-2 border-rose-600 rounded relative">
            <img
              src="https://themewagon.github.io/fruitables/img/featur-3.jpg"
              alt=""
            />
            <div className="absolute -bottom-10 left-14 w-8/12 h-24 flex items-center px-2 rounded-md justify-center bg-blue-600">
              <div>
                <h2 className="text-white">Fresh Apples</h2>
                <h3 className="text-white font-bold text-2xl text-center">
                  20% OFF
                </h3>
              </div>
            </div>
          </div>
          <div className="border-2 border-rose-600 rounded relative">
            <img
              src="https://themewagon.github.io/fruitables/img/featur-2.jpg"
              alt=""
            />
            <div className="absolute -bottom-10 left-14 w-8/12 h-24 flex items-center px-2 rounded-md justify-center bg-green-600">
              <div>
                <h2 className="text-white">Fresh Apples</h2>
                <h3 className="text-white font-bold text-2xl text-center">
                  20% OFF
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="my-20">
          <div className="w-6/12 mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-2">Bestseller Products</h2>
            <p>
              Latin words, combined with a handful of model sentence structures,
              to generate Lorem Ipsum which looks reasonable.
            </p>
          </div>

          <div className="my-10 grid grid-cols-4 gap-3">
            <div>
              <img
                className="rounded-lg mb-4"
                src="https://themewagon.github.io/fruitables/img/fruite-item-1.jpg"
                alt=""
              />
              <h2 className="text-center my-2 text-xl font-semibold">
                Organic Tomato
              </h2>
              <div className="flex justify-center">
                <FaStar className="text-orange-500 text-xl" />
                <FaStar className="text-orange-500 text-xl" />
                <FaStar className="text-orange-500 text-xl" />
                <FaStar className="text-orange-500 text-xl" />
                <FaStar className="text-gray-500 text-xl" />
              </div>
              <h3 className="text-center my-2 text-xl font-semibold">3.12 $</h3>
              <button className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2 block w-32 mx-auto">
                Add to Cart
              </button>
            </div>
            <div>
              <img
                className="rounded-lg mb-4"
                src="https://themewagon.github.io/fruitables/img/fruite-item-2.jpg"
                alt=""
              />
              <h2 className="text-center my-2 text-xl font-semibold">
                Organic Tomato
              </h2>
              <div className="flex justify-center">
                <FaStar className="text-orange-500 text-xl" />
                <FaStar className="text-orange-500 text-xl" />
                <FaStar className="text-orange-500 text-xl" />
                <FaStar className="text-orange-500 text-xl" />
                <FaStar className="text-gray-500 text-xl" />
              </div>
              <h3 className="text-center my-2 text-xl font-semibold">3.12 $</h3>
              <button className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2 block w-32 mx-auto">
                Add to Cart
              </button>
            </div>
            <div>
              <img
                className="rounded-lg mb-4"
                src="https://themewagon.github.io/fruitables/img/fruite-item-3.jpg"
                alt=""
              />
              <h2 className="text-center my-2 text-xl font-semibold">
                Organic Tomato
              </h2>
              <div className="flex justify-center">
                <FaStar className="text-orange-500 text-xl" />
                <FaStar className="text-orange-500 text-xl" />
                <FaStar className="text-orange-500 text-xl" />
                <FaStar className="text-orange-500 text-xl" />
                <FaStar className="text-gray-500 text-xl" />
              </div>
              <h3 className="text-center my-2 text-xl font-semibold">3.12 $</h3>
              <button className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2 block w-32 mx-auto">
                Add to Cart
              </button>
            </div>
            <div>
              <img
                className="rounded-lg mb-4"
                src="https://themewagon.github.io/fruitables/img/fruite-item-4.jpg"
                alt=""
              />
              <h2 className="text-center my-2 text-xl font-semibold">
                Organic Tomato
              </h2>
              <div className="flex justify-center">
                <FaStar className="text-orange-500 text-xl" />
                <FaStar className="text-orange-500 text-xl" />
                <FaStar className="text-orange-500 text-xl" />
                <FaStar className="text-orange-500 text-xl" />
                <FaStar className="text-gray-500 text-xl" />
              </div>
              <h3 className="text-center my-2 text-xl font-semibold">3.12 $</h3>
              <button className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2 block w-32 mx-auto">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

    
      </div>
    </>
  );
}
