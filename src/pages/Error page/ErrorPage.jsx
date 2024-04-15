import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center flex-col h-screen">
            <h2 className="text-7xl font-bold text-red-500">404 Error Page</h2>
            <p className="text-2xl font-medium my-8">Sorry, This page does not Exist</p>
            <Link to="/" className="btn">Go Back</Link>
        </div>
    );
};

export default ErrorPage;