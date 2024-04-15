import bestImg from "../assets/bestway.png"
const BestWay = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 container mx-auto">
            <div className="m-8">
                <img src={bestImg} alt="" />
            </div>
            <div className="m-8">
                <h1 className="text-5xl font-bold mb-4">The <span className="text-yellow-500">best way</span> to find your property</h1>
                <p className="text-xl font-semibold mb-2">Benefits:</p>
                <ul className="text-xl list-disc space-y-4">
                    <li className="ml-8">Helps you easily download data, Reduce number of incidents, and save workers</li>
                    <li className="ml-8">Gets you more success in your health and safety system</li>
                    <li className="ml-8">Makes is easy to seriously move health and safety forward and real-time reporting</li>
                    <li className="ml-8">Gives you the confidence to reduce risk and provide a safety work place</li>
                    <li className="ml-8">Avoid common safety and hazard mistakes</li>
                </ul>
            </div>
        </div>
    );
};

export default BestWay;