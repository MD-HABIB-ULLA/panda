import Card from "../Shared/Card";

const ProductDisplay = () => {
  return (
    <div className="max-w-7xl m-auto md:px-10 px-5 mt-10">
      <div className="grid md:grid-cols-3 gap-4 grid-cols-1 ">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ProductDisplay;
