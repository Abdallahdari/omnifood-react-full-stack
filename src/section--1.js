import React from "react";

function Meals({ photo, price, cont, Saving }) {
  function Handle(e) {
    e.preventDefault();
    const NewItem = {
      photo,
      price,
      content: cont,
    };
    Saving(NewItem);
  }

  return (
    <div className="container mx-auto xl:max-w-[1200px]">
      <div className="group border rounded-[30px] overflow-hidden my-5">
        <img src={photo} alt="food" className="w-full" />
        <div className="px-4 py-4">
          <div className="flex flex-col gap-2">
            <p className="text-2xl">{cont}</p>
            <p className="text-gray-400">${price}</p>
          </div>
          <button
            onClick={Handle}
            className="px-4 py-1 bg-blue-500 rounded-md mt-3  hover:bg-blue-400 transition text-white"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Meals;
