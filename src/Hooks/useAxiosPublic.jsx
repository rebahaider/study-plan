import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'assignment-12-server-one-flax.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;