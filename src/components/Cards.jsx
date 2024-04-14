import { useLoaderData } from "react-router-dom";
import { RiHomeOfficeLine } from "react-icons/ri";
import SingleCard from "./SingleCard";

const Cards = () => {
    const cards = useLoaderData()
    return (
        <div className="lg:container mx-4 md:mx-auto my-20">
            <div className="mb-8 mx-2 lg:mx-0">
                <span className="text-3xl text-green-500"><RiHomeOfficeLine /></span>
                <h2 className="text-4xl font-semibold uppercase mt-4">Recent Properties</h2>
                <p className="text-lg text-gray-400">FIND YOUR PROPERTY IN YOUR CITY</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    cards.map(card=> <SingleCard key={card.id} card={card}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default Cards;