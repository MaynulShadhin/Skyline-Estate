import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/Firebase Provider/FirebaseProvider";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Login = () => {
    const [error, setError] = useState('')
    const [showPass, setShowPass] = useState(false)

    const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        signInUser(email, password)
            .then(result => {
                toast.success("Login Successful")
                console.log(result.user)
                setTimeout(() => {
                    navigate(location?.state? location.state : '/') 
                }, 2000); 
            })
            .catch(error => {
                setError("Please check your email and password")
                console.error(error.message)
            })
    }

    //google sign in
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                toast.success("Google Login Successful")
                setTimeout(() => {
                    navigate(location?.state? location.state : '/') 
                }, 2000);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    //github sign in
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(() => {
                toast.success("GitHub Login Successful")
                setTimeout(() => {
                    navigate(location?.state? location.state : '/') 
                }, 2000);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login-Skyline Estate</title>
            </Helmet>
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6 text-gray-600">Streamlined login for efficient access. Secure authentication ensures data safety. User-friendly <br /> interface enhances navigation. Instant access to resources.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                {...register("email", { required: true })}
                                placeholder="email" className="input input-bordered" required />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="w-full flex items-center relative">
                                <input
                                    type={showPass ? "text" : "password"}
                                    {...register("password", { required: true })}
                                    placeholder="password" className="w-full input input-bordered" required />
                                <span onClick={() => setShowPass(!showPass)} className="absolute right-2">
                                    {
                                        showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                            {errors.email && <span className="text-red-600">This field is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-lime-500 text-white hover:bg-lime-600">Login</button>
                        </div>
                        {
                            error && <p className="text-red-600 text-center text-sm">{error}</p>
                        }
                    </form>
                    <p className="text-center text-gray-500 mb-4">-----------Continue with----------</p>
                    <div className="flex justify-around mb-4">
                        {/* google button */}
                        <button onClick={handleGoogleSignIn} className="bg-slate-100 rounded-xl px-8 py-2">
                            <FaGoogle className="text-2xl"></FaGoogle>
                        </button>

                        {/* github button */}
                        <button onClick={handleGithubSignIn} className="bg-slate-100 rounded-xl px-8 py-2">
                            <FaGithub className="text-2xl"></FaGithub>
                        </button>
                    </div>
                    <ToastContainer></ToastContainer>
                    <div className="flex justify-around mb-4">
                        <span className="text-sm">Do not Have An Account?</span>
                        <Link to='/register' className="text-lime-500 underline">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;