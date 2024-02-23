import React, { useEffect, useState } from "react";
import { FaCarSide } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { IoCallSharp } from "react-icons/io5";
import { Tabs } from "flowbite-react";
import { FaStar } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export function HomePage() {
  const [alldata, setAlldata] = useState([]);

  useEffect(() => {
    fetch("https://fruitables-api.onrender.com/product/list/")
      .then((res) => res.json())
      .then((data) => setAlldata(data));
  }, []);
  // console.log(alldata);

  const [apple, setApple] = useState([]);

  useEffect(() => {
    fetch("https://fruitables-api.onrender.com/product/list/")
      .then((res) => res.json())
      .then((data) => setApple(data.filter((e) => e.title == "Oranges")));
  }, []);

  const [banana, setBanana] = useState([]);

  useEffect(() => {
    fetch("https://fruitables-api.onrender.com/product/list/")
      .then((res) => res.json())
      .then((data) =>
        setBanana(data.filter((e) => e.title.toLowerCase().includes("banana")))
      );
  }, []);

  const [apricots, setApricots] = useState([]);
  useEffect(() => {
    fetch("https://fruitables-api.onrender.com/product/list/")
      .then((res) => res.json())
      .then((data) =>
        setApricots(
          data.filter((e) => e.title.toLowerCase().includes("apricots"))
        )
      );
  }, []);

  const [raspberries, setRaspberries] = useState([]);
  useEffect(() => {
    fetch("https://fruitables-api.onrender.com/product/list/")
      .then((res) => res.json())
      .then((data) =>
        setRaspberries(
          data.filter((e) => e.title.toLowerCase().includes("raspberries"))
        )
      );
  }, []);

  const [rating, setRating] = useState([]);

  useEffect(() => {
    // Fetch both sets of data
    Promise.all([
      fetch("https://fruitables-api.onrender.com/product/rating/").then((res) =>
        res.json()
      ),
      fetch("https://fruitables-api.onrender.com/product/list/").then((res) =>
        res.json()
      ),
    ])
      .then(([ratingData, productListData]) => {
        // Use ratingData to filter productListData
        const filteredData = productListData.filter((item) =>
          ratingData.some((ratingItem) => ratingItem.product === item.id)
        );
        setRating(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    // Fetch rating data
    fetch("https://fruitables-api.onrender.com/product/rating")
      .then((res) => res.json())
      .then((data) => {
        // Set the fetched ratings data
        setRatings(data);
      })
      .catch((error) => {
        console.error("Error fetching rating data:", error);
      });
  }, []);

  // console.log(ratings);

  // Fetch alldata separately
  const [alldatas, setAlldatas] = useState([]);

  useEffect(() => {
    // Fetch alldata
    fetch("https://fruitables-api.onrender.com/product/list/")
      .then((res) => res.json())
      .then((data) => {
        // Set the fetched alldata
        setAlldatas(data);
      })
      .catch((error) => {
        console.error("Error fetching alldata:", error);
      });
  }, []);

  // Filter alldata based on ratings
  const filteredData = alldatas.filter((item) => {
    // Check if any rating matches the product id in alldata
    return ratings.some((ratingItem) => ratingItem.product === item.id);
  });

  // console.log(filteredData);

  const handleaddtocart = (id) => {
    // Retrieve the cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("product")) || [];

    // Check if the item is already in the cart
    const isItemInCart = cartItems.includes(id);

    if (isItemInCart) {
      toast.error("Item is already in the cart!");
      return; // No need to add the item again
    }
    // Add the new item to the cart
    cartItems.push(id);
    // Update the cart in localStorage
    localStorage.setItem("product", JSON.stringify(cartItems));

    toast.success("Item added to the cart successfully!");
  };

  return (
    <>
      <div className="w-10/12 mx-auto">
        <Toaster position="top-center" reverseOrder={false} />
        {/* hero section  */}
        <div className=" sm:grid grid-cols-2 my-20">
          <div>
            <h3 className="text-rose-600 font-semibold text-xl ">
              100% Organic Foods
            </h3>
            <h2 className="my-4 sm:text-6xl text-3xl leading-snug font-semibold">
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
            <div className="w-full bg-gray-100 p-4 rounded md:w-auto text-center mb-4 sm:mb-0">
              <div className="bg-rose-500 mx-auto w-20 h-20 flex justify-center items-center rounded-full relative">
                <FaCarSide className="text-5xl rounded-full text-white" />
                <span className="h-5 w-5 bg-rose-500 block absolute -bottom-2 rotate-45"></span>
              </div>
              <h3 className="text-2xl text-gray-600 my-1 mt-4 font-semibold">
                Free Shipping
              </h3>
              <p className="text-gray-400">Free on order over $300</p>
            </div>

            <div className="w-full bg-gray-100 p-4 rounded md:w-auto  text-center mb-4 sm:mb-0">
              <div className="bg-rose-500 mx-auto w-20 h-20 flex justify-center items-center rounded-full relative">
                <FaUserShield className="text-5xl rounded-full text-white" />
                <span className="h-5 w-5 bg-rose-500 block absolute -bottom-2 rotate-45"></span>
              </div>
              <h3 className="text-2xl text-gray-600 my-1 mt-4 font-semibold">
                Free Shipping
              </h3>
              <p className="text-gray-400">Free on order over $300</p>
            </div>
            <div className="w-full bg-gray-100 p-4 rounded md:w-auto  text-center mb-4 sm:mb-0">
              <div className="bg-rose-500 mx-auto w-20 h-20 flex justify-center items-center rounded-full relative">
                <GrTransaction className="text-5xl rounded-full text-white" />
                <span className="h-5 w-5 bg-rose-500 block absolute -bottom-2 rotate-45"></span>
              </div>
              <h3 className="text-2xl text-gray-600 my-1 mt-4 font-semibold">
                Free Shipping
              </h3>
              <p className="text-gray-400">Free on order over $300</p>
            </div>
            <div className="w-full bg-gray-100 p-4 rounded md:w-auto  text-center mb-4 sm:mb-0">
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
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2">
                {alldata?.map((i) => (
                  <div
                    key={i.id}
                    className="bg-gray-50 rounded-md overflow-hidden"
                  >
                    <img className="h-48 w-full" src={i.image} alt="" />
                    <div className="p-3">
                      <h2 className="text-center text-2xl font-semibold">
                        {i.title}
                      </h2>
                      <p className="text-center my-2 text-gray-400">
                        {i.description.slice(0, 80)}
                      </p>
                      <h3 className="text-xl font-semibold">${i.price} /kg</h3>
                      <button
                        onClick={() => handleaddtocart(i.id)}
                        className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Tabs.Item>

            <Tabs.Item title="Apple">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2">
                {apple?.map((i) => (
                  <div className="border-2 border-rose-600 rounded-md overflow-hidden">
                    <img className="h-48 w-full" src={i.image} alt="" />
                    <div className="p-3">
                      <h2 className="text-center text-2xl font-semibold">
                        {i.title}
                      </h2>
                      <p className="text-center my-2 text-gray-400">
                        {i.description.slice(0, 80)}
                      </p>
                      <h3 className="text-xl font-semibold">$4.99 / kg</h3>
                      <button
                        onClick={handleaddtocart}
                        className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Tabs.Item>

            <Tabs.Item title="Banana">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2">
                {banana?.map((i) => (
                  <div className="border-2 border-rose-600 rounded-md overflow-hidden">
                    <img className="h-48 w-full" src={i.image} alt="" />
                    <div className="p-3">
                      <h2 className="text-center text-2xl font-semibold">
                        {i.title}
                      </h2>
                      <p className="text-center my-2 text-gray-400">
                        {i.description.slice(0, 80)}
                      </p>
                      <h3 className="text-xl font-semibold">$4.99 / kg</h3>
                      <button
                        onClick={handleaddtocart}
                        className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Tabs.Item>

            <Tabs.Item title="Apricots">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2">
                {apricots?.map((i) => (
                  <div className="border-2 border-rose-600 rounded-md overflow-hidden">
                    <img className="h-48 w-full" src={i.image} alt="" />
                    <div className="p-3">
                      <h2 className="text-center text-2xl font-semibold">
                        {i.title}
                      </h2>
                      <p className="text-center my-2 text-gray-400">
                        {i.description.slice(0, 80)}
                      </p>
                      <h3 className="text-xl font-semibold">$4.99 / kg</h3>
                      <button
                        onClick={handleaddtocart}
                        className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Tabs.Item>

            <Tabs.Item title="Raspberries">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2">
                {apricots?.map((i) => (
                  <div className="border-2 border-rose-600 rounded-md overflow-hidden">
                    <img className="h-48 w-full" src={i.image} alt="" />
                    <div className="p-3">
                      <h2 className="text-center text-2xl font-semibold">
                        {i.title}
                      </h2>
                      <p className="text-center my-2 text-gray-400">
                        {i.description.slice(0, 80)}
                      </p>
                      <h3 className="text-xl font-semibold">$4.99 / kg</h3>
                      <button
                        onClick={handleaddtocart}
                        className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Tabs.Item>

            <Tabs.Item title="Raspberries">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2">
                {raspberries?.map((i) => (
                  <div className="border-2 border-rose-600 rounded-md overflow-hidden">
                    <img className="h-48 w-full" src={i.image} alt="" />
                    <div className="p-3">
                      <h2 className="text-center text-2xl font-semibold">
                        {i.title}
                      </h2>
                      <p className="text-center my-2 text-gray-400">
                        {i.description.slice(0, 80)}
                      </p>
                      <h3 className="text-xl font-semibold">$4.99 / kg</h3>
                      <button
                        onClick={handleaddtocart}
                        className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Tabs.Item>
          </Tabs>
        </div>

        {/* food items  */}
        <div className="my-32 grid md:grid-cols-3 gap-3">
          <div className="border-2 border-rose-600 rounded relative mb-10">
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
          <div className="border-2 border-rose-600 rounded relative mb-10">
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
          <div className="border-2 border-rose-600 rounded relative mb-10">
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
        </div>

        <div className="my-20">
          <div className="md:w-6/12 w-10/12 mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-2">Bestseller Products</h2>
            <p>
              Latin words, combined with a handful of model sentence structures,
              to generate Lorem Ipsum which looks reasonable.
            </p>
          </div>

          <div className="my-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {rating?.map((e) => (
              <div>
                <img className="rounded-lg mb-4" src={e.image} alt="" />
                <h2 className="text-center my-2 text-xl font-semibold">
                  {e.title}
                </h2>
                <div className="flex justify-center">
                  <FaStar className="text-orange-500 text-xl" />
                  <FaStar className="text-orange-500 text-xl" />
                  <FaStar className="text-orange-500 text-xl" />
                  <FaStar className="text-orange-500 text-xl" />
                  <FaStar className="text-gray-500 text-xl" />
                </div>
                <h3 className="text-center my-2 text-xl font-semibold">
                  {e.price}$
                </h3>
                <button
                  onClick={handleaddtocart}
                  className="border-2 border-rose-500 rounded-full px-2 py-1 mt-2 block w-32 mx-auto"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
