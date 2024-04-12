import PropTypes from 'prop-types';
import { BiSolidArea } from "react-icons/bi";
import { MdOutlineBedroomParent } from "react-icons/md";
import { RiCurrencyFill } from "react-icons/ri";
const SingleCard = ({ card }) => {
    const { image, segment_name, estate_title, location, area,price, status, facilities } = card
    return (
        <div className='mx-4 lg:mx-0 p-4 bg-white rounded-md'>
            <img className='w-full md:h-[250px] lg:h-[320px] rounded-sm' src={image} alt="" />
            <p className='font-medium text-lime-500 my-4'>{segment_name}</p>
            <p className='text-2xl font-semibold mb-2'>{estate_title}</p>
            <p className='text-sm text-gray-400 mb-4'>{location}</p>
            <div className='flex justify-between'>
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
                    facilities.map((facility,idx)=><li key={idx} className='ml-2 list-disc'>{facility}</li>)
                }
            </div>
            <button className='btn bg-lime-500 text-white hover:text-black'>View Property</button>
        </div>
    );
};

SingleCard.propTypes = {
    card: PropTypes.object.isRequired
}
export default SingleCard;