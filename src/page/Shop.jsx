import { CiSearch } from "react-icons/ci";
import { Label, Radio } from "flowbite-react";

export function Shop() {
  return (
    <>
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
            <label className="border-2  rounded-md overflow-hidden" htmlFor="">
              <input className="border-0" type="text" placeholder="Keywords" />
              <button className="px-3 bg-gray-300 h-full py-3">
                <CiSearch className="text-xl" />
              </button>
            </label>
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
                <li className="my-3 text-rose-600 flex justify-between">
                  Apples <span className="text-gray-500">(50)</span>
                </li>
                <li className="my-3 text-rose-600 flex justify-between">
                  Apples <span className="text-gray-500">(50)</span>
                </li>
                <li className="my-3 text-rose-600 flex justify-between">
                  Apples <span className="text-gray-500">(50)</span>
                </li>
                <li className="my-3 text-rose-600 flex justify-between">
                  Apples <span className="text-gray-500">(50)</span>
                </li>
              </ul>
            </div>
            <div className="my-5">
              <h2 className="text-2xl mb-3">Price</h2>
              <input type="range" name="" id="" />
            </div>
            <div className="my-5">
              <h2 className="text-2xl mb-3">Additional</h2>
              <fieldset className="flex max-w-md flex-col mt-3 gap-4">
                <div className="flex items-center gap-2">
                  <Radio
                    id="united-state"
                    name="countries"
                    value="USA"
                    defaultChecked
                  />
                  <Label htmlFor="united-state">United States</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="germany" name="countries" value="Germany" />
                  <Label htmlFor="germany">Germany</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="spain" name="countries" value="Spain" />
                  <Label htmlFor="spain">Spain</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="uk" name="countries" value="United Kingdom" />
                  <Label htmlFor="uk">United Kingdom</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="china" name="countries" value="China" disabled />
                  <Label htmlFor="china" disabled>
                    China (disabled)
                  </Label>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="col-span-3">
          <div className="grid grid-cols-3 gap-y-4 gap-x-2">
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
          </div>
        </div>
      </div>
    </>
  );
}
