import Meals from "./section--1";

function Contetn({ Data, Saving }) {
  return (
    <>
      <div className="container mx-auto xl:max-w-[1200px]">
        <div className="grid grid-cols-4 gap-10 mt-20">
          {Data.map((el, index) => (
            <Meals
              key={index}
              photo={el.photo}
              price={el.price}
              cont={el.magac}
              Saving={Saving}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Contetn;
