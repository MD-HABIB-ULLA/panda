const Categories = () => {
  return (
    <div>
      <div className="max-w-7xl md:px-10 px-5 grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-3  mt-10">
        <div className="flex items-center justify-between px-6 bg-[#FF9C35] rounded-lg py-4">
          <h1 className="lg:text-3xl md:text-2xl text-3xl font-bold text-white uppercase">Watch</h1>
          <img
            src="https://i.ibb.co/QJB4rDQ/trzcacak-1.png"
            className="h-20"
            alt=""
          />
        </div>
        <div className="flex items-center justify-between px-6 bg-[#FF136F] rounded-lg py-4">
          <h1 className="lg:text-3xl md:text-2xl text-3xl font-bold text-white uppercase">bag</h1>
          <img
            src="https://i.ibb.co/xmKtG3v/1214084-backpack-png-image-backpack-png-2000-2000-1.png"
            className="h-20"
            alt=""
          />
        </div>
        <div className="flex items-center justify-between px-6 bg-[#403EFB] rounded-lg py-4">
          <h1 className="lg:text-3xl md:text-2xl text-3xl font-bold text-white uppercase">shoes</h1>
          <img
            src="https://i.ibb.co/dsN3K22/trzcacak-2.png"
            className="h-20"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
