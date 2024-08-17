import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen bg-cover bg-left" style={{backgroundImage : "url(https://img.freepik.com/free-vector/abstract-background-with-squares_23-2148995948.jpg)"}}>
      <div className="w-4/5 m-auto flex items-center justify-center flex-col">
        <img src="https://i.ibb.co/0M8nVVM/page-not-found.png" alt="" />
        <Link to={"/"}>
          <button className="btn bg-[#FF2279] font-bold text-white">Go To Home </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
