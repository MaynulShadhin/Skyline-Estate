import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
import BestWay from "../components/BestWay";
import Cards from "../components/Cards";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home-Skyline Estate</title>
            </Helmet>
            <Banner></Banner>
            <Cards></Cards>
            <BestWay></BestWay>
        </div>
    );
};

export default Home;