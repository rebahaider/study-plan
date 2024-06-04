import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import loginImg from "../../../public/login.jpg";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";


const Login = () => {

    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState('');
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        // login with email and password
        signInUser(data.email, data.password)
            .then(result => {
                const logInUser = result.user;
                console.log(logInUser);
                Swal.fire({
                    title: "User Loged In Successfully",
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
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: "Loged In Failed",
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
        navigate(location?.state ? location.state : "/")
    };

    // login with google
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(() => {
                Swal.fire({
                    title: "User Loged In Successfully",
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
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: "Loged In Failed",
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
        navigate(location?.state ? location.state : "/")
    }

    // login with github
    const handleSignInWithGithub = () => {
        signInWithGithub()
            .then(() => {
                Swal.fire({
                    title: "User Loged In Successfully",
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
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: "Loged In Failed",
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
        navigate(location?.state ? location.state : "/")
    }
    return (
        <div>
            <Helmet>
                <title>Study Platform | Log In</title>
            </Helmet>
            <div className="bg-base-200">
                <div className="md:flex justify-around items-center gap-6 mt-20 mb-20 lg:mr-10 lg:ml-10">
                    <div className="md:w-1/2">
                        <img className="rounded-lg" src={loginImg} alt="" />
                    </div>
                    <div className="md:w-1/2 shadow-2xl bg-base-100 p-10 lg:mt-20 lg:mb-20">
                        <h1 className="lg:text-5xl font-bold text-center">Log In Now </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            {/* email field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" {...register("email", { required: true })} className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>

                            {/* password field */}
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} placeholder="password" name="password" {...register("password", { required: true })} className="input input-bordered" />
                                <span className="absolute left-3/4 bottom-1/4" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                                {errors.password && <span className="text-red-600">Password is required</span>}
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn  bg-[#5BBF96] font-bold" type="submit" value="LogIn" />
                            </div>
                        </form>
                        <p className="text-center mb-3">New Here, Please <Link to="/register" className="underline text-blue-700 font-bold">Sign Up</Link></p>

                        {/* Log in with Google */}
                        <p className="text-center mb-4">
                            <button onClick={handleSignInWithGoogle} className="btn btn-ghost btn-outline font-extrabold"><FaGoogle></FaGoogle> Log In Using Google Account</button>
                        </p>


                        {/* Login with Github */}
                        <p className="text-center">
                            <button onClick={handleSignInWithGithub} className="btn btn-ghost btn-outline font-extrabold"><FaGithub></FaGithub> Log In Using Github Account</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;