import { useEffect, useState } from "react";
import Card from "../Shared/Card";
import useAxiosPablic from "../../Hooks/useAxiosPpablic";
import { Link } from "react-router-dom";

const ProductDisplay = () => {
  const axiosPublic = useAxiosPablic();
  const [shoes, setShoes] = useState(null);
  const [watch, setWatch] = useState(null);
  const [tv, setTV] = useState(null);
  const [bag, setBag] = useState(null);

  useEffect(() => {
    axiosPublic
      .get("/shoe")
      .then((res) => setShoes(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axiosPublic
      .get("/watch")
      .then((res) => setWatch(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axiosPublic
      .get("/tv")
      .then((res) => setTV(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axiosPublic
      .get("/bag")
      .then((res) => setBag(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(shoes);
  const product = {
    _id: "66bddcee370baaac4d6f42e0",
    date: "2024-08-06",
    name: "Smart 3D TV",
    description:
      "Enjoy immersive 3D entertainment with this 60-inch Smart 3D TV.",
    img: "https://i.ibb.co/7jp1Jt7/9.webp",
    price: 1199.99,
    category: "TV",
    brand: "LG",
  };

  return (
    <div className=" py-5 bg-[#FF2279]/15 mt-10">
      <div className="max-w-7xl m-auto md:px-10 px-5 mt-10 ">
        <div>
          <div className=" flex justify-between items-center pb-5">
            <p className="text-3xl capitalize">Watch</p>
            <Link to={"/products?category=Watch"} className="text-[#eb8f8c]">
              See More
            </Link>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 ">
            {watch?.map((product) => (
              <Card key={product._id} data={product} />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl m-auto md:px-10 px-5 mt-10 ">
        <div>
          <div className=" flex justify-between items-center pb-5">
            <p className="text-3xl capitalize">Shoes</p>
            <Link to={"/products?category=Shoe"} className="text-[#eb8f8c]">
              See More
            </Link>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 ">
            {shoes?.map((product) => (
              <Card key={product._id} data={product} />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl m-auto md:px-10 px-5 mt-10 ">
        <div>
          <div className=" flex justify-between items-center pb-5">
            <p className="text-3xl capitalize">Television</p>
            <Link to={"/products?category=TV"} className="text-[#eb8f8c]">
              See More
            </Link>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 ">
            {tv?.map((product) => (
              <Card key={product._id} data={product} />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl m-auto md:px-10 px-5 mt-10 ">
        <div>
          <div className=" flex justify-between items-center pb-5">
            <p className="text-3xl capitalize">Bags</p>
            <Link to={"/products?category=Bag"} className="text-[#eb8f8c]">
              See More
            </Link>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 ">
            {bag?.map((product) => (
              <Card key={product._id} data={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
