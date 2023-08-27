import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import { scrollTo } from "../../helper";

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALE!!</h1>
                <p>There is nothing better than music</p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2"  onClick={() => scrollTo("categories")}>Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>;
};

export default Banner;
