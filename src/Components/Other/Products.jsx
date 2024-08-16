import { useLocation, useParams } from "react-router-dom";
import Card from "../Shared/Card";
import { useEffect, useState } from "react";
import useAxiosPablic from "../../Hooks/useAxiosPpablic";

const Products = () => {
  const location = useLocation();
  const [paramsProducts, setParamsProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState("");

  const axiosPublic = useAxiosPablic();

  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const category = params.get("category");
  const search = params.get("search");
  console.log(category, search, sortOption);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        let response;

        if (category) {
          response = await axiosPublic.get(`/${category}`);
        } else if (search) {
          response = await axiosPublic.get(`/products?search=${search}`);
        } else {
          response = await axiosPublic.get(`/products`);
        }

        setParamsProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, [category, location.search]);
  console.log(paramsProducts);
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
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center  lg:bg-white bg-[#FF2279]/15">
          <div className="w-full px-2  bg-white mb-2">
            <div className="bg-gray-400/15 w-full flex flex-row lg:justify-end justify-between py-3 rounded-lg px-3  ">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden"
              >
                Open drawer
              </label>
              <select
                className="select w-full max-w-xs"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option disabled value="">
                  Pick your favorite Simpson
                </option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to Low</option>
                <option value="newest-first">Newest First</option>
              </select>
            </div>
          </div>
          {paramsProducts?.length > 0 ? (
            <div className="px-2">
              {!loading ? (
                <div className="lg:bg-[#FF2279]/15 px-2 py-3 rounded-lg">
                  <div className="">
                    <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
                      {paramsProducts.map((product) => (
                        <Card key={product._id} data={product} />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center items-center h-screen">
                  <div className="rounded-full h-20 w-20 bg-[#FF136F] animate-ping"></div>
                </div>
              )}
            </div>
          ) : (
            <div className="min-h-screen text-3xl pt-10">
              {!loading ? (
                <p>No product found</p>
              ) : (
                <div className="flex justify-center items-center h-screen">
                  <div className="rounded-full h-20 w-20 bg-[#FF136F] animate-ping"></div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu border-r border-gray-600 bg-white text-base-content min-h-full w-72 p-4">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
