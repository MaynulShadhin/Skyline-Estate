import service from '../assets/service.png';
import { RiHome8Line } from "react-icons/ri";
import { TbHome } from "react-icons/tb";
import { VscTools } from "react-icons/vsc";
import { FaBuilding } from "react-icons/fa";
const OurService = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center m-8 lg:container mx-auto w-full gap-8'>
            <div>
                <img src={service} alt="" />
            </div>
            <div className='m-8'>
                <div className='space-y-2'>
                    <RiHome8Line className='text-3xl text-lime-500'></RiHome8Line>
                    <h1 className='text-4xl font-bold'>Our Services</h1>
                    <p className='text-gray-400 text-xl'>What We Do For You</p>
                </div>
                <p className='mt-10 text-gray-400'>Discover unparalleled expertise in commercial real estate with our <br /> services. From property acquisition to leasing and management,<br />  we provide tailored solutions to maximize your investment potential. <br /> Trust us for comprehensive, client-focused strategies <br /> that drive success.</p>
                <div className='flex gap-4 mt-8'>
                    <span className='text-5xl text-lime-500 flex items-center justify-center border-2 border-lime-500 rounded-full w-24 h-14 lg:h-24'><TbHome></TbHome></span>
                    <div>
                        <p className='text-2xl font-bold'>Renting and Selling Services</p>
                        <p className='text-gray-400 mt-4'>Unlock the potential of your property with our expert renting and selling services. <br /> From strategic marketing to seamless transactions, trust us to maximize returns and <br /> find the perfect tenants or buyers.</p>
                    </div>
                </div>
                <div className='flex gap-4 mt-8'>
                    <span className='text-5xl text-lime-500 flex items-center justify-center border-2 border-lime-500 rounded-full w-24 h-14 lg:h-24'><VscTools></VscTools></span>
                    <div>
                        <p className='text-2xl font-bold'>Property Management</p>
                        <p className='text-gray-400 mt-4'>Elevate your property investment with our dedicated property management services. <br /> From maintenance to tenant relations, we ensure optimal performance and <br /> peace of mind for property owners.</p>
                    </div>
                </div>
                <div className='flex gap-4 mt-8'>
                    <span className='text-5xl text-lime-500 flex items-center justify-center border-2 border-lime-500 rounded-full w-24 h-14 lg:h-24'><FaBuilding></FaBuilding></span>
                    <div>
                        <p className='text-2xl font-bold'>Property Listing</p>
                        <p className='text-gray-400 mt-4'>Gain visibility and attract the right buyers or tenants with our comprehensive property listing services. <br /> From professional photography to strategic marketing, we showcase your property <br /> effectively for maximum exposure and results.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;