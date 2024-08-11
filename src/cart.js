import { useState } from "react";

function Cart({ items, Ondelete, ClearAll }) {
  const [Isopen, SetIsopen] = useState(false);

  function Toggle() {
    SetIsopen(!Isopen);
  }

  return (
    <>
      <button
        onClick={Toggle}
        className=" absolute  right-8 top-6 font-semibold text-6xl text-red-500"
      >
        &times;
      </button>

      {Isopen && (
        <div className=" absolute  right-10 bg-slate-200 py-6 px-7 top-24 rounded-lg   w-[700px] ">
          <ul>
            {items.map((el, index) => (
              <li className="flex mb-10 items-center gap-4 border rounded-md  pr-3">
                <img src={el.photo} alt="image-1 " className="rounded-md"></img>
                <div>
                  <p>{el.content}</p>
                  <p>${el.price}</p>
                  <p>{el.star}</p>

                  <button
                    onClick={() => Ondelete(index)}
                    className="px-4 py-2 bg-red-500 rounded-md mt-10"
                  >
                    {" "}
                    Delete
                  </button>
                </div>
              </li>
            ))}
            <div className="flex  justify-end">
              <button
                onClick={ClearAll}
                className="px-4 py-1 bg-red-500 rounded-md  "
              >
                Clear All
              </button>
            </div>
          </ul>
        </div>
      )}
    </>
  );
}

export default Cart;
