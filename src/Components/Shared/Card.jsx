import Button from "./Button";

const Card = () => {
  return (
    <div>
      <div className="p-4 bg-[#fff]   rounded-2xl flex flex-col justify-center gap-5">
        <div className="h-44">
          {" "}
          <img
            src="https://th.bing.com/th?id=OPEC.5I5WleC%2f5TnDnw474C474&w=592&h=550&o=5&dpr=1.6&pid=21.1"
            className="h-full mx-auto "
            alt=""
          />
        </div>
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-bold">Ison Backpack</h1>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
            alias.
          </p>
          <p className="text-xl font-bold">$1234</p>
        </div>
        <div className="flex items-center justify-center">
        <Button btnText={"Buy Now"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
