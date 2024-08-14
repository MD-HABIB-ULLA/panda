import Banner from "../Components/Other/Banner/Banner";
import Categories from "../Components/Other/Categories";
import ProductDisplay from "../Components/Other/ProductDisplay";


const Home = () => {
    return (
        <div className=" min-h-screen">
            <Banner/>
            <Categories/>
            <ProductDisplay/>
        </div>
    );
};

export default Home;