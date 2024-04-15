import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../components/Firebase Provider/FirebaseProvider";
import { ToastContainer, toast } from "react-toastify";


const UpdateProfile = () => {
    const { updateUserProfile, user } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = (data) => {
        const { fullName, image } = data;
        updateUserProfile(fullName, image)
            .then(() => {
                toast.success('Profile has been updated');
            })
            .catch(error => {
                console.error(error.message)
            })
    }
    const { displayName, email, photoURL } = user
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 flex-1">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Update Profile</h1>
                    </div>

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <img className="rounded-full m-4 w-[310px] h-[310px]" src={photoURL} alt="" />
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text"
                                    {...register("fullName")}
                                    placeholder="Name"
                                    defaultValue={displayName}
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text"
                                    placeholder="Name"
                                    value={email}
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text"
                                    {...register("image")}
                                    placeholder="Photo URL"
                                    defaultValue={photoURL}
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-lime-500 text-white hover:bg-lime-600">Update Changes</button>
                            </div>
                            <ToastContainer></ToastContainer>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;