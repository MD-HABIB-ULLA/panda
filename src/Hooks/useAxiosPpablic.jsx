import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://gym-server-pi.vercel.app",
  baseURL: "https://panda-searver.vercel.app",
});

const useAxiosPablic = () => {
  return axiosPublic;
};

export default useAxiosPablic;
