import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../../public/login.jpg";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import axios from "axios";


const Login = () => {

    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate();


    // login with email and password

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password };
        console.log(user);

        signInUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email };
                // get access token
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : "/")
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
                        }
                    })
            })
            .catch(error => {
                console.log(error)
            });
    }

    // login with google
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(() => {
                navigate(location?.state ? location?.state : "/")
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
    }

    // login with github
    const handleSignInWithGithub = () => {
        signInWithGithub()
            .then(() => {
                navigate(location?.state ? location?.state : "/")
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
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-3xl font-bold">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            {/* password field */}
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                                <span className="absolute left-3/4 bottom-1/4" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Login" />
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