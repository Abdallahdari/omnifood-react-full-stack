function Navber() {
  function Pervet(e) {
    e.preventDefault();
  }
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex items-center justify-between">
        <a href="" onClick={Pervet}>
          {" "}
          <img src="image/omnifood-logo.png" alt="logo" className="w-44" />
        </a>
        <ul className="flex items-center gap-12">
          <li>
            <a
              href="#"
              className="hover:text-orange-500 transition duration-100 uppercase "
            >
              Home
            </a>{" "}
          </li>

          <li>
            {" "}
            <a
              href="#"
              className="hover:text-orange-500 transition duration-100 uppercase "
            >
              About
            </a>
          </li>
          <li>
            {" "}
            <a
              href="#"
              className="hover:text-orange-500 transition duration-100 uppercase "
            >
              Pricing
            </a>
          </li>
          <button className="px-4 py-2 bg-orange-500 rounded-md hover:bg-orange-300 transition duration-100">
            Try for Free
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navber;
