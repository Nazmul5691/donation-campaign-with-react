import { useLoaderData } from "react-router-dom";
import Categoris from "../../components/Categories/Categoris";
import Banner from "../../components/Header/Banner/Banner";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {


    const categoris = useLoaderData()

    // console.log(categoris);
    

    return (
        <div>
            <Banner></Banner>
            <div data-aos="fade-in"></div>
            <div data-aos="fade-up" data-aos-anchor=".other-element"></div>
            <Categoris categoris={categoris}></Categoris>


        </div>
    );
};

export default Home;