import Button from "./Button";

const Card = ({ data }) => {
  const { img, description, price, name, brand, date } = data;
  return (
    <div>
      <div className="p-4 bg-[#fff] rounded-2xl flex flex-col justify-between gap-5 lg:h-[450px] "> {/* Set fixed height here */}
        <div className="h-44 relative">
          <div className="absolute flex justify-between w-full">
            <p className="bg-[#403EFB] px-3 py-2 rounded-full text-white font-bold text-xs">
              {date}
            </p>
            <p className="text-rose-500 px-3 py-2 rounded-full bg-gray-200/15 font-bold text-xs">
              {brand}
            </p>
          </div>
          <img src={img} className="h-full mx-auto" alt="" />
        </div>
        <div className="text-center space-y-3 flex-grow"> {/* Ensure content stretches to fill available space */}
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-sm text-gray-600 w-4/5 m-auto flex-1">{description}</p>
          <p className="text-xl font-bold">$ {price}</p>
        </div>
        <div className="flex items-center justify-center">
          <Button btnText={"Buy Now"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
