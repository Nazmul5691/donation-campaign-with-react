import { useLoaderData } from "react-router-dom";
import Categoris from "../../components/Categories/Categoris";
import Banner from "../../components/Header/Banner/Banner";


const Home = () => {


    const categoris = useLoaderData()

    // console.log(categoris);


    return (
        <div>
            <Banner></Banner>
            <Categoris categoris={categoris}></Categoris>

        </div>
    );
};

export default Home;