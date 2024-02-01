export function About() {
  return (
    <>
      <div className="w-10/12 mx-auto my-20 ">
        <div className="grid grid-cols-2 gap-4 my-20">
          <div>
            <h3 className="text-xl font-semibold text-rose-500">
              Why we are Best ?
            </h3>
            <p className="my-4 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              temporibus quibusdam consectetur at repellendus minus autem ad
              iste, animi quidem quae dignissimos aut adipisci dolor rem,
              reprehenderit qui sunt? Dolorum!
            </p>
            <button className="bg-rose-500 text-white p-2 rounded-full">
              Read More
            </button>
          </div>
          <div>
            <img
              src="../../public/png-transparent-fruit-graphy-honeydew-miscellaneous-natural-foods-food-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 my-20">
          <div>
            <img
              src="../../public/png-transparent-fruit-graphy-honeydew-miscellaneous-natural-foods-food-removebg-preview.png"
              alt=""
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-rose-500">
              Why our service is Best ?
            </h3>
            <p className="my-4 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              temporibus quibusdam consectetur at repellendus minus autem ad
              iste, animi quidem quae dignissimos aut adipisci dolor rem,
              reprehenderit qui sunt? Dolorum!
            </p>
            <button className="bg-rose-500 text-white p-2 rounded-full">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
