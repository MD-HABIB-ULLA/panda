import { useLocation } from "react-router-dom";
import Card from "../Shared/Card";
import { useEffect, useState } from "react";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { MdManageSearch } from "react-icons/md";
import useAxiosPablic from "../../Hooks/useAxiosPpablic";

const Products = () => {
  const location = useLocation();
  const [paramsProducts, setParamsProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState("");
  const [brandName, setBrandName] = useState("");
  const [inputMinPrice, setInputMinPrice] = useState("");
  const [inputMaxPrice, setInputMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [page, setPage] = useState("");
  const [brands, setBrands] = useState([]);
  const [count, setCount] = useState([]);
  const axiosPublic = useAxiosPablic();
  // console.log(sort);
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const [category, setCategory] = useState(params.get("category") || "");
  const [search, setSearch] = useState(params.get("search") || "");

  const handleApplyFilters = () => {
    setCategory("");
    setBrandName("");
    setMinPrice(inputMinPrice); // Update filter state
    setMaxPrice(inputMaxPrice); // Update filter state
  };

  useEffect(() => {
    if ((location.pathname || location.search)) {
      setSearch(params.get("search") || "");
      setCategory("");
      setBrandName("");
    }
    console.log("hello");
  }, [location.pathname, location.search]);
  // console.log(search, location);
  console.log(location.pathname && location.search);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let response;
        const queryParams = new URLSearchParams();

        if (search) {
          queryParams.append("search", search);
        }
        if (category) {
          queryParams.append("category", category);
        }
        if (brandName) {
          queryParams.append("brandName", brandName);
        }
        if (sort) {
          queryParams.append("sort", sort); // Add sort to query params
        }
        if (page) {
          queryParams.append("page", page); // Add sort to query params
        }
        if (maxPrice) {
          queryParams.append("maxPrice", maxPrice); // Add sort to query params
        }
        if (minPrice) {
          queryParams.append("minPrice", minPrice); // Add sort to query params
        }

        const urlWithParams = `/products?${queryParams.toString()}`;
        console.log(urlWithParams);
        response = await axiosPublic.get(urlWithParams);
        console.log(response);
        let sortedProducts = [...response.data.products];
        setCount(response.data.count);

        // Sort products on the client side if needed
        if (sort === "low-to-high") {
          sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sort === "high-to-low") {
          sortedProducts.sort((a, b) => b.price - a.price);
        } else if (sort === "newest-first") {
          sortedProducts.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
        }

        setParamsProducts(sortedProducts);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [
    category,
    search,
    brandName,
    sort,
    location.pathname,
    page,
    minPrice,
    maxPrice,
  ]);

  useEffect(() => {
    axiosPublic
      .get("/brands")
      .then((res) => setBrands(res.data))
      .catch((err) => console.error(err));
  }, []);

  const array = [];
  const i = count / 12;

  useEffect(() => {
    if (count < 12) {
      setPage(1);
    }
  }, [count]);
  if (i > 1) {
    const index = Math.ceil(i);
    for (let j = 0; j < index; j++) {
      array.push(j);
    }
  }

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center lg:bg-white bg-[#FF2279]/15">
          <div className="w-full px-2 bg-white mb-2 ">
            <div className="bg-gray-400/15 w-full flex flex-row lg:justify-end justify-between py-3 rounded-lg px-3">
              <label
                htmlFor="my-drawer-2"
                className="btn drawer-button lg:hidden flex items-center"
              >
                Filter <MdManageSearch className="text-xl" />
              </label>
              <select
                className="select w-full max-w-xs"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option disabled value="">
                  Sort By
                </option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to Low</option>
                <option value="newest-first">Newest First</option>
              </select>
            </div>
          </div>
          {paramsProducts.length > 0 ? (
            <div className="px-2">
              {!loading ? (
                <div className="lg:bg-[#FF2279]/15 px-2 py-3 rounded-lg">
                  <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
                    {paramsProducts.map((product) => (
                      <Card key={product._id} data={product} />
                    ))}
                  </div>
                  <div className="join  w-full  flex justify-center py-5">
                    {array?.map((i) => (
                      <button
                        onClick={() => setPage(i + 1)}
                        key={i}
                        className={`join-item btn ${
                          i + 1 === page ? "btn-active" : ""
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
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
        <div className="drawer-side z-40">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="p-4 border-r border-gray-600 bg-white text-base-content min-h-full w-72">
            <ul className="menu  ">
              <label htmlFor="" className="text-xl font-bold mb-4 block">
                Categories
              </label>
              {brands?.map((categoryData) => (
                <li key={categoryData.category} className="pl-3">
                  <div
                    onClick={() => {
                      setCategory(categoryData.category);
                      setSearch("");
                      setBrandName("");
                      setMinPrice("");
                      setMaxPrice("");
                    }}
                    className={`${
                      categoryData.category === category && "bg-[#FF136F]/15"
                    } cursor-pointer p-2 rounded-lg`}
                  >
                    {categoryData.category}
                  </div>
                  {categoryData.category === category && (
                    <ul className="space-y-2 menu pl-5">
                      {categoryData.brands.map((brand, index) => (
                        <li
                          onClick={() => {
                            setCategory(categoryData.category);
                            setBrandName(brand);
                          }}
                          key={index}
                          className={`text-gray-700 ${
                            brandName === brand && "bg-gray-400"
                          } cursor-pointer rounded-lg px-2 py-2`}
                        >
                          {brand}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mb-4 px-2">
              <label className="text-lg font-semibold">Price Range</label>
              <div className="mt-2 ">
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min Price"
                    value={inputMinPrice}
                    onChange={(e) => setInputMinPrice(e.target.value)}
                    className="input input-bordered w-full "
                  />
                  <input
                    type="number"
                    placeholder="Max Price"
                    value={inputMaxPrice}
                    onChange={(e) => setInputMaxPrice(e.target.value)}
                    className="input input-bordered w-full"
                  />
                </div>
                <button
                  onClick={handleApplyFilters}
                  className="btn bg-[#ff3081] text-white mt-3 w-full"
                >
                  Apply
                </button>
              </div>
            </div>
            <div>
              <p
                className="text-xl font-bold text-center bg-gray-300 px-2 py-2 rounded-lg cursor-pointer"
                onClick={() => {
                  setCategory("");
                  setBrandName("");
                  setSearch("");
                  setMinPrice("");
                  setMaxPrice("");
                }}
              >
                Reset all{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
