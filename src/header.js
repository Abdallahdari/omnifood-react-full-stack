function Header() {
  return (
    <div className="container mx-auto xl:max-w-[1200px]">
      <div className="grid grid-cols-2 gap-4 mt-14">
        <div className="text-part self-center">
          <h1 className="text-6xl font-semibold mb-10">
            A healthy meal <br></br> delivered to your door ,<br></br> every
            single days
          </h1>
          <p className=" my-5 text-xl">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <div className="flex items-center gap-4 mt-5">
            <button className="px-4 py-2 bg-blue-500">
              start eating well{" "}
            </button>
            <button>learn more</button>
          </div>
          <div className="flex items-center gap-5 mt-10">
            <div className="flex items-center">
              <img
                src="image\ben.jpg"
                className="w-14 rounded-full border-4 border-white "
              ></img>
              <img
                src="image\customer-1.jpg"
                className="w-14 rounded-full border-4 border-white -ml-3"
              ></img>
              <img
                src="image\customer-2.jpg"
                className="w-14 rounded-full border-4 border-white -ml-3"
              ></img>
              <img
                src="image\ben.jpg"
                className="w-14 rounded-full border-4 border-white -ml-3"
              ></img>
            </div>
            <h1 className="text-xl font-semibold text-orange-500">
              250,000+ meals delivered last year!
            </h1>
          </div>
        </div>
        <img src="image\hero.png" alt="hero imagae" />
      </div>
    </div>
  );
}

export default Header;
