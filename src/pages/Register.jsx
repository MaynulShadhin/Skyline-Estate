import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/Firebase Provider/FirebaseProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [error, setError] = useState('')
    const [showPass, setShowPass] = useState(false)


    const { createUser,updateUserProfile,setReload } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    //navigate
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";

    const onSubmit = (data) => {
        const { email, password,fullName,image } = data

        if (password.length < 6) {
            setError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setError('Must have an Uppercase letter in the password');
            return
        }
        else if (!/[a-z]/.test(password)) {
            setError('Must have a Lowercase letter in the password')
            return
        }

        //reset
        setError('')

        // create user and update profile
        createUser(email, password)
            .then(() => {
                updateUserProfile(fullName,image)
                .then(()=>{
                    toast.success('Registration Successful');
                    setTimeout(() => {
                        navigate(from);
                    }, 2000);
                    setReload(true)
                })
                
            })
            .catch(error => {
                setError("email-already in use")
                console.log(error)
            })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6 text-gray-600">Quick registration process for new users. Robust security measures safeguard information. <br /> Seamless integration with user profiles. Simplified steps for access.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text"
                                    {...register("fullName", { required: true })}
                                    placeholder="Your Name" className="input input-bordered" />
                                {errors.fullName && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text"
                                    {...register("image", { required: true })}
                                    placeholder="Photo url" className="input input-bordered" />
                                    {errors.image && <span className="text-red-600">This field is required</span>}
                            </div>
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
                                {errors.password && <span className="text-red-600">This field is required</span>}
                            </div>
                            {
                                error && <p className="text-red-600 text-center mb-2">{error}</p>
                            }
                            <ToastContainer></ToastContainer>
                            <div className="form-control mt-6">
                                <button className="btn bg-lime-500 text-white hover:bg-lime-600">Register</button>
                            </div>
                        </form>
                        <div className="flex justify-around mb-4">
                            <span className="text-sm">Already Have An Account?</span>
                            <Link to='/login' className="text-lime-500 underline">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;