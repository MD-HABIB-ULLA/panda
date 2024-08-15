import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPablic from "../../../Hooks/useAxiosPpablic";
import useAuth from "../../../Hooks/useAuth";

const Googlebtn = () => {
  const axiosPublic = useAxiosPablic();
  const location = useLocation();
  const navigate = useNavigate();
  const { singInUserByGoogle, setLoading, signOutUser } = useAuth();
  const handleGoogleBtn = () => {
    signOutUser();
    singInUserByGoogle()
      .then((res) => {
        if (res.user.displayName) {
          const userInfo = {
            name: res.user.displayName,
            email: res.user.email,
          };

          toast.success("Signin successful ");
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((error) => {
        console.log(error);
        if (
          error.code === "auth/account-exists-with-different-credential" ||
          error.code === "auth/email-already-in-use"
        ) {
          toast.error("This email alreay exist");
          setLoading(false);
        }
        if (error.code === "auth/popup-closed-by-user") {
          toast.error("Sign-in process was not completed. Please try again.");
          setLoading(false);
        }
      });
  };
  return (
    <div className="flex flex-col w-full ">
      <div className="text-center mb-2 ">OR , Login with </div>
      <div className="flex justify-center ">
        {" "}
        <div
          onClick={handleGoogleBtn}
          className="cursor-pointer bg-white rounded-full p-1 flex gap-1 text-black items-center pr-3"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB"
            alt=""
            className="h-10 rounded-full "
          />
          <p className="font-bold">Google</p>
        </div>
      </div>
    </div>
  );
};

export default Googlebtn;
