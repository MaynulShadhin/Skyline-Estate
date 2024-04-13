import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6 text-gray-600">Quick registration process for new users. Robust security measures safeguard information. <br /> Seamless integration with user profiles. Simplified steps for access.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" placeholder="Photo url" className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-lime-500 text-white hover:bg-lime-600">Login</button>
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