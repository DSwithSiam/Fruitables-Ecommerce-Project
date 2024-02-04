import { CiSearch } from "react-icons/ci";
import { Label, Radio } from "flowbite-react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export function Shop() {
  const [alldata, setAlldata] = useState([]);

  useEffect(() => {
    fetch("https://fruitables-api.onrender.com/product/list/")
      .then((res) => res.json())
      .then((data) => setAlldata(data));
  }, []);

  const handleFiltaring = async (id) => {
    // Fetch data from the API
    const response = await fetch("https://fruitables-api.onrender.com/product/list/");
    const data = await response.json();
  
    // Filter the data based on the provided id
    const filteredData = data.filter((d) => d.title.toLowerCase().includes(id));
  
    // Update the state with the filtered data
    setAlldata(filteredData);
  };



  const handleSearch = async (e) => {
    const response = await fetch("https://fruitables-api.onrender.com/product/list/");
    const data = await response.json();

    if(e.target.value == ''){
       return setAlldata(data)
    }

    // Capture the value of the input field
    const searchTerm = e.target.value.toLowerCase();
  
    // Filter alldata based on the search term
    const filteredData = alldata.filter(item => item.title.toLowerCase().includes(searchTerm));
  
    // Update the state with the filtered data
    setAlldata(filteredData);
  
    console.log(e);
  };
  


  const handleaddtocart = () => {
    toast.success(" Add to cart Successfully !");
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-[url('https://themewagon.github.io/fruitables/img/cart-page-header-img.jpg')] bg-cover">
        <div className="p-5 w-2/12 mx-auto text-center">
          <h2 className="text-3xl text-white font-semibold">Shop</h2>
          <p className="text-white mt-2">
            <span className="text-rose-500">Home</span> / Shop
          </p>
        </div>
      </div>

      <div className="w-10/12 mx-auto py-20">
        <div>
          <h2 className="text-3xl mb-3 font-semibold">Fresh fruits shop</h2>
          <div className="flex justify-between items-center">
            <form onChange={handleSearch}  className="border-2 flex rounded-md overflow-hidden" htmlFor="">
              <input className="border-0 py-2" type="text" placeholder="Keywords" />
              <button className="px-3 bg-gray-300 h-full py-3">
                <CiSearch className="text-xl" />
              </button>
            </form>
            <div className="flex items-center gap-2 bg-gray-200 py-1 px-3 rounded-md">
              <p>Default Sorting:</p>
              <select className="border-0 rounded-full" name="" id="">
                <option value="nothing">Nothing</option>
                <option value="nothing">Popularity</option>
                <option value="nothing">Organic</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 my-10">
          <div className="col-span-1">
            <div>
              <h2 className="text-2xl mb-3">Categories</h2>
              <ul>
                <li
                  onClick={() => handleFiltaring("banana")}
                  className="my-3 cursor-pointer text-rose-600 underline flex justify-between"
                >
                  Banana <span className="text-gray-500"></span>
                </li>
                <li
                  onClick={() => handleFiltaring("apricots")}
                  className="my-3 cursor-pointer text-rose-600 underline flex justify-between"
                >
                  Apples <span className="text-gray-500"></span>
                </li>
                <li
                  onClick={() => handleFiltaring("oranges")}
                  className="my-3 cursor-pointer text-rose-600 underline flex justify-between"
                >
                  Oranges <span className="text-gray-500"></span>
                </li>
                <li
                  onClick={() => handleFiltaring("raspberries")}
                  className="my-3 cursor-pointer text-rose-600 underline flex justify-between"
                >
                  Raspberries <span className="text-gray-500"></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-y-4 gap-x-2">
              {alldata?.map((i) => (
                <div className="bg-gray-50 rounded-md overflow-hidden">
                  <img src={i.image} alt="" />
                  <div className="p-3">
                    <h2 className="text-center text-2xl font-semibold">
                      {i.title}
                    </h2>
                    <p className="text-center my-2 text-gray-400">
                      {i.description.slice(0, 80)}
                    </p>
                    <h3 className="text-xl font-semibold">${i.price} /kg</h3>
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
          </div>
        </div>
      </div>
    </>
  );
}
