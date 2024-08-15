import Card from "../Shared/Card";

const ProductDisplay = () => {
  return (
    <div className=" py-5 bg-[#FF2279]/15 mt-10">
      <div className="max-w-7xl m-auto md:px-10 px-5 mt-10 ">
        <div>
          <div className=" flex justify-between items-center pb-5">
            <p className="text-3xl capitalize">Watch</p>
            <p className="text-[#eb8f8c]">See More</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 grid-cols-1 ">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="max-w-7xl m-auto md:px-10 px-5 mt-10 ">
        <div>
          <div className=" flex justify-between items-center pb-5">
            <p className="text-3xl capitalize">Watch</p>
            <p className="text-[#eb8f8c]">See More</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 grid-cols-1 ">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="max-w-7xl m-auto md:px-10 px-5 mt-10 ">
        <div>
          <div className=" flex justify-between items-center pb-5">
            <p className="text-3xl capitalize">Watch</p>
            <p className="text-[#eb8f8c]">See More</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 grid-cols-1 ">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
