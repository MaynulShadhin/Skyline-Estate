import { BiSolidArea } from "react-icons/bi";
import { MdOutlineBedroomParent } from "react-icons/md";
import { RiCurrencyFill } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetail = () => {
    const cards = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const card = cards.find(card => card.id === idInt)
    const { image, segment_name, estate_title, location, area, price, status, facilities, description, } = card
    return (
        <div className="mx-auto container my-20">
            <h1 className="text-5xl font-semibold mb-10">{estate_title}</h1>
            <p className="text-xl mb-4 text-gray-600">{location}</p>
            <p className='font-medium text-lime-500 mb-20 text-xl'>{segment_name}</p>
            <div>
                <img src={image} alt="" />
            </div>
            <div className="bg-white my-10">
                <p className="text-2xl font-semibold bg-gray-500 text-white px-6 py-4">Description</p>
                <p className="px-8 py-6 text-gray-600">{description}</p>
            </div>
            <div className="bg-white pb-6">
                <p className="text-2xl font-semibold bg-gray-500 text-white px-6 py-4 mb-10">Property Details</p>
                <div className="ml-10">
                    <div className='flex  gap-20'>
                        <div className='flex items-center gap-2'>
                            <span className='text-xl text-lime-500'><BiSolidArea /></span>
                            <p className='text-gray-500'>{area}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='text-xl text-lime-500'><MdOutlineBedroomParent /></span>
                            <p className='text-gray-500'>{status}</p>
                        </div>

                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                        <span className='text-xl text-lime-500'><RiCurrencyFill /></span>
                        <p className='text-gray-500'>{price}</p>
                    </div>
                    <div className='my-4 text-gray-500'>
                        <p className='font-semibold'>Facilities:</p>
                        {
                            facilities.map((facility, idx) => <li key={idx} className='ml-2 list-disc'>{facility}</li>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardDetail;