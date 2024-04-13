import { FaFacebookSquare, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import { MdOutlineAddHomeWork } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800"
        >
            <div className="container flex flex-col justify-between py-20 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <a rel="noopener noreferrer" href="#" className="flex justify-center items-center space-x-3 lg:justify-start">
                        <span className="text-2xl text-rose-600"><MdOutlineAddHomeWork /></span>
                        <span className="self-center text-2xl font-semibold">Skyline Estate</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-900">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Features</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Integrations</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Pricing</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-900">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Privacy</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase dark:text-gray-900">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Public API</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Documentation</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Guides</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase dark:text-gray-900">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <span className="text-2xl"><FaFacebookSquare></FaFacebookSquare></span>
                            <span className="text-2xl"><FaGithubSquare></FaGithubSquare></span>
                            <span className="text-2xl"><FaTwitterSquare></FaTwitterSquare></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center dark:text-gray-600">© 2024 Company Co. All rights reserved.</div>
        </footer>
    );
};

export default Footer;