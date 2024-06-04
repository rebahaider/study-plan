import { Helmet } from "react-helmet-async";
import signUpImg from "../../../public/signup.jpg";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {

    const axiosPublic = useAxiosPublic();
    const [showPassword, setShowPassword] = useState('');
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user saved in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user created successfully');
                                    reset();
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
                                    navigate(location?.state ? location.state : "/")
                                }
                            })
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
            })
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
                            {/* role field */}
                            <div className="form-control">

                                <select className="select select-bordered w-full ">
                                    <option disabled selected>Select Your Role</option>
                                    <option name="student" {...register("student", { required: true })}>Student</option>
                                    <option name="tutor" {...register("tutor", { required: true })}>Tutor</option>
                                    <option name="admin" {...register("admin", { required: true })}>Admin</option>
                                </select>
                            </div>
                            {/* password field */}
                            <div className="form-control relative">
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
                            <div className="form-control mt-6">
                                <input className="btn bg-[#5BBF96] font-bold" type="submit" value="Sign Up" />
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