import { Helmet } from "react-helmet-async";
import signUpImg from "../../../public/signup.jpg";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Register = () => {

    const [showPassword, setShowPassword] = useState('');
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { createUser } = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    title: "User Successfully Sign Up",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });

                //  update profile
                updateProfile(result.user, {
                    displayName: data.name,
                    photoURL: data.photo,
                })
                    .then(() => console.log("profile updated"))
                    .catch()
                navigate(location?.state ? location.state : "/")

            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    title: "User already exist",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
            })
        reset();

    };

    return (
        <div>
            <Helmet>
                <title>Study Platform | Sign Up</title>
            </Helmet>
            <div className="bg-base-200">
                <div className="md:flex justify-around items-center gap-6 mt-20 mb-20 lg:mr-10 lg:ml-10">
                    <div className="md:w-1/2">
                        <img className="rounded-lg h-96 mx-auto" src={signUpImg} alt="" />
                    </div>
                    <div className="md:w-1/2 shadow-2xl bg-base-100 p-10 lg:mt-20 lg:mb-20">
                        <h1 className="lg:text-5xl font-bold text-center">Sign Up Now </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            {/* name field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" {...register("name", { required: true })} className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            {/* email field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            {/* photo field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" {...register("photo", { required: true })} placeholder="Photo URL.." className="input input-bordered" />
                                {errors.photo && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            {/* password field */}
                            <div className="form-control relative border">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} name="password" {...register("password", { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,10}$/ })} placeholder="password" className="input input-bordered" />
                                <span className="absolute left-3/4 bottom-1/4" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Password must be at least 6 character or more</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">Password must be at least a Upper case and a Lower case and a number</p>
                                )}

                            </div>
                            {/* button */}
                            <div className="text-center">
                                <Link to='/login' className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                                    <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                                    <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                        <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                                        <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                                    </span>
                                    
                                    <input className="relative text-white uppercase" type="submit" value="Sign Up" />
                                </Link>
                            </div>
                        </form>
                        <p className="text-center">New Here, Please <Link to="/login" className="underline text-blue-700 font-bold">Log In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;